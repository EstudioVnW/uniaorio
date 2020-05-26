// Libs
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

// Components
import Subtitle from '../components/ModalSubtitle';
import filterIcon3 from '../assets/filter-icon-3.svg';
import filterSelectedIcon3 from '../assets/filter-selected-icon-3.svg';
import { getIndexes } from '../api';
import Loading from '../assets/loading.svg';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvcmNvdXRvIiwiYSI6ImNrOWZudjNtcTAyd3EzbHI3a2ppbnpnemUifQ.D--CSyWyEk70oULTVok7vg';

class HumanitarianMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      lng: -43.2096,
      lat:  -22.9035,
      zoom: 5,
      selectedMenuItem: '',
      showSubtitle: false,
    };

    this.map = undefined;
  }

  choosePopup = (layer, feature) => {
    console.log('feature ', feature)
    const district = `<h2>${feature.district || feature.title}</h2>`;
    const casosConf = `<p id='covid-color_confirm'>${feature.confirmed_cases}</p>`;
    const mortes = `<p id='covid-color'>${feature.deaths}</p>`;
    const demand = `<p id='solidariedade-color2'>${feature.demands || 0}</p>`;
    const entregaSolid = `<p id='solidariedade-color'>${feature.delivered_amount || 0}</p>`;

    if (layer === 'Solidariedade') {
      const ongsFiltered = this.state.ongs.features.filter(ongs => ongs.properties.district === feature.district).map(ong => ong.properties.title)
      
      return `${district}
        <div>
          <span>${demand}<small>Demanda</small></span>
          <span>${entregaSolid}<small>Entrega</small></span>
        </div>
        <span> ${ongsFiltered.length > 0 ? `Parceiros:  ${ongsFiltered}` : '' }</span>
      `
    }
    else if (layer === 'CovidDeaths' || layer === 'CovidCases') {
      return `${district}
        <div>
          <span>${casosConf}<small>Confirmados</small></span>
          <span>${mortes}<small>Óbitos</small></span>
        </div>`
    }
  }

  handlePopup = (layerName) => {
    let popup;

    this.map.on('mouseenter', layerName, (e) => {

      let coord = undefined;

      coord = e.features[0].geometry.coordinates.slice();

      while (Math.abs(e.lngLat.lng - coord[0]) > 180) {
        coord[0] += e.lngLat.lng > coord[0] ? 360 : -360;
      }

      const popupMarkup = this.choosePopup(layerName, e.features[0].properties)

      popup = new mapboxgl.Popup()
        .setLngLat(coord)
        .setHTML(popupMarkup)
        .addTo(this.map);

      return popup;
    });

    this.map.on('mouseleave', layerName, () => {
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

        if (prevProps.selectedMenuItem.layerName === 'Covid') {
          this.map.setLayoutProperty('CovidDeaths', 'visibility', 'none');
          this.map.setLayoutProperty('CovidCases', 'visibility', 'none');
        }

        if (prevProps.selectedMenuItem.layerName === 'Solidariedade') {
          this.map.setLayoutProperty('Solidariedade', 'visibility', 'none');
        }

        if (selectedMenuItem.layerName === 'Covid') {
          this.map.setLayoutProperty('CovidDeaths', 'visibility', 'visible');
          this.map.setLayoutProperty('CovidCases', 'visibility', 'visible');
          this.handlePopup('CovidDeaths');
          this.handlePopup('CovidCases');
        }

        if (selectedMenuItem.layerName === 'Solidariedade') {
          this.map.setLayoutProperty('Solidariedade', 'visibility', 'visible');
          this.handlePopup('Solidariedade');
        }
      }
    } 
  }

  async fetchNeighborhood() {
    try {
      this.setState({ isFetching: true });

      const response = await getIndexes('bairros');
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
      this.setState({
        bairros: geojson,
        isFetching: false,
      });

    } catch (error) {
      console.log(error);
      console.log(error.response);
      this.setState({ isFetching: false });
    }
  }

  async fetchOngs() {
    try {
      this.setState({ isFetching: true });

      const response = await getIndexes('ongs');
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

      this.setState({
        ongs: geojson,
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
    await this.fetchOngs();

    this.setState({isLoading: false});

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/igorcouto/ck9mtp0zx384s1jwau5diy2w4/',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      minZoom: 7,
      maxZoom: 13,
      maxBounds: [
        [-45.70898, -23.553521],
        [-40.40585, -20.715985]]
    });

    console.log('this.map', this.map)
    console.log('this.state', this.state)

    this.map.on('load', () => {
      this.map.flyTo({
        center: [this.state.lng, this.state.lat],
        zoom: 12,
        speed: 0.25
      });

      this.map.addSource('bairros', {
        type: 'geojson',
        data: this.state.bairros
      });

      // Covid 
      // this.map.addLayer({
      //   "id": "Covid",
      //   "type": "symbol",
      //   "source": "bairros",
      //   "layout": {
      //     "visibility": "none",
      //     "icon-ignore-placement": true,
      //     "icon-image": [
      //       "step",
      //       ["get", "deaths"],
      //       "",
      //       1,
      //       "Grupo 4409",
      //       20,
      //       "Grupo%204422",
      //       50,
      //       "Grupo 4408"
      //     ]
      //   },
      //   "paint": {
      //     "icon-opacity": 0
      //   }
      // });

      // cases
      this.map.addLayer({
        "id": "CovidCases",
        "type": "circle",
        "source": "bairros",
        "layout": {
          "visibility": "none",
        },
        "paint": {
          "circle-stroke-width": [
            "interpolate",
            ["linear"],
            ["get", "confirmed_cases"],
            20,
            4,

            100,
            8,

            150,
            16,

            200,
            32
          ],
          "circle-stroke-color": "hsla(144, 91%, 43%, 0.4)",
          "circle-color": "hsla(144, 91%, 43%, 0.4)",
        }
      });

      //deaths
      this.map.addLayer({
        "id": "CovidDeaths",
        "type": "circle",
        "source": "bairros",
        "layout": {
          "visibility": "none",
        },
        "paint": {
            "circle-stroke-width": [
            "interpolate",
            ["linear"],
            ["get", "deaths"],
            10,
            3,

            20,
            6,
            
            50,
            12,
            
            75,
            24
          ],
          "circle-stroke-color": "hsla(134, 44%, 46%, 0.6)",
          "circle-color": "hsla(134, 44%, 46%, 0.6)",
        }
      });

      // bairros title
      this.map.addLayer({
        "id": "Bairros-Title",
        "type": "symbol",
        "source": "bairros",
        "layout": {
          "text-size": 12,
          // "icon-ignore-placement": true,
          "text-field": [
            "case",
            [
              "match",
              ["get", "district"],
              ["NAO INFORMADO"],
              false,
              true
            ],
            ["to-string", ["get", "district"]],
            ["to-string", ["get", "district"]]
          ],
          "text-transform": "lowercase"
        },
        "paint": {
          "text-color": "#7A571D",
        }
      });

      // solidariedade
      this.map.addLayer({
        'id': 'Solidariedade',
        'type': 'symbol',
        'source': 'bairros',
        "layout": {
          "icon-ignore-placement": true,
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

      this.props.handleMenuItem({
        image: filterIcon3,
        selectedImage: filterSelectedIcon3,
        title: 'Solidariedade',
        color: '#F0184F',
        text: 'solid',
        layerName: 'Solidariedade'
      })
    })

    this.map.addControl(new mapboxgl.NavigationControl(), 'bottom-left');
  }

  handleModalSubtitle = () => {
    this.setState({
      showSubtitle: !this.state.showSubtitle,
    });
  }

  renderLoading = () => (
    <figure className='figureLoadingMap'>
      <img src={Loading} alt='Carregando...' className='imgLoading'/>
    </figure>
  )

  render() {
    const {isLoading, showSubtitle} = this.state;
    const {selectedMenuItem} = this.props;
    
    return (
      <div id="map">
        {isLoading
          ? this.renderLoading()
          : (
            <>
              <Subtitle
                handleModalSubtitle={this.handleModalSubtitle}
                showSubtitle={showSubtitle}
                selectedItem={selectedMenuItem}/>
              <div ref={el => this.mapContainer = el} className="mapContainer"/>
            </>
          )}
      </div>
    );
  }
}

export default HumanitarianMap;