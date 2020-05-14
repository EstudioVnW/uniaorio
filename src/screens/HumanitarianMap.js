// Libs
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

// Components
import Menu from '../components/Menu';
import Subtitle from '../components/ModalSubtitle';
import filterIcon1 from '../assets/filter-icon-1.svg';
import filterSelectedIcon1 from '../assets/filter-selected-icon-1.svg';
// Images
// import MarkerIcon from '../assets/marker.svg';

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

  handlePopup = (layer) => {
    let popup;

    this.map.on('mouseenter', layer.layerName, (e) => {
      console.log(e.features[0])

      // const isPoligon = layer.layerName === 'ibge-renda' || layer.layerName === 'ibge-populacao';
      const isIcon = layer.layerName === 'ongs-icons';

      let iconCoord = undefined; 

      if (isIcon) {
        iconCoord = e.features[0].geometry.coordinates.slice();

        while (Math.abs(e.lngLat.lng - iconCoord[0]) > 180) {
          iconCoord[0] += e.lngLat.lng > iconCoord[0] ? 360 : -360;
        }
      }

      // const formatRenda = e.features[0].properties.renda.toLocaleString('pt-BR');
      // const bairro = `<h2>${e.features[0].properties.NM_BAIRRO}</h2>`;
      // const renda = `<p>R$ ${formatRenda}</p>`;

      popup = new mapboxgl.Popup()
        .setLngLat(isIcon ? iconCoord : e.lngLat)
        .setHTML(layer.layerName)
        // .setHTML(`${bairro}${renda}<small>Renda média</small>`)
        .addTo(this.map);

      return popup;
    });

    this.map.on('mouseleave', layer.layerName, () => {
      this.map.getCanvas().style.cursor = '';
      popup.remove();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedMenuItem } = this.state;

    if (prevState.selectedMenuItem !== selectedMenuItem) {
      if (prevState.selectedMenuItem.layerName){
        this.map.setLayoutProperty(prevState.selectedMenuItem.layerName, 'visibility', 'none');
      }
      this.map.setLayoutProperty(selectedMenuItem.layerName, 'visibility', 'visible');
      this.handlePopup(selectedMenuItem);
    } 
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/igorcouto/ck9mtp0zx384s1jwau5diy2w4/',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      minZoom: 7,
      maxZoom: 14,
      maxBounds: [
        [-45.858984, -23.553521],
        [-40.50585, -20.715985]]
    });

    this.map.on('load', () => {
      this.handleMenuItem({
        image: filterIcon1,
        selectedImage: filterSelectedIcon1,
        title: 'Socio-econômico',
        layerName: 'ibge-renda',
        color: '#F05123',
        text: 'socio',
      })
    })

    this.map.addControl(new mapboxgl.NavigationControl());
  }

  handleClose = () => {
    this.setState({
      currentOng: '',
    })
  }

  handleMenuItem = (item) => {
    this.setState({
      selectedMenuItem: item,
    });
  }

  handleModalSubtitle = () => {
    this.setState({
      showSubtitle: !this.state.showSubtitle,
    });
  }

  render() {
    return (
      <div id="map">
        <Menu
          selectMenuItem={this.handleMenuItem}
          selectedMenuItem={this.state.selectedMenuItem} />
        <Subtitle
          handleModalSubtitle={this.handleModalSubtitle}
          showSubtitle={this.state.showSubtitle}
          selectedItem={this.state.selectedMenuItem}/>
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
      </div>
    );
  }
}

export default HumanitarianMap;