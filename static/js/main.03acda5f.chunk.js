(this.webpackJsonpuniaorio=this.webpackJsonpuniaorio||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/filter-icon-3.54d0188c.svg"},function(e,t,a){e.exports=a.p+"static/media/filter-selected-icon-3.1062eeba.svg"},,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/check.32d24ad4.svg"},function(e,t,a){e.exports=a.p+"static/media/logo.3f9b1271.png"},function(e,t,a){e.exports=a.p+"static/media/densHorizontal.23396a5d.svg"},function(e,t,a){e.exports=a.p+"static/media/densVertical.1cac0dbe.svg"},function(e,t,a){e.exports=a.p+"static/media/densDiagonal.22c16143.svg"},function(e,t,a){e.exports=a.p+"static/media/filter-icon-4.a24fcc0b.svg"},function(e,t,a){e.exports=a.p+"static/media/filter-icon-6.9c7137c4.svg"},function(e,t,a){e.exports=a.p+"static/media/filter-selected-icon-4.7d2a4960.svg"},function(e,t,a){e.exports=a.p+"static/media/filter-selected-icon-6.939a948b.svg"},,,function(e,t,a){e.exports=a.p+"static/media/vnw.a93706a9.svg"},,function(e,t,a){e.exports=a.p+"static/media/loading.00169747.svg"},function(e,t,a){e.exports=a.p+"static/media/painel.6e1bce9b.svg"},function(e,t,a){e.exports=a.p+"static/media/menu.3a4e897c.png"},function(e,t,a){e.exports=a.p+"static/media/painel2.e48b3922.svg"},function(e,t,a){e.exports=a(78)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/filter-icon-5.e801dcda.svg"},function(e,t,a){e.exports=a.p+"static/media/filter-selected-icon-5.29d40615.svg"},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(29),i=a.n(o),s=(a(52),a(14)),c=a(8),l=a(4),d=a(5),m=a(6),u=a(7),p=a(30),h=a.n(p),v=a(31),f=a.n(v),g=a(32),E=a.n(g),b=a(33),y=a.n(b),N=a(34),x=a.n(N),D=a(12),S=a.n(D),C=a(35),k=a.n(C),I=(a(53),a(36)),w=a.n(I),M=a(13),O=a.n(M),_=a(37),F=a.n(_),L=(a(54),a(38)),j=a.n(L),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={averageIncome:[{text:"At\xe9 R$1.254,00",color:"#FF6600"},{text:"R$1.255,00 - R$2.004,00",color:"#FCA446"},{text:"R$2.005,00 - R$8.640,00",color:"#F2FC36"},{text:"R$8.641,00 - R$11.261,00",color:"#6bfc36"},{text:"Al\xe9m de R$11.261,00",color:"#267300"}],demographicDensity:[{text:"100 - 500 hab."},{text:"100 - 500 hab.",img:x.a,imgDesc:"Hachura Vertical"},{text:"1.001 - 5.000 hab.",img:y.a,imgDesc:"Hachura Horizontal"},{text:"Acima de 5.001",img:E.a,imgDesc:"Hachura Diagonal"}],demandsandDeliveries:[{color:"#A3218E",text:"10.000 cestas demandadas"},{color:"#592F93",text:"1.000 cestas demandadas"},{color:"#0465B2",text:"100 cestas demandadas"},{color:"#00ACAC",text:"10 cestas demandadas"}],menuItems:[{image:S.a,selectedImage:O.a,title:"Solidariedade",color:"#F0184F",text:"solid",layerName:"Solidariedade"},{image:k.a,selectedImage:F.a,title:"Covid-19",color:"#0ACF59",text:"covid",layerName:"Covid"},{image:w.a,selectedImage:j.a,title:"Transpar\xeancia",color:"#FA9900",text:"painel"}],isSelectedButton:"",isSelectedCheck:["S\xf3cio-Econ\xf4mico","Densidade Demogr\xe1fica"],isSelected:"",isSocioEconomic:!1,DemographicDensity:!1,isDemandsandDeliveries:!1},e.handleSelected=function(t){e.setState({isSelectedButton:t})},e.renderDemandsandDeliveries=function(){return r.a.createElement("div",{className:"container_infos"},e.state.demandsandDeliveries.map((function(e){var t=e.color,a=e.text;return r.a.createElement("div",{className:"container_infos-item"},r.a.createElement("span",{className:"container_infos-item--box infos_item-demand",style:{background:t}}),a)})))},e.renderDemographicDensity=function(){return r.a.createElement("div",{className:"container_infos"},e.state.demographicDensity.map((function(e){var t=e.text,a=e.img,n=e.imgDesc;return r.a.createElement("div",{className:"container_infos-item"},r.a.createElement("span",{className:"container_infos-item--box"},r.a.createElement("img",{src:a,alt:n,className:"density_img"})),t)})))},e.renderSocioEconomic=function(){return r.a.createElement("div",{className:"container_infos"},e.state.averageIncome.map((function(e){var t=e.text,a=e.color;return r.a.createElement("div",{className:"container_infos-item"},r.a.createElement("span",{className:"container_infos-item--box",style:{backgroundColor:a}}),t)})))},e.handleMappingCheck=function(t){var a=e.state.isSelectedCheck;a.find((function(e){return e===t}))?a.splice(a.indexOf(t),1):a=a.concat(t),e.setState({isSelectedCheck:a})},e.renderCheckIcon=function(t){return e.state.isSelectedCheck.find((function(e){return e===t}))?r.a.createElement("img",{src:h.a,alt:"check",className:"mapping_item-checkbox--check"}):null},e.renderDataItem=function(t){var a=e.state.isSelectedCheck.find((function(e){return e===t}));switch(t&&a){case"S\xf3cio-Econ\xf4mico":return e.renderSocioEconomic();case"Densidade Demogr\xe1fica":return e.renderDemographicDensity();case"Demandas e Entregas":return e.renderDemandsandDeliveries();case"ONG's Parceiras":default:return null}},e.renderMenuItem=function(){return e.state.menuItems.map((function(t){var a=e.props.selectedMenuItem.title===t.title,n=a?t.color:"#595959",o=a?"600":"200",i=a?t.color:"#fff",s=e.props.selectedMenuItem?1:.5;return r.a.createElement("li",{key:t.title,onClick:function(){return e.props.selectedMenuItem&&e.props.selectMenuItem(t)},style:{color:"".concat(n),fontWeight:"".concat(o),opacity:"".concat(s)}},r.a.createElement("img",{src:a?t.selectedImage:t.image,alt:"Icone"}),r.a.createElement("p",null,t.title),r.a.createElement("span",{className:"line",style:{background:"".concat(i),transition:"all .25s ease-in-out"}}))}))},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"menu"},r.a.createElement("div",{className:"menu-container"},r.a.createElement("div",{className:"menu-logo"},r.a.createElement(s.b,{to:"/uniaorio"},r.a.createElement("img",{src:f.a,alt:"logo"})),r.a.createElement("div",null,r.a.createElement("p",null,"\xdaltima atualiza\xe7\xe3o - Em testes"),r.a.createElement("p",{className:"text-red"},"18:39 - 28.05.20"))),r.a.createElement("ul",{className:"menu-filters"},this.renderMenuItem()),r.a.createElement("a",{href:"https://www.riocontracorona.org/",target:"_blank",className:"donation-button"},"Fa\xe7a uma doa\xe7\xe3o")))}}]),a}(n.Component),P=a(10),R=a.n(P),$=a(15),B=a(9),z=a.n(B),H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={isModal:!0,isHover:!1,selectedOption:"Bairros",deliveryOption:["Bairros","Doadores"]},e.handleHover=function(){e.setState({isHover:!e.state.isHover})},e.handleSelecOptionClick=function(t){e.setState({selectedOption:t})},e.renderSocioEconomic=function(){return r.a.createElement("div",{className:"socio"},e.renderSocioEconomicDatas(),e.renderSocioEconomicDescription())},e.renderSocioEconomicDatas=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"content-title"},"Socio-econ\xf4mico"),r.a.createElement("div",{className:"content-numbers"},r.a.createElement("div",{className:"ibge-degrade"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Abaixo de R$1.000,00"),r.a.createElement("li",null,"R$1.000,00 - R$2.000,00"),r.a.createElement("li",null,"R$3.000,00 - R$4.000,00"),r.a.createElement("li",null,"R$5.000,00 - R$6.000,00"),r.a.createElement("li",null,"R$7.000,00 - R$8.000,00"),r.a.createElement("li",null,"Acima de R$10.000,00"))))},e.renderSocioEconomicDescription=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Os tons mais escuros correspondem aos de menor ",r.a.createElement("strong",null,"renda per-capita"),". J\xe1 os mais claros correspondem aos de maior renda. Assim podemos identificar quais regi\xf5es tem mais recursos para manter os seus habitantes em seguran\xe7a."),r.a.createElement("p",null,"Vale ressaltar que uma regi\xe3o com mais recursos tem acesso mais r\xe1pido aos servi\xe7os do estado e outras prestadoras privadas."),r.a.createElement("p",null,"Esses dados foram retirados do CENSO-10, realizado pelo IBGE no ano de 2010."),r.a.createElement("span",null,r.a.createElement("strong",null,"Renda per-capita"),": \xe9 o valor m\xe9dio que cada pessoa da regi\xe3o recebe mensalmente."))},e.handleDemographicDensity=function(){return r.a.createElement("div",{className:"box"},r.a.createElement("h2",{className:"content-title"},"Densidade demogr\xe1fica"),r.a.createElement("div",{className:"content-numbers"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:"dens-0"})," 100 - 500 hab."),r.a.createElement("li",null,r.a.createElement("span",{className:"dens-1"})," 501 - 1.000 hab."),r.a.createElement("li",null,r.a.createElement("span",{className:"dens-2"})," 1.001- 5.000"),r.a.createElement("li",null,r.a.createElement("span",{className:"dens-3"})," Acima de 5.001"))),r.a.createElement("p",null,"Densidade demogr\xe1fica, densidade populacional ou popula\xe7\xe3o relativa \xe9 a medida expressa pela rela\xe7\xe3o entre a popula\xe7\xe3o e a superf\xedcie do territ\xf3rio, geralmente aplicada a seres humanos, mas tamb\xe9m em outros seres vivos. \xc9 sempre expressa em habitantes por quil\xf4metro quadrado."))},e.handleSolidarity=function(){return r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"padding"},r.a.createElement("h2",{className:"content-title"},"Solidariedade"),r.a.createElement("div",{className:"content-numbers"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:"solid-1"},"%"),"Percentual entregue"),r.a.createElement("li",null,r.a.createElement("span",{className:"solid-3"}),"Entrega"),r.a.createElement("li",null,r.a.createElement("span",{className:"solid-2"}),"Demanda")))),r.a.createElement("div",null,r.a.createElement("ul",{className:"container-option"},e.renderDeliveryOption())),r.a.createElement("div",{className:"scroll"},"Bairros"===e.state.selectedOption?e.renderContentDemand():r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"content-title"},"Doadores"),e.renderDonors())))},e.renderDeliveryOption=function(){var t=e.state,a=t.deliveryOption,n=t.selectedOption;return a.map((function(t){var a=n===t?"#F0184F":"#595959",o=n===t?"#F0184F":"#f7f7f7";return r.a.createElement("li",{key:t},r.a.createElement("button",{className:"deliveryOptionButton",style:{color:"".concat(a)},onClick:function(){return e.handleSelecOptionClick(t)}},t),r.a.createElement("span",{className:"line",style:{backgroundColor:"".concat(o)}}))}))},e.renderDonors=function(){var t=[];e.props.ongs.features.filter((function(e){return 0!=e.properties.ID_Doadores})).forEach((function(e){return!t.includes(e.properties.ID_Doadores)&&t.push(e.properties.ID_Doadores)}));var a=function(t,a){var n=e.props.ongs.features.filter((function(e){return e.properties.ID_Doadores===t})),r=0;return n.forEach((function(e){return r=e.properties[a]+r})),r};return t.map((function(t){return r.a.createElement("div",{className:"container-demand",onClick:function(){return function(t){var a=e.props.ongs.features.filter((function(e){return e.properties.ID_Doadores===t})).map((function(e){return e.properties.district}));e.props.handleDoador(a)}(t)}},r.a.createElement("ul",{key:t},r.a.createElement("li",{className:"content-title content-name"},t),r.a.createElement("li",{className:"text"},"Entrega: ",r.a.createElement("span",{className:"text-data"},a(t,"delivered_amount"))),r.a.createElement("li",{className:"text"},"Organiza\xe7\xf5es: ",r.a.createElement("span",{className:"text-data"},a(t,"qtd_doacoes_entregas")))))}))},e.renderContentDemand=function(){var t=window.matchMedia("(max-width:  768px)").matches;return r.a.createElement("div",null,r.a.createElement("h2",{className:"content-title"},"Demanda geral por bairro"),r.a.createElement("p",{className:"content-subtitle"},"A barra a esquerda indica a condi\xe7\xe3o",t?r.a.createElement("span",{onClick:e.handleHover,className:"content-subtitle-button"}," s\xf3cio-econ\xf4mica "):r.a.createElement("span",{className:"content-subtitle-button",onMouseEnter:e.handleHover,onMouseLeave:e.handleHover}," s\xf3cio-econ\xf4mica "),"de cada bairro"),r.a.createElement("div",{className:"boxModal"},e.renderModalSocioEconomic()),e.renderContentDemandList())},e.renderModalSocioEconomic=function(){return r.a.createElement("div",{className:"modal-socio-economic modal-socio-economic-float",style:{display:e.state.isHover?"flex":"none"}},r.a.createElement("div",{className:"modal-socio-economic-arrow"}," "),r.a.createElement("div",{className:"socio socio-float"},e.renderSocioEconomicDatas()))},e.renderContentDemandList=function(){return e.props.listSolidarity.map((function(t){var a=t.properties,n=a.renda_per_capita,o=a.district,i=a.delivered_amount,s=a.demands,c=a.perc_demand_deliv,l=parseInt(n);return r.a.createElement("div",{className:"container-demand"},r.a.createElement("span",{className:"content-bar",style:{background:e.setBackground(l)}}),r.a.createElement("ul",null,r.a.createElement("li",{className:"content-title content-name"},o),r.a.createElement("li",{className:"text"},"Entrega:",r.a.createElement("span",{className:"content-delivered"},i)),r.a.createElement("li",{className:"text"},"Demanda:",r.a.createElement("span",{className:"content-demands"},s)),r.a.createElement("li",null,"Percentual entregue:",r.a.createElement("span",{className:"content-percent"},parseInt(c),"%"))))}))},e.setBackground=function(e){return 0===e?"#d10000":1===e||2===e?"#FCA216":3===e||4===e?"#FCC25A":5===e||6===e?"#FCD276":7===e||8===e?"#C9E2C2":"#A5BDD4"},e.handleCovid=function(){return r.a.createElement("div",{className:"box padding container-covid"},r.a.createElement("h2",{className:"content-title"},"Casos de COVID-19"),r.a.createElement("div",{className:"content-numbers"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("span",{className:"covid-1"}),"Confirmados"),r.a.createElement("li",null,r.a.createElement("span",{className:"covid-2"}),"\xd3bitos"))),r.a.createElement("p",null,"Casos de Covid-19 no Rio de Janeiro"),e.renderSocioEconomic())},e.renderOngs=function(){var t=e.props.ongs.features.filter((function(t){return t.properties.district===e.props.currentDistrict}));return r.a.createElement("div",{className:"ongs-container container-covid"},r.a.createElement("h2",null,"Organiza\xe7\xf5es sociais"),t.length>0&&t.map((function(e){return r.a.createElement("ul",{className:"ong-list"},r.a.createElement("li",{key:e.properties.title},r.a.createElement("h3",null,e.properties.title),r.a.createElement("p",null,"0"!==e.properties.address?e.properties.address:null)))})),0===t.length&&r.a.createElement("ul",{className:"ong-list"},r.a.createElement("li",null,r.a.createElement("p",null,"Nenhum ponto de doa\xe7\xe3o nesse bairro, mas voc\xea pode encontrar outros pontos de doa\xe7\xe3o em um bairro vizinho."))))},e.renderContent=function(){switch(e.props.selectedItem.title){case"Solidariedade":return e.handleSolidarity();case"Covid-19":return e.handleCovid();default:return null}},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.currentDistrict,a=e.handleModalSubtitle,n=e.showSubtitle,o=n?"flex":"none";return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-header",onClick:a},"LEGENDA",n?r.a.createElement("span",null):r.a.createElement("p",null,"+")),r.a.createElement("div",{className:"modal-content",style:{display:"".concat(o)}},t&&this.renderOngs(),!t&&this.renderContent()))}}]),a}(n.Component),T=a(41),W=a.n(T),q=a(42),V=a.n(q),J=function(e){return V()({url:"".concat("https://uniao-rio.now.sh","/search?index=").concat(e),method:"get"})},U=a(43),G=a.n(U);z.a.accessToken="pk.eyJ1IjoiaWdvcmNvdXRvIiwiYSI6ImNrOWZudjNtcTAyd3EzbHI3a2ppbnpnemUifQ.D--CSyWyEk70oULTVok7vg";var Z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).choosePopup=function(e,t){var a="".concat(t.district),n="<p id='covid-color_confirm'>".concat(t.confirmed_cases,"</p>"),r="<p id='covid-color'>".concat(t.deaths,"</p>"),o="<p id='solidariedade-color2'>".concat(t.demands||0,"</p>"),i="<p id='solidariedade-color'>".concat(t.delivered_amount||0,"</p>");return"Solidariedade"===e?'\n        <div class="solidariedade-popup">\n          <h2>'.concat(a,"</h2>\n          <div>\n            <span>").concat(o,"<small>Demanda</small></span>\n            <span>").concat(i,"<small>Entrega</small></span>\n            <button item='").concat(a,"'>Pontos de doa\xe7\xe3o</button>\n          </div>\n        </div>\n      "):"CovidDeaths"===e||"CovidCases"===e?'\n        <div class="covid-popup">\n          <h2>'.concat(a,"</h2>\n          <div>\n            <span>").concat(n,"<small>Confirmados</small></span>\n            <span>").concat(r,"<small>\xd3bitos</small></span>\n          </div>\n        </div>\n        "):void 0},n.handlePopup=function(e){n.map.on("click",e,(function(t){n.createPopup(t,e)}))},n.createPopup=function(e,t){if(n.popup&&n.popup.isOpen()&&n.popup.remove(),!n.popup||n.popup&&!n.popup.isOpen()){var a=void 0;for(a=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-a[0])>180;)a[0]+=e.lngLat.lng>a[0]?360:-360;var r=n.choosePopup(t,e.features[0].properties);if(n.popup=new z.a.Popup({closeButton:!1}).setLngLat(a).setHTML(r).addTo(n.map),"Solidariedade"===t)n.popup.getElement().getElementsByTagName("button")[0].addEventListener("click",(function(e){var t=e.target.getAttribute("item");n.map.setFilter("Solidariedade",["==",["get","district"],t]),n.setState({currentDistrict:t,showSubtitle:!0})})),n.popup.on("close",(function(){n.map.setFilter("Solidariedade",null),n.setState({currentDistrict:""})}))}},n.handleModalSubtitle=function(){n.setState({showSubtitle:!n.state.showSubtitle})},n.renderLoading=function(){return r.a.createElement("figure",{className:"figureLoadingMap"},r.a.createElement("img",{src:G.a,alt:"Carregando...",className:"imgLoading"}))},n.handleDoador=function(e){n.map.setFilter("Solidariedade",["in",["get","district"],["literal",e]])},n.state={isLoading:!0,lng:-43.2096,lat:-22.9035,zoom:5,selectedMenuItem:"",showSubtitle:!1,bairros:{features:[]}},n.map=void 0,n.popup=void 0,n}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.selectedMenuItem;e.selectedMenuItem!==a&&(this.popup&&this.popup.remove(),"painel"===a.text&&this.map.setLayoutProperty(e.selectedMenuItem.layerName,"visibility","none"),"painel"!==a.text&&("Covid"===e.selectedMenuItem.layerName&&(this.map.setLayoutProperty("CovidDeaths","visibility","none"),this.map.setLayoutProperty("CovidCases","visibility","none")),"Covid"===a.layerName&&(this.map.setLayoutProperty("CovidDeaths","visibility","visible"),this.map.setLayoutProperty("CovidCases","visibility","visible"),this.handlePopup("CovidCases")),"Solidariedade"===e.selectedMenuItem.layerName&&(this.popup&&this.popup.remove(),this.map.setLayoutProperty("Solidariedade","visibility","none")),"Solidariedade"===a.layerName&&this.map.setLayoutProperty("Solidariedade","visibility","visible")))}},{key:"fetchNeighborhood",value:function(){var e=Object($.a)(R.a.mark((function e(){var t,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isFetching:!0}),e.next=4,J("bairros");case 4:t=e.sent,a={type:"FeatureCollection",features:[]},t.data.data.forEach((function(e){var t={type:"Feature",geometry:{type:"Point",coordinates:[e._source.longitude,e._source.latitude]},properties:e._source};a.features.push(t)})),this.setState({bairros:a,isFetching:!1}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),console.log(e.t0.response),this.setState({isFetching:!1});case 15:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchOngs",value:function(){var e=Object($.a)(R.a.mark((function e(){var t,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isFetching:!0}),e.next=4,J("ongs");case 4:t=e.sent,a={type:"FeatureCollection",features:[]},t.data.data.forEach((function(e){var t={type:"Feature",geometry:{type:"Point",coordinates:[e._source.longitude,e._source.latitude]},properties:e._source};a.features.push(t)})),this.setState({ongs:a,isFetching:!1}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),console.log(e.t0.response),this.setState({isFetching:!1});case 15:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object($.a)(R.a.mark((function e(){var t=this;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchNeighborhood();case 2:return e.next=4,this.fetchOngs();case 4:this.setState({isLoading:!1}),this.map=new z.a.Map({container:this.mapContainer,style:"mapbox://styles/igorcouto/ck9mtp0zx384s1jwau5diy2w4/",center:[this.state.lng,this.state.lat],zoom:this.state.zoom,minZoom:7,maxZoom:13,maxBounds:[[-45.70898,-23.553521],[-40.40585,-20.715985]]}),this.map.on("load",(function(){t.map.flyTo({center:[t.state.lng,t.state.lat],zoom:12,speed:.25}),t.map.addSource("bairros",{type:"geojson",data:t.state.bairros}),t.map.addLayer({id:"CovidCases",type:"circle",source:"bairros",layout:{visibility:"none"},paint:{"circle-stroke-width":["interpolate",["linear"],["get","confirmed_cases"],10,4,50,6,60,8,70,10,80,12,90,14,100,16,200,26,300,36,400,46,500,56,600,66,700,76],"circle-stroke-color":"hsla(144, 91%, 43%, 0.4)","circle-color":"hsla(144, 91%, 43%, 0.4)"}}),t.map.addLayer({id:"CovidDeaths",type:"circle",source:"bairros",layout:{visibility:"none"},paint:{"circle-stroke-width":["interpolate",["linear"],["get","deaths"],10,4,50,6,60,8,70,10,80,12,90,14,100,16,200,26,300,36,400,46,500,56,600,66,700,76],"circle-stroke-color":"hsla(134, 44%, 46%, 0.6)","circle-color":"hsla(134, 44%, 46%, 0.6)"}}),t.map.addLayer({id:"Bairros-Title",type:"symbol",source:"bairros",layout:{"text-size":12,"icon-ignore-placement":!1,"text-field":["case",["match",["get","district"],["NAO INFORMADO"],!1,!0],["to-string",["get","district"]],["to-string",["get","district"]]],"text-transform":"lowercase"},paint:{"text-color":"hsla(0, 0%, 20%, 1)","text-halo-color":"hsla(0, 0%, 100%, 0.7)","text-halo-width":1,"text-halo-blur":1}}),t.map.addLayer({id:"Solidariedade",type:"symbol",source:"bairros",layout:{"icon-ignore-placement":!0,"text-size":12,visibility:"visible","icon-image":["step",["round",["/",["*",100,["get","delivered_amount"]],["get","demands"]]],"",1,"25 (1)",50,"50",75,"75",100,"100"],"text-field":["step",["get","delivered_amount"],"",1,["concat",["to-string",["round",["/",["*",100,["get","delivered_amount"]],["get","demands"]]]],"%"]]},paint:{"text-color":"#fff","icon-opacity":.7}}),t.props.handleMenuItem({image:S.a,selectedImage:O.a,title:"Solidariedade",color:"#F0184F",text:"solid",layerName:"Solidariedade"}),t.handlePopup("Solidariedade")})),this.map.addControl(new z.a.NavigationControl,"bottom-left");case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.showSubtitle,o=t.bairros,i=this.props,s=i.setDisplay,c=i.selectedMenuItem;return r.a.createElement("div",{id:"map",style:{display:s}},a?this.renderLoading():r.a.createElement(r.a.Fragment,null,r.a.createElement(H,{handleDoador:this.handleDoador,ongs:this.state.ongs,currentDistrict:this.state.currentDistrict,handleModalSubtitle:this.handleModalSubtitle,showSubtitle:n,selectedItem:c,listSolidarity:o.features}),r.a.createElement("footer",null,r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://www.vainaweb.com.br/","aria-label":"VaiNaWeb logo"},r.a.createElement("p",null,"Desenvolvido por"),r.a.createElement("img",{src:W.a,alt:"vnw logo"}))),r.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"mapContainer"})))}}]),a}(n.Component),Q=a(44),X=a.n(Q),Y=a(45),K=a.n(Y),ee=a(46),te=a.n(ee),ae=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleMenuItem=function(e){"Transpar\xeancia"!==e.title&&n.setState({selectedMenuItem:e})},n.handleModalSubtitle=function(){n.setState({showSubtitle:!n.state.showSubtitle})},n.renderMap=function(){return r.a.createElement(Z,{handleMenuItem:n.handleMenuItem,selectedMenuItem:n.state.selectedMenuItem})},n.renderPainel=function(){var e="painel"===n.state.selectedMenuItem.text?"flex":"none";return r.a.createElement("div",{className:"painel",style:{display:"".concat(e)}},r.a.createElement("div",{className:"painel-container"},r.a.createElement("h1",null,"Painel da transpar\xeancia"),r.a.createElement("p",null,"Geral"),r.a.createElement("img",{className:"painel-img",src:X.a,alt:"Icone"}),r.a.createElement("img",{className:"painel-menu",src:K.a,alt:"Menu"}),r.a.createElement("img",{className:"painel2",src:te.a,alt:"Menu"})))},n.state={selectedMenuItem:"",showSubtitle:!1},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.renderMap()}},{key:"render",value:function(){return r.a.createElement("div",{id:"map"},r.a.createElement(A,{selectMenuItem:this.handleMenuItem,selectedMenuItem:this.state.selectedMenuItem}),this.renderPainel(),this.renderMap())}}]),a}(n.Component),ne=function(){return r.a.createElement(s.a,null,r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/",component:ae}),r.a.createElement(c.a,{exact:!0,path:"/uniaorio",component:ae})))},re=function(){return r.a.createElement(ne,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));z.a.accessToken="pk.eyJ1IjoiaWdvcmNvdXRvIiwiYSI6ImNrOWZudjNtcTAyd3EzbHI3a2ppbnpnemUifQ.D--CSyWyEk70oULTVok7vg",i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[47,1,2]]]);
//# sourceMappingURL=main.03acda5f.chunk.js.map