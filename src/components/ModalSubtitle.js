// Libs
import React, { Component } from 'react';

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

  renderSocioEconomic = () => {
    return (
      <div className='socio'>
        {this.renderSocioEconomicDatas()}
        {this.renderSocioEconomicDescription()}
      </div>
    )
  }

  renderSocioEconomicDatas = () => (
    <>
      <h2 className='content-title'>Socio-econômico</h2>
      <div className='content-numbers'>
        <div className="ibge-degrade"></div>
        <ul>
          <li>Abaixo de R$1.000,00</li>
          <li>R$1.000,00 - R$2.000,00</li>
          <li>R$3.000,00 - R$4.000,00</li>
          <li>R$5.000,00 - R$6.000,00</li>
          <li>R$7.000,00 - R$8.000,00</li>
          <li>Acima de R$10.000,00</li>
        </ul>
      </div>
    </>
  )

  renderSocioEconomicDescription = () => (
    <>
      <p>Os tons mais escuros correspondem aos de menor <strong>renda per-capita</strong>. Já os mais claros correspondem aos de maior renda. Assim podemos identificar quais regiões tem mais recursos para manter os seus habitantes em segurança.</p>
      <p>Vale ressaltar que uma região com mais recursos tem acesso mais rápido aos serviços do estado e outras prestadoras privadas.</p>
      <p>Esses dados foram retirados do CENSO-10, realizado pelo IBGE no ano de 2010.</p>
      <span><strong>Renda per-capita</strong>: é o valor médio que cada pessoa da região recebe mensalmente.</span>
    </>
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

  renderContentDemand = () => {
    const widthMob = (window.matchMedia('(max-width:  768px)').matches);

    return (
      <div>
        <h2 className='content-title'>Demanda geral por bairro</h2>
        <p className='content-subtitle'>A barra a esquerda indica a condição
          {widthMob
            ? <span onClick={this.handleHover} className='content-subtitle-button'> sócio-econômica </span>
            : <span className='content-subtitle-button' onMouseEnter={this.handleHover}  onMouseLeave={this.handleHover}> sócio-econômica </span>}
          de cada bairro
        </p>
        <div className='boxModal'>
          {this.renderModalSocioEconomic()}
        </div>
        {this.renderContentDemandList()}
      </div>
    )
  }

  setBackground = (renda) => {
    if(renda === 0) {
      return '#d10000';
    }
    if(renda === 1 || renda === 2 ) {
      return '#FCA216';
    }
    if(renda === 3 || renda === 4){
      return '#FCC25A';
    }
    if(renda === 5 || renda === 6){
      return '#FCD276';
    }
    if(renda === 7 || renda === 8){
      return '#C9E2C2';
    }
    else {
      return '#A5BDD4';
    }
  }

  renderContentDemandList = () => {
    return this.props.listSolidarity.map(item => {
      const {renda_per_capita, district, delivered_amount, demands} = item.properties
      const roundingNumber = parseInt(renda_per_capita)

      return (
        <div className='container-demand'>
          <span className='content-bar' style={{background: this.setBackground(roundingNumber)}}></span>
          <ul>
            <li className='content-title name-neighborhood'>{district}</li>
            <li>Entrega:<span className='content-delivered'>{delivered_amount}</span></li>
            <li>Demanda:<span className='content-demands'>{demands}</span></li>
            {/* <li>Percentual entregue:<span className='content-percent'>80%</span></li> */}
          </ul>
        </div>
      );
    })
  }

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

  renderOngs = () => {
    const ongs = this.props.ongs.features.filter(ongs => ongs.properties.district === this.props.currentDistrict)

    return (
      <div className="ongs-container">
        <h2>Organizações sociais</h2>
        {ongs.length > 0 && ongs.map((ong) =>
          <ul className="ong-list">
            <li key={ong.properties.title}>
              <h3>{ong.properties.title}</h3>
              <p>{ong.properties.address}</p>
            </li>
          </ul>
        )}
        {ongs.length === 0 && (
          <ul className="ong-list">
            <li>
              <p>Nenhum ponto de doação nesse bairro, mas você pode encontrar outros pontos de doação em um bairro vizinho.</p>
            </li>
          </ul>
        )}
       {this.renderSocioEconomic()}
      </div>
    );
  }

  renderContent = () => {
    const content = this.props.selectedItem.title;

    switch (content) {
      case 'Solidariedade':
        return this.handleSolidarity();
      case 'Covid-19':
        return this.handleCovid();
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
            <li>Abaixo de R$1.000,00</li>
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
    const { currentDistrict, handleModalSubtitle, showSubtitle} = this.props;
    const setDisplay = showSubtitle ? 'flex' : 'none';

    return (
      <div className='modal'>
        <div className='modal-header' onClick={handleModalSubtitle}>LEGENDA
          {showSubtitle ? <span></span> : <p>+</p>}
        </div>
        <div className='modal-content' style={{ 'display': `${setDisplay}` }}>
          {currentDistrict && this.renderOngs()}
          {!currentDistrict && this.renderContent()}
        </div>
      </div>
    );
  }
}

export default Modal;
