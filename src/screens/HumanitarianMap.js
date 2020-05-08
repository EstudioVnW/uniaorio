// Libs
import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

// Components
import Menu from '../components/Menu'

// Images
// import MarkerIcon from '../assets/marker.svg';

mapboxgl.accessToken = 'pk.eyJ1IjoiaWdvcmNvdXRvIiwiYSI6ImNrOWZudjNtcTAyd3EzbHI3a2ppbnpnemUifQ.D--CSyWyEk70oULTVok7vg';

class HumanitarianMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: -43.2096,
      lat:  -22.9035,
      zoom: 10,
      currentOng: '',
    };
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/igorcouto/ck9mtp0zx384s1jwau5diy2w4',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom
    });

    map.on('move', () => {
      this.setState({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });

    map.on('click', 'ongs-lindas', (e) => {
      if (e.features) {
        let coordinates = e.features[0].geometry.coordinates.slice();
        let title = e.features[0].properties.title;
        let address = e.features[0].properties.address;
        
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        
        new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`<div><p>Nome: ${title}</p><p>Endereço: ${address}</p></div>`)
        .addTo(map);
      } return null;
    });
    
    map.on('mouseenter', 'ongs-lindas', () => {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'ongs-lindas', () => {
      map.getCanvas().style.cursor = '';
    });

    map.addControl(new mapboxgl.NavigationControl());
  }

  handleClose = () => {
    this.setState({
      currentOng: '',
    })
  }

  render() {
    return (
      <div  id="map">
        <div>
          <div className='container_map-rio'>
            <p className='map_rio-text'>
              riocontra
            </p>
            <p className='map_rio-text' style={{color: '#F05123'}}>corona</p>
          </div>
          {/* <div className='sidebarStyle'>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div> */}
          <Menu styles={{position: 'absolute', top: 0, left: 0, zIndex: 3}} />
        </div>
        <div ref={el => this.mapContainer = el} className="mapContainer"/>
      </div>
    );
  }
}

export default HumanitarianMap;