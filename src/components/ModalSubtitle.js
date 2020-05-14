// Libs
import React, { Component } from 'react';

// Images
import GraphicImage from '../assets/socio-economic-grafico.svg';

class Modal extends Component {
  state = {};

  handleSocioEconomic = () => (
    <div className='socio'>
      <h2 className='content-title'>Socio-econômico</h2>
      <div className='content-numbers'>
        <img src={GraphicImage} alt='icon' />
        <ul>
          <li>R$1.000,00 - R$2.000,00</li>
          <li>R$3.000,00 - R$4.000,00</li>
          <li>R$5.000,00 - R$6.000,00</li>
          <li>R$7.000,00 - R$8.000,00</li>
          <li>Acima de R$10.000,00</li>
        </ul>
      </div>
      <p>Os tons mais escuros correspondem aos de menor <strong>renda per-capita</strong>. Já os mais claros correspondem aos de maior renda. Assim podemos identificar quais regiões tem mais recursos para manter os seus habitantes em segurança.</p>
      <p>Vale ressaltar que uma região com mais recursos tem acesso mais rápido aos serviços do estado e outras prestadoras privadas.</p>
      <p>Esses dados foram retirados do SENSO-20, realizado pelo IBGE no ano de 2020.</p>
      <span><strong>Renda per-capita</strong>: é o valor médio que cada pessoa da região recebe mensalmente.</span>
    </div>
  )

  handleDemographicDensity = () => {
    return <p>densidade</p>
  }

  handleSolidarity = () => {
    return <p>solid</p>
  }

  handleCovid = () => {
    return <p>covid</p>
  }

  handleOngs = () => {
    return <p>ongs</p>;
  }

  renderContent = () => {
    const content = this.props.selectedItem.title;

    switch (content) {
      case 'Socio-econômico':
			return this.handleSocioEconomic();
      case 'Densidade demográfica':
        return this.handleDemographicDensity();
      case 'Solidariedade':
        return this.handleSolidarity();
      case 'Covid-19':
        return this.handleCovid();
      case "ONG's Parceiras":
      return this.handleOngs();
      default:
        return null;
    }
  }
  
  render() {
    const setDisplay = this.props.showSubtitle ? 'flex' : 'none';

    return (
      <div className='modal' onClick={this.props.handleModalSubtitle}>
        <div className='modal-header'>Legenda
          {this.props.showSubtitle ? <span></span> : <p>+</p>}
        </div>
        <div className='modal-content' style={{ 'display': `${setDisplay}` }}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Modal;
