// Libs
import React, { Component } from 'react';

// Components
import Menu from '../components/Menu';
import Subtitle from '../components/ModalSubtitle';
import HumanitarianMap from '../screens/HumanitarianMap';
import painel from '../assets/painel.svg';
import menu from '../assets/menu.png';
import painel2 from '../assets/painel2.svg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenuItem: '',
      showSubtitle: false,
    };
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
          selectedMenuItem={this.state.selectedMenuItem}
        />
        <Subtitle
          handleModalSubtitle={this.handleModalSubtitle}
          showSubtitle={this.state.showSubtitle}
          selectedItem={this.state.selectedMenuItem}
        />
        <HumanitarianMap
          handleMenuItem={this.handleMenuItem}
          selectedMenuItem={this.state.selectedMenuItem}
        />
        {this.state.selectedMenuItem.text === 'painel' && (
          <div className="painel">
            <div className="painel-container">
              <h1>Painel da transparência</h1>
              <p>Geral</p>
              <img className="painel-img" src={painel} alt='Icone' />
              <img className="painel-menu" src={menu} alt='Menu' />
              <img className="painel2" src={painel2} alt='Menu' />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;