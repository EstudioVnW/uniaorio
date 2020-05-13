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

  componentDidUpdate(prevProps, prevState) {
    const { selectedMenuItem } = this.state;

    if (prevState.selectedMenuItem !== selectedMenuItem) {
      if (this.state.selectedMenuItem.title === 'Socio-econômico') {
        this.map.setLayoutProperty('ibge-renda', 'visibility', 'visible');
        this.map.setLayoutProperty('ibge-populacao', 'visibility', 'none');
        this.map.setLayoutProperty('ongs-icons', 'visibility', 'none');
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

    let popup;

    this.map.on('mouseenter', 'ongs-coords-delivered-demands', (e) => {
      if (e.features) {
        const currentOng = e.features[0].properties
        let coordinates = e.features[0].geometry.coordinates.slice();
        let title = currentOng.title;
        let delivered = currentOng.delivered > 0 ? currentOng.delivered : 0;
        let demand = currentOng.demands > 0 ? currentOng.demands : 0;
        
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        
        popup = new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(`<div><p><strong>Nome:</strong> ${title}</p><p><strong>Demanda de cestas:</strong> ${demand}</p><p><strong>Cestas recebidas:</strong> ${delivered}</p></div>`)
          .addTo(this.map);
        this.map.getCanvas().style.cursor = 'pointer';
        return popup;
      } return null;
    });

    this.map.on('mouseleave', 'ongs-coords-delivered-demands', () => {
      this.map.getCanvas().style.cursor = '';
      popup.remove();
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