// Libs
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Images
import Check from '../assets/check.svg';
import Logo from '../assets/logo.png';
import Dropdown from '../assets/dropdownWhite.svg';
import DropdownUp from '../assets/dropUp.svg';
import densHorizontal from '../assets/densHorizontal.svg';
import densVertical from '../assets/densVertical.svg';
import densDiagonal from '../assets/densDiagonal.svg'

import filterIcon1 from '../assets/filter-icon-1.svg'
import filterIcon2 from '../assets/filter-icon-2.svg'
import filterIcon3 from '../assets/filter-icon-3.svg'
import filterIcon4 from '../assets/filter-icon-4.svg'
import filterIcon5 from '../assets/filter-icon-5.svg'
import filterIcon6 from '../assets/filter-icon-6.svg'

class Menu extends Component {
  state = {
    buttonList: [
      {
        label: "Mapeamento",
        route: "/uniaorio"
      },
      {
        label: "Estatísticas por Bairro",
        route: "/uniaorio/statistics"
      },      
    ],
    mappingList: [
      "Sócio-Econômico",
      "Densidade Demográfica",
      "Demandas e Entregas",
      "ONG's Parceiras"
    ],
    averageIncome: [
      {
        text: 'Até R$1.254,00',
        color: '#FF6600',
      },
      {
        text: 'R$1.255,00 - R$2.004,00',
        color: '#FCA446',
      },
      {
        text: 'R$2.005,00 - R$8.640,00',
        color: '#F2FC36',
      },
      {
        text: 'R$8.641,00 - R$11.261,00',
        color: '#6bfc36',
      },
      {
        text: 'Além de R$11.261,00',
        color: '#267300',
      },
    ],
    demographicDensity: [
      {
        text: '100 - 500 hab.',
      },
      {
        text: '100 - 500 hab.',
        img: densDiagonal,
        imgDesc: 'Hachura Vertical'
      },
      {
        text: '1.001 - 5.000 hab.',
        img: densVertical,
        imgDesc: 'Hachura Horizontal'
      },
      {
        text: 'Acima de 5.001',
        img: densHorizontal, 
        imgDesc: 'Hachura Diagonal'
      },
    ],
    demandsandDeliveries: [
      {
        color: '#A3218E',
        text: '10.000 cestas demandadas',
      },
      {
        color: '#592F93',
        text: '1.000 cestas demandadas',
      },
      {
        color: '#0465B2',
        text: '100 cestas demandadas',
      },
      {
        color: '#00ACAC',
        text: '10 cestas demandadas',
      },
    ],
    isMapping: false,
    isSelectedButton: '',
    isSelectedCheck: ['Sócio-Econômico', 'Densidade Demográfica'],
    isSelected: '',
    isSocioEconomic: false,
    DemographicDensity: false,
    isDemandsandDeliveries: false,
  };

  handleIsMappingOpen = (item) => {
    this.setState({ 
      isSelectedButton: item,
      isMapping: !this.state.isMapping,
    });
  }

  handleSelected = (label) => {    
    this.setState({ isSelectedButton: label });
  }

  renderDemandsandDeliveries = () => (
    <div className="container_infos">
      {this.state.demandsandDeliveries.map(({color, text}) => (
        <div className="container_infos-item">
          <span className="container_infos-item--box infos_item-demand" style={{background: color}} />
          {text}
        </div>
      ))}
    </div>
  )

  renderDemographicDensity = () => (
    <div className="container_infos">
      {this.state.demographicDensity.map(({text, img, imgDesc}) => (
        <div className="container_infos-item">
          <span className="container_infos-item--box">
            <img src={img} alt={imgDesc} className="density_img" />
          </span>
          {text}
        </div>
      ))}
    </div>
  )

  renderSocioEconomic = () => (
    <div className="container_infos">
      {this.state.averageIncome.map(({text, color}) => (
        <div className="container_infos-item">
          <span className="container_infos-item--box" style={{backgroundColor: color}} />
          {text}
        </div>
      ))}
    </div>
  )

  handleMappingCheck = (item) => {
    let list = this.state.isSelectedCheck;
    const hasMatch = list.find(value => value === item);
    
    if (hasMatch) {
      list.splice(list.indexOf(item), 1);
    } else {
      list = list.concat(item);
    }

    this.setState({
      isSelectedCheck: list,
    });
  }

  renderCheckIcon = (item) => {
    const hasMatch = this.state.isSelectedCheck.find(value => value === item);

    if (hasMatch) {
      return  (
        <img src={Check} alt="check" className="mapping_item-checkbox--check" />
      );
    } return null;
  }

  renderDataItem = (item) => {
    const hasMatch = this.state.isSelectedCheck.find(value => value === item);
    switch(item && hasMatch) {
      case 'Sócio-Econômico':
			return this.renderSocioEconomic();
      case 'Densidade Demográfica':
        return this.renderDemographicDensity();
      case 'Demandas e Entregas':
        return this.renderDemandsandDeliveries();
      case "ONG's Parceiras":
      return console.log('ongs');
      default:
        return null;
    }
  }

  renderMapping = () => (
    <div className="container_mapping">
      {this.state.mappingList.map((item) => (
        <>
          <div key={item} className="container_mapping-item">
            {/* <div
              className="mapping_item-checkbox"
              onClick={() => this.handleMappingCheck(item)}
            >
              {this.renderCheckIcon(item)}
            </div> */}
            <p className="mapping_item-text">{item}</p>
          </div>
          {this.renderDataItem(item)}
        </>
      ))}
    </div>
  )
  
  
  render() {
    return (
      <nav className="menu">
        <div className="menu-container">
          <div className="menu-logo">
            <NavLink to={'/uniaorio'}>
              <img src={Logo} alt="logo"/>
            </NavLink>
            <div>
              <p>Última atualização</p>
              <p className="text-red">17:23 - 08.05.20</p>
            </div>
          </div>
          <ul className="menu-filters">
            <li>
              <img src={filterIcon1} alt=""/>
              <p>Socio-econômico</p>
            </li>
            <li>
              <img src={filterIcon2} alt=""/>
              <p>Densidade demográfica</p>
            </li>
            <li>
              <img src={filterIcon3} alt=""/>
              <p>Solidariedade</p>
            </li>
            <li>
              <img src={filterIcon4} alt=""/>
              <p>Covid-19</p>
            </li>
            <li>
              <img src={filterIcon5} alt=""/>
              <p>ONG's Parceiras</p>
            </li>
            <li>
              <img src={filterIcon6} alt=""/>
              <p>Painel de transparência</p>
            </li>
          </ul>
          <button>
            Faça uma doação
          </button>
          {/* <div className="container_menu-wrapper">
            {this.state.buttonList.map(({label, route}) => (
              <>
                <NavLink
                  key={label}
                  className="container_menu-button"
                  exact to={route}
                  activeClassName="menu_button-active"
                  style={{ 
                    backgroundColor: this.state.isSelectedButton === label && '#CC2E00',
                    justifyContent: label === 'Mapeamento' && 'space-between'
                  }}
                  onClick={label === 'Mapeamento'
                    ? () => this.handleIsMappingOpen(label)
                    : () => this.handleSelected(label)
                  }
                >
                  {label}
                  {label === 'Mapeamento' && this.state.isMapping === false ? (
                    <img src={Dropdown} alt="dropdown" className="menu_drop" />
                  ) : (label === 'Mapeamento' && <img src={DropdownUp} alt="dropUp" className="menu_drop" />)}
                </NavLink>
                {label === "Mapeamento" ? this.state.isMapping && this.renderMapping() : null}
              </>
            ))}
          </div> */}
        </div>
      </nav>
    );
  }
}

export default Menu;