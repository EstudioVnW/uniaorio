// Libs
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

// Components
import Menu from '../components/Menu';
import Subtitle from '../components/ModalSubtitle';

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

  handlePopup = () => {
    let popup;

    this.map.on('mouseenter', 'ibge-renda', (e) => {
      const formatRenda = e.features[0].properties.renda.toLocaleString('pt-BR');
      const bairro = `<h2>${e.features[0].properties.NM_BAIRRO}</h2>`;
      const renda = `<p>R$ ${formatRenda}</p>`;

      popup = new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(`${bairro}${renda}<small>Renda média</small>`)
      .addTo(this.map);

      return popup;
    });

    this.map.on('mouseleave', 'ibge-renda', () => {
      this.map.getCanvas().style.cursor = '';
      popup.remove();
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { selectedMenuItem } = this.state;

    if (prevState.selectedMenuItem !== selectedMenuItem) {
      if (this.state.selectedMenuItem.title === 'Socio-econômico') {
        this.map.setLayoutProperty('ibge-renda', 'visibility', 'visible');
        this.map.setLayoutProperty('ibge-populacao', 'visibility', 'none');
        this.map.setLayoutProperty('ongs-icons', 'visibility', 'none');
        this.handlePopup();
      }
      if (this.state.selectedMenuItem.title === 'Densidade demográfica') {
        this.map.setLayoutProperty('ibge-renda', 'visibility', 'none');
        this.map.setLayoutProperty('ibge-populacao', 'visibility', 'visible');
        this.map.setLayoutProperty('ongs-icons', 'visibility', 'none');
      }
      if (this.state.selectedMenuItem.title === "ONG's Parceiras") {
        this.map.setLayoutProperty('ibge-renda', 'visibility', 'none');
        this.map.setLayoutProperty('ibge-populacao', 'visibility', 'none');
        this.map.setLayoutProperty('ongs-icons', 'visibility', 'visible');
      }
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

    this.setState({
      selectedMenuItem: '',
      showSubtitle: false,
    });

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
          selectedItem={this.state.selectedMenuItem} />
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