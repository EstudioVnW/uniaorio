// Libs
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

// Components
import Subtitle from '../components/ModalSubtitle';
import filterIcon3 from '../assets/filter-icon-3.svg';
import filterSelectedIcon3 from '../assets/filter-selected-icon-3.svg';
import { getAllNeighborhood } from '../api';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvcmNvdXRvIiwiYSI6ImNrOWZudjNtcTAyd3EzbHI3a2ppbnpnemUifQ.D--CSyWyEk70oULTVok7vg';

class HumanitarianMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -43.2096,
      lat:  -22.9035,
      zoom: 12,
      currentOng: '',
      selectedMenuItem: '',
      showSubtitle: false,
    };

    this.map = undefined;
  }

  choosePopup = (layer, feature) => {
    const district = `<h2>${feature.district || feature.title}</h2>`;
    const ongName = `<h2>${feature.title}</h2>`;
    const casosConf = `<p id='covid-color_confirm'>${feature.confirmed_cases}</p>`;
    const adress = `<small>${feature.address_original}</small>`;
    const mortes = `<p id='covid-color'>${feature.deaths}</p>`;
    const demand = `<p id='solidariedade-color2'>${feature.demands || 0}</p>`;
    const entregaSolid = `<p id='solidariedade-color'>${feature.delivered_amount || 0}</p>`;
    const ongDemand = `<p id='ong-demand-color'>${feature.demands || 0}</p>`;
    const entrega = `<p id='ong-delivered-color'>${feature.delivered_amount || 0}</p>`;

    if (layer === 'layer-bairro-solidariedade2') {
      return `${district}
        <div>
          <span>${demand}<small>Demanda</small></span>
          <span>${entregaSolid}<small>Entrega</small></span>
        </div>`
    }
    else if (layer === 'layer-bairro-covid') {
      return `${district}
        <div>
          <span>${casosConf}<small>Confirmados</small></span>
          <span>${mortes}<small>Óbitos</small></span>
        </div>`
    }
    else if (layer === 'ongs-icons') {
      return `${ongName}${adress}
        <div>
          <span>${ongDemand}<small>Demanda</small></span>
          <span>${entrega}<small>Entrega</small></span>
        </div>`
    }
  }

  handlePopup = (layer) => {
    let popup;

    this.map.on('mouseenter', layer.layerName, (e) => {

      const isIcon = layer.layerName === 'ongs-icons' || layer.layerName === 'layer-bairro-covid' || layer.layerName === 'layer-bairro-solidariedade2';
      let coord = undefined;

      if (isIcon) {
        coord = e.features[0].geometry.coordinates.slice();

        while (Math.abs(e.lngLat.lng - coord[0]) > 180) {
          coord[0] += e.lngLat.lng > coord[0] ? 360 : -360;
        }
      }

      const popupMarkup = this.choosePopup(layer.layerName, e.features[0].properties)

      popup = new mapboxgl.Popup()
        .setLngLat(isIcon ? coord : e.lngLat)
        .setHTML(popupMarkup)
        .addTo(this.map);

      return popup;
    });

    this.map.on('mouseleave', layer.layerName, () => {
      this.map.getCanvas().style.cursor = '';
      popup.remove();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedMenuItem } = this.props;

    if (prevProps.selectedMenuItem !== selectedMenuItem) {
      if (selectedMenuItem.text === 'painel') {
        this.map.setLayoutProperty(prevProps.selectedMenuItem.layerName, 'visibility', 'none');
      }
      if (selectedMenuItem.text !== 'painel') {
        if (prevProps.selectedMenuItem.layerName && prevProps.selectedMenuItem.layerName !== 'ibge-renda') {
          this.map.setLayoutProperty(prevProps.selectedMenuItem.layerName, 'visibility', 'none');
        }
        this.map.setLayoutProperty(selectedMenuItem.layerName, 'visibility', 'visible');
        this.handlePopup(selectedMenuItem);
      }
    } 
  }

  async fetchNeighborhood() {
    try {
      this.setState({ isFetching: true });

      const response = await getAllNeighborhood();
      let geojson = {
        "type":
        "FeatureCollection",
        "features": []
      }
      response.data.data.forEach(item => {
        let feature = {
          "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [item._source.longitude, item._source.latitude]
          },
          "properties": item._source,
        }

        geojson['features'].push(feature)
      })
      console.log(geojson)

      this.setState({
        neighborhoodData: geojson,
        isFetching: false,
      });

    } catch (error) {
      console.log(error);
      console.log(error.response);
      this.setState({ isFetching: false });
    }
  }

  async componentDidMount () {
    await this.fetchNeighborhood();
    
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/igorcouto/ck9mtp0zx384s1jwau5diy2w4/',
      minZoom: 7,
      maxZoom: 13,
      maxBounds: [
        [-45.858984, -23.553521],
        [-40.50585, -20.715985]
      ]
    });

    this.map.on('load', () => {
      this.map.flyTo({
        center: [this.state.lng, this.state.lat],
        zoom: this.state.zoom,
        speed: 0.5
      });

      this.map.addSource('bairros', {
        type: 'geojson',
        data: this.state.neighborhoodData
      });

      this.map.addLayer({
        'id': 'layer-bairro-solidariedade2',
        'type': 'symbol',
        'source': 'bairros',
        // "source": "composite",
        // "source-layer": "bairros_1605-dxubaf",
        "layout": {
          "text-size": 12,
          "visibility": "visible",
          "icon-image": [
            "step",
            ["round",
              ["/",
                ["*",
                  100,
                  ["get", "delivered_amount"]
                ],
                ["get", "demands"]
              ]
            ],
            "",
            5,
            "25 (1)",
            50,
            "50",
            75,
            "75",
            100,
            "100"
          ],
          "text-field": [
            "step",
            ["get", "delivered_amount"],
            "",
            1,
            ["concat",
              ["to-string",
                ["round",
                  ["/",
                    ["*",
                      100,
                      ["get", "delivered_amount"]
                    ],
                    ["get", "demands"]
                  ]
                ]
              ],
              '%'
            ]
          ]
        },
        "paint": {
          "text-color": "#fff",
          "icon-opacity": 0.7
        },
      });

      console.log('map.getStyle().layers', this.map.getStyle().layers)

      this.props.handleMenuItem({
        image: filterIcon3,
        selectedImage: filterSelectedIcon3,
        title: 'Solidariedade',
        color: '#F0184F',
        text: 'solid',
        layerName: 'layer-bairro-solidariedade2'
      })
    })

    this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
  }

  handleModalSubtitle = () => {
    this.setState({
      showSubtitle: !this.state.showSubtitle,
    });
  }

  render() {
    return (
      <div id="map">
        <Subtitle
          handleModalSubtitle={this.handleModalSubtitle}
          showSubtitle={this.state.showSubtitle}
          selectedItem={this.props.selectedMenuItem}/>
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
      </div>
    );
  }
}

export default HumanitarianMap;