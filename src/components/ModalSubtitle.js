// Libs
import React, { Component } from 'react';

// Images
import GraphicImage from '../assets/socio-economic-grafico.svg';

class Modal extends Component {
  state = {
    isModal: true,
    isHover: false,
  };

  handleHover = () => {
    this.setState({
      isHover: !this.state.isHover,
    })
  }



  handleSocioEconomic = () => (
    <div className='socio'>
      <h2 className='content-title'>Socio-econômico</h2>
      <div className='content-numbers'>
        <div className="ibge-degrade"></div>
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
      <p>Esses dados foram retirados do CENSO-10, realizado pelo IBGE no ano de 2010.</p>
      <span><strong>Renda per-capita</strong>: é o valor médio que cada pessoa da região recebe mensalmente.</span>
    </div>
  )

  renderSocioEconomic = () => {
    return (
      <>
        {this.renderSocioEconomicDatas()}
        {this.renderSocioEconomicDescription()}
      </>
    )
  }

  renderSocioEconomicDatas = () => (
    <div className='socio'>
      <h2 className='content-title'>Socio-econômico</h2>
      <div className='content-numbers'>
        <div className="ibge-degrade"></div>
        <ul>
          <li>R$1.000,00 - R$2.000,00</li>
          <li>R$3.000,00 - R$4.000,00</li>
          <li>R$5.000,00 - R$6.000,00</li>
          <li>R$7.000,00 - R$8.000,00</li>
          <li>Acima de R$10.000,00</li>
        </ul>
      </div>
    </div>
  )

  renderSocioEconomicDescription = () => (
    <div className='socio'>
      <p>Os tons mais escuros correspondem aos de menor <strong>renda per-capita</strong>. Já os mais claros correspondem aos de maior renda. Assim podemos identificar quais regiões tem mais recursos para manter os seus habitantes em segurança.</p>
      <p>Vale ressaltar que uma região com mais recursos tem acesso mais rápido aos serviços do estado e outras prestadoras privadas.</p>
      <p>Esses dados foram retirados do CENSO-10, realizado pelo IBGE no ano de 2010.</p>
      <span><strong>Renda per-capita</strong>: é o valor médio que cada pessoa da região recebe mensalmente.</span>
    </div>
  )

  handleDemographicDensity = () => (
    <div className='box'>
      <h2 className='content-title'>Densidade demográfica</h2>
      <div className='content-numbers'>
        <ul>
          <li><span className='dens-0'></span> 100 - 500 hab.</li>
          <li><span className='dens-1'></span> 501 - 1.000 hab.</li>
          <li><span className='dens-2'></span> 1.001- 5.000</li>
          <li><span className='dens-3'></span> Acima de 5.001</li>
        </ul>
      </div>
      <p>Densidade demográfica, densidade populacional ou população relativa é a medida expressa pela relação entre a população e a superfície do território, geralmente aplicada a seres humanos, mas também em outros seres vivos. É sempre expressa em habitantes por quilômetro quadrado.</p>
    </div>
  )

  handleSolidarity = () => (
    <div className='box'>
      <h2 className='content-title'>Cestas básicas</h2>
      <div className='content-numbers'>
        <ul>
          <li><span className='solid-1'>%</span>Percentual entregue</li>
          <li><span className='solid-2'></span>Demanda</li>
          <li><span className='solid-3'></span>Entrega</li>
        </ul>
      </div>
     {this.renderContentDemand()}
    </div>
  )

  renderContentDemand = () => (
    <div className='box'>
      <h2 className='content-title'>Demanda geral por bairro</h2>
      <p className='content-subtitle'>A barra a esquerda indica a condição
        <span className='content-subtitle-button' onMouseEnter={this.handleHover}  onMouseLeave={this.handleHover}> sócio-econômica</span> de cada bairro
      </p>
      {this.renderModalSocioEconomic()}
      <div className='content-numbers content-demand'>
        <span className='content-bar'></span>
        <ul>
          <li className='content-title name-neighborhood'>Campo Grande</li>
          <li>Entrega: 989</li>
          <li>Demanda: 1.236</li>
          <li>Percentual entregue: 80%</li>
        </ul>
      </div>
    </div>
  );

  handleCovid = () => (
    <div className='box'>
      <h2 className='content-title'>Casos de COVID-19</h2>
      <div className='content-numbers'>
        <ul>
          <li><span className='covid-1'></span>Confirmados</li>
          <li><span className='covid-2'></span>Óbitos</li>
        </ul>
      </div>
      <p>Casos de Covid-19 no Rio de Janeiro</p>
      {this.renderSocioEconomic()}
    </div>
  )

  handleOngs = () => (
    <div className='box'>
      <h2 className='content-title'>Parceiros</h2>
      <div className='content-numbers'>
        <ul>
          <li>- Nome do parceiro</li>
          <li>- Endereço do parceiro</li>
          <li>- Demanda e entrega de cestas básicas</li>
        </ul>
      </div>
      {this.renderSocioEconomic()}
    </div>
  )

  renderContent = () => {
    const content = this.props.selectedItem.title;

    switch (content) {
      // case 'Socio-econômico':
			// return this.handleSocioEconomic();
      // case 'Densidade demográfica':
      //   return this.handleDemographicDensity();
      case 'Solidariedade':
        return this.handleSolidarity();
      case 'Covid-19':
        return this.handleCovid();
      case "Parceiros":
      return this.handleOngs();
      default:
        return null;
    }
  }

  renderModalSocioEconomic = () => (
    <div className='modal-socio-economic modal-socio-economic-float' style={{display: this.state.isHover ? 'flex' : 'none'}}>
      <div className='modal-socio-economic-arrow'> </div>
      <div className='socio socio-float'>
        <h2 className='content-title'>Socio-econômico</h2>
        <div className='content-numbers'>
          <div className="ibge-degrade"></div>
          <ul>
            <li>R$1.000,00 - R$2.000,00</li>
            <li>R$3.000,00 - R$4.000,00</li>
            <li>R$5.000,00 - R$6.000,00</li>
            <li>R$7.000,00 - R$8.000,00</li>
            <li>Acima de R$10.000,00</li>
          </ul>
        </div>
      </div>
    </div>
  )
  
  render() {
    const setDisplay = this.props.showSubtitle ? 'none' : 'flex';
    return (
      <>
        <div className='modal'>
          <div className='modal-header' onClick={this.props.handleModalSubtitle}>LEGENDA

            {this.props.showSubtitle ? <span></span> : <p>+</p>}
          </div>
          <div className='modal-content' style={{ 'display': `${setDisplay}` }}>
            {this.renderContent()}
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
