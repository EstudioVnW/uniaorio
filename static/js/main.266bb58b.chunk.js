(this.webpackJsonpuniaorio=this.webpackJsonpuniaorio||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/filter-icon-3.54d0188c.svg"},function(e,t,a){e.exports=a.p+"static/media/filter-selected-icon-3.1062eeba.svg"},,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/check.32d24ad4.svg"},function(e,t,a){e.exports=a.p+"static/media/logo.3f9b1271.png"},function(e,t,a){e.exports=a.p+"static/media/densHorizontal.23396a5d.svg"},function(e,t,a){e.exports=a.p+"static/media/densVertical.1cac0dbe.svg"},function(e,t,a){e.exports=a.p+"static/media/densDiagonal.22c16143.svg"},function(e,t,a){e.exports=a.p+"static/media/filter-icon-4.a24fcc0b.svg"},function(e,t,a){e.exports=a.p+"static/media/filter-icon-6.9c7137c4.svg"},function(e,t,a){e.exports=a.p+"static/media/filter-selected-icon-4.7d2a4960.svg"},function(e,t,a){e.exports=a.p+"static/media/filter-selected-icon-6.939a948b.svg"},,,,function(e,t,a){e.exports=a.p+"static/media/loading.00169747.svg"},function(e,t,a){e.exports=a.p+"static/media/painel.6e1bce9b.svg"},function(e,t,a){e.exports=a.p+"static/media/menu.3a4e897c.png"},function(e,t,a){e.exports=a.p+"static/media/painel2.e48b3922.svg"},function(e,t,a){e.exports=a(77)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/filter-icon-5.e801dcda.svg"},function(e,t,a){e.exports=a.p+"static/media/filter-selected-icon-5.29d40615.svg"},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(29),r=a.n(o),s=(a(51),a(14)),c=a(8),l=a(4),m=a(5),d=a(6),u=a(7),p=a(30),h=a.n(p),v=a(31),f=a.n(v),g=a(32),E=a.n(g),b=a(33),y=a.n(b),N=a(34),x=a.n(N),S=a(12),D=a.n(S),C=a(35),I=a.n(C),M=(a(52),a(36)),k=a.n(M),w=a(13),O=a.n(w),L=a(37),F=a.n(L),_=(a(53),a(38)),j=a.n(_),A=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={buttonList:[{label:"Mapeamento",route:"/uniaorio"},{label:"Estat\xedsticas por Bairro",route:"/uniaorio/statistics"}],mappingList:["S\xf3cio-Econ\xf4mico","Densidade Demogr\xe1fica","Demandas e Entregas","ONG's Parceiras"],averageIncome:[{text:"At\xe9 R$1.254,00",color:"#FF6600"},{text:"R$1.255,00 - R$2.004,00",color:"#FCA446"},{text:"R$2.005,00 - R$8.640,00",color:"#F2FC36"},{text:"R$8.641,00 - R$11.261,00",color:"#6bfc36"},{text:"Al\xe9m de R$11.261,00",color:"#267300"}],demographicDensity:[{text:"100 - 500 hab."},{text:"100 - 500 hab.",img:x.a,imgDesc:"Hachura Vertical"},{text:"1.001 - 5.000 hab.",img:y.a,imgDesc:"Hachura Horizontal"},{text:"Acima de 5.001",img:E.a,imgDesc:"Hachura Diagonal"}],demandsandDeliveries:[{color:"#A3218E",text:"10.000 cestas demandadas"},{color:"#592F93",text:"1.000 cestas demandadas"},{color:"#0465B2",text:"100 cestas demandadas"},{color:"#00ACAC",text:"10 cestas demandadas"}],menuItems:[{image:D.a,selectedImage:O.a,title:"Solidariedade",color:"#F0184F",text:"solid",layerName:"Solidariedade"},{image:I.a,selectedImage:F.a,title:"Covid-19",color:"#0ACF59",text:"covid",layerName:"Covid"},{image:k.a,selectedImage:j.a,title:"Transpar\xeancia",color:"#FA9900",text:"painel"}],isMapping:!1,isSelectedButton:"",isSelectedCheck:["S\xf3cio-Econ\xf4mico","Densidade Demogr\xe1fica"],isSelected:"",isSocioEconomic:!1,DemographicDensity:!1,isDemandsandDeliveries:!1},e.handleIsMappingOpen=function(t){e.setState({isSelectedButton:t,isMapping:!e.state.isMapping})},e.handleSelected=function(t){e.setState({isSelectedButton:t})},e.renderDemandsandDeliveries=function(){return i.a.createElement("div",{className:"container_infos"},e.state.demandsandDeliveries.map((function(e){var t=e.color,a=e.text;return i.a.createElement("div",{className:"container_infos-item"},i.a.createElement("span",{className:"container_infos-item--box infos_item-demand",style:{background:t}}),a)})))},e.renderDemographicDensity=function(){return i.a.createElement("div",{className:"container_infos"},e.state.demographicDensity.map((function(e){var t=e.text,a=e.img,n=e.imgDesc;return i.a.createElement("div",{className:"container_infos-item"},i.a.createElement("span",{className:"container_infos-item--box"},i.a.createElement("img",{src:a,alt:n,className:"density_img"})),t)})))},e.renderSocioEconomic=function(){return i.a.createElement("div",{className:"container_infos"},e.state.averageIncome.map((function(e){var t=e.text,a=e.color;return i.a.createElement("div",{className:"container_infos-item"},i.a.createElement("span",{className:"container_infos-item--box",style:{backgroundColor:a}}),t)})))},e.handleMappingCheck=function(t){var a=e.state.isSelectedCheck;a.find((function(e){return e===t}))?a.splice(a.indexOf(t),1):a=a.concat(t),e.setState({isSelectedCheck:a})},e.renderCheckIcon=function(t){return e.state.isSelectedCheck.find((function(e){return e===t}))?i.a.createElement("img",{src:h.a,alt:"check",className:"mapping_item-checkbox--check"}):null},e.renderDataItem=function(t){var a=e.state.isSelectedCheck.find((function(e){return e===t}));switch(t&&a){case"S\xf3cio-Econ\xf4mico":return e.renderSocioEconomic();case"Densidade Demogr\xe1fica":return e.renderDemographicDensity();case"Demandas e Entregas":return e.renderDemandsandDeliveries();case"ONG's Parceiras":default:return null}},e.renderMapping=function(){return i.a.createElement("div",{className:"container_mapping"},e.state.mappingList.map((function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{key:t,className:"container_mapping-item"},i.a.createElement("p",{className:"mapping_item-text"},t)),e.renderDataItem(t))})))},e.renderMenuItem=function(){return e.state.menuItems.map((function(t){var a=e.props.selectedMenuItem.title===t.title,n=a?t.color:"#595959",o=a?"600":"200",r=a?t.color:"#fff",s=e.props.selectedMenuItem?1:.5;return i.a.createElement("li",{key:t.title,onClick:function(){return e.props.selectedMenuItem&&e.props.selectMenuItem(t)},style:{color:"".concat(n),fontWeight:"".concat(o),opacity:"".concat(s)}},i.a.createElement("img",{src:a?t.selectedImage:t.image,alt:"Icone"}),i.a.createElement("p",null,t.title),i.a.createElement("span",{className:"line",style:{background:"".concat(r),transition:"all .25s ease-in-out"}}))}))},e}return Object(m.a)(a,[{key:"render",value:function(){return i.a.createElement("nav",{className:"menu"},i.a.createElement("div",{className:"menu-container"},i.a.createElement("div",{className:"menu-logo"},i.a.createElement(s.b,{to:"/uniaorio"},i.a.createElement("img",{src:f.a,alt:"logo"})),i.a.createElement("div",null,i.a.createElement("p",null,"\xdaltima atualiza\xe7\xe3o - Em testes"),i.a.createElement("p",{className:"text-red"},"17:00 - 19.05.20"))),i.a.createElement("ul",{className:"menu-filters"},this.renderMenuItem()),i.a.createElement("button",null,"Fa\xe7a uma doa\xe7\xe3o")))}}]),a}(n.Component),P=a(10),R=a.n(P),$=a(15),H=a(9),z=a.n(H),B=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isModal:!0,isHover:!1},e.handleHover=function(){e.setState({isHover:!e.state.isHover})},e.renderSocioEconomic=function(){return i.a.createElement("div",{className:"socio"},e.renderSocioEconomicDatas(),e.renderSocioEconomicDescription())},e.renderSocioEconomicDatas=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",{className:"content-title"},"Socio-econ\xf4mico"),i.a.createElement("div",{className:"content-numbers"},i.a.createElement("div",{className:"ibge-degrade"}),i.a.createElement("ul",null,i.a.createElement("li",null,"Abaixo de R$1.000,00"),i.a.createElement("li",null,"R$1.000,00 - R$2.000,00"),i.a.createElement("li",null,"R$3.000,00 - R$4.000,00"),i.a.createElement("li",null,"R$5.000,00 - R$6.000,00"),i.a.createElement("li",null,"R$7.000,00 - R$8.000,00"),i.a.createElement("li",null,"Acima de R$10.000,00"))))},e.renderSocioEconomicDescription=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Os tons mais escuros correspondem aos de menor ",i.a.createElement("strong",null,"renda per-capita"),". J\xe1 os mais claros correspondem aos de maior renda. Assim podemos identificar quais regi\xf5es tem mais recursos para manter os seus habitantes em seguran\xe7a."),i.a.createElement("p",null,"Vale ressaltar que uma regi\xe3o com mais recursos tem acesso mais r\xe1pido aos servi\xe7os do estado e outras prestadoras privadas."),i.a.createElement("p",null,"Esses dados foram retirados do CENSO-10, realizado pelo IBGE no ano de 2010."),i.a.createElement("span",null,i.a.createElement("strong",null,"Renda per-capita"),": \xe9 o valor m\xe9dio que cada pessoa da regi\xe3o recebe mensalmente."))},e.handleDemographicDensity=function(){return i.a.createElement("div",{className:"box"},i.a.createElement("h2",{className:"content-title"},"Densidade demogr\xe1fica"),i.a.createElement("div",{className:"content-numbers"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",{className:"dens-0"})," 100 - 500 hab."),i.a.createElement("li",null,i.a.createElement("span",{className:"dens-1"})," 501 - 1.000 hab."),i.a.createElement("li",null,i.a.createElement("span",{className:"dens-2"})," 1.001- 5.000"),i.a.createElement("li",null,i.a.createElement("span",{className:"dens-3"})," Acima de 5.001"))),i.a.createElement("p",null,"Densidade demogr\xe1fica, densidade populacional ou popula\xe7\xe3o relativa \xe9 a medida expressa pela rela\xe7\xe3o entre a popula\xe7\xe3o e a superf\xedcie do territ\xf3rio, geralmente aplicada a seres humanos, mas tamb\xe9m em outros seres vivos. \xc9 sempre expressa em habitantes por quil\xf4metro quadrado."))},e.handleSolidarity=function(){return i.a.createElement("div",{className:"box"},i.a.createElement("h2",{className:"content-title"},"Solidariedade"),i.a.createElement("div",{className:"content-numbers"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",{className:"solid-1"},"%"),"Percentual entregue"),i.a.createElement("li",null,i.a.createElement("span",{className:"solid-3"}),"Entrega"),i.a.createElement("li",null,i.a.createElement("span",{className:"solid-2"}),"Demanda"))),e.renderContentDemand())},e.renderContentDemand=function(){var t=window.matchMedia("(max-width:  768px)").matches;return i.a.createElement("div",null,i.a.createElement("h2",{className:"content-title"},"Demanda geral por bairro"),i.a.createElement("p",{className:"content-subtitle"},"A barra a esquerda indica a condi\xe7\xe3o",t?i.a.createElement("span",{onClick:e.handleHover,className:"content-subtitle-button"}," s\xf3cio-econ\xf4mica "):i.a.createElement("span",{className:"content-subtitle-button",onMouseEnter:e.handleHover,onMouseLeave:e.handleHover}," s\xf3cio-econ\xf4mica "),"de cada bairro"),i.a.createElement("div",{className:"boxModal"},e.renderModalSocioEconomic()),e.renderContentDemandList())},e.renderModalSocioEconomic=function(){return i.a.createElement("div",{className:"modal-socio-economic modal-socio-economic-float",style:{display:e.state.isHover?"flex":"none"}},i.a.createElement("div",{className:"modal-socio-economic-arrow"}," "),i.a.createElement("div",{className:"socio socio-float"},e.renderSocioEconomicDatas()))},e.renderContentDemandList=function(){return e.props.listSolidarity.map((function(t){var a=t.properties,n=a.renda_per_capita,o=a.district,r=a.delivered_amount,s=a.demands,c=parseInt(n);return i.a.createElement("div",{className:"container-demand"},i.a.createElement("span",{className:"content-bar",style:{background:e.setBackground(c)}}),i.a.createElement("ul",null,i.a.createElement("li",{className:"content-title name-neighborhood"},o),i.a.createElement("li",null,"Entrega:",i.a.createElement("span",{className:"content-delivered"},r)),i.a.createElement("li",null,"Demanda:",i.a.createElement("span",{className:"content-demands"},s))))}))},e.setBackground=function(e){return 0===e?"#d10000":1===e||2===e?"#FCA216":3===e||4===e?"#FCC25A":5===e||6===e?"#FCD276":7===e||8===e?"#C9E2C2":"#A5BDD4"},e.handleCovid=function(){return i.a.createElement("div",{className:"box"},i.a.createElement("h2",{className:"content-title"},"Casos de COVID-19"),i.a.createElement("div",{className:"content-numbers"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("span",{className:"covid-1"}),"Confirmados"),i.a.createElement("li",null,i.a.createElement("span",{className:"covid-2"}),"\xd3bitos"))),i.a.createElement("p",null,"Casos de Covid-19 no Rio de Janeiro"),e.renderSocioEconomic())},e.renderOngs=function(){var t=e.props.ongs.features.filter((function(t){return t.properties.district===e.props.currentDistrict}));return i.a.createElement("div",{className:"ongs-container"},i.a.createElement("h2",null,"Organiza\xe7\xf5es sociais"),t.length>0&&t.map((function(e){return i.a.createElement("ul",{className:"ong-list"},i.a.createElement("li",{key:e.properties.title},i.a.createElement("h3",null,e.properties.title),i.a.createElement("p",null,"0"!==e.properties.address?e.properties.address:null)))})),0===t.length&&i.a.createElement("ul",{className:"ong-list"},i.a.createElement("li",null,i.a.createElement("p",null,"Nenhum ponto de doa\xe7\xe3o nesse bairro, mas voc\xea pode encontrar outros pontos de doa\xe7\xe3o em um bairro vizinho."))))},e.renderContent=function(){switch(e.props.selectedItem.title){case"Solidariedade":return e.handleSolidarity();case"Covid-19":return e.handleCovid();default:return null}},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.currentDistrict,a=e.handleModalSubtitle,n=e.showSubtitle,o=n?"none":"flex";return i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"modal-header",onClick:a},"LEGENDA",n?i.a.createElement("span",null):i.a.createElement("p",null,"+")),i.a.createElement("div",{className:"modal-content",style:{display:"".concat(o)}},t&&this.renderOngs(),!t&&this.renderContent()))}}]),a}(n.Component),T=a(41),W=a.n(T),q=function(e){return W()({url:"".concat("https://uniao-rio.now.sh","/search?index=").concat(e),method:"get"})},J=a(42),V=a.n(J);z.a.accessToken="pk.eyJ1IjoiaWdvcmNvdXRvIiwiYSI6ImNrOWZudjNtcTAyd3EzbHI3a2ppbnpnemUifQ.D--CSyWyEk70oULTVok7vg";var G=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).choosePopup=function(e,t){console.log("feature",t);var a="".concat(t.district),n="<p id='covid-color_confirm'>".concat(t.confirmed_cases,"</p>"),i="<p id='covid-color'>".concat(t.deaths,"</p>"),o="<p id='solidariedade-color2'>".concat(t.demands||0,"</p>"),r="<p id='solidariedade-color'>".concat(t.delivered_amount||0,"</p>");return"Solidariedade"===e?'\n        <div class="solidariedade-popup">\n          <h2>'.concat(a,"</h2>\n          <div>\n            <span>").concat(o,"<small>Demanda</small></span>\n            <span>").concat(r,"<small>Entrega</small></span>\n            <button item='").concat(a,"'>Pontos de doa\xe7\xe3o</button>\n          </div>\n        </div>\n      "):"CovidDeaths"===e||"CovidCases"===e?'\n        <div class="covid-popup">\n          <h2>'.concat(a,"</h2>\n          <div>\n            <span>").concat(n,"<small>Confirmados</small></span>\n            <span>").concat(i,"<small>\xd3bitos</small></span>\n          </div>\n        </div>\n        "):void 0},n.handlePopup=function(e){n.map.on("click",e,(function(t){n.createPopup(t,e)}))},n.createPopup=function(e,t){if(n.popup&&n.popup.isOpen()&&n.popup.remove(),!n.popup||n.popup&&!n.popup.isOpen()){var a=void 0;for(a=e.features[0].geometry.coordinates.slice();Math.abs(e.lngLat.lng-a[0])>180;)a[0]+=e.lngLat.lng>a[0]?360:-360;var i=n.choosePopup(t,e.features[0].properties);if(n.popup=new z.a.Popup({closeButton:!1}).setLngLat(a).setHTML(i).addTo(n.map),"Solidariedade"===t)n.popup.getElement().getElementsByTagName("button")[0].addEventListener("click",(function(e){var t=e.target.getAttribute("item");n.setState({currentDistrict:t,showSubtitle:!1})})),n.popup.on("close",(function(){n.setState({currentDistrict:""})}))}},n.handleModalSubtitle=function(){n.setState({showSubtitle:!n.state.showSubtitle})},n.renderLoading=function(){return i.a.createElement("figure",{className:"figureLoadingMap"},i.a.createElement("img",{src:V.a,alt:"Carregando...",className:"imgLoading"}))},n.state={isLoading:!0,lng:-43.2096,lat:-22.9035,zoom:5,selectedMenuItem:"",showSubtitle:!1,bairros:{features:[]}},n.map=void 0,n.popup=void 0,n}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.props.selectedMenuItem;e.selectedMenuItem!==a&&(this.popup&&this.popup.remove(),"painel"===a.text&&this.map.setLayoutProperty(e.selectedMenuItem.layerName,"visibility","none"),"painel"!==a.text&&("Covid"===e.selectedMenuItem.layerName&&(this.map.setLayoutProperty("CovidDeaths","visibility","none"),this.map.setLayoutProperty("CovidCases","visibility","none")),"Covid"===a.layerName&&(this.map.setLayoutProperty("CovidDeaths","visibility","visible"),this.map.setLayoutProperty("CovidCases","visibility","visible"),this.handlePopup("CovidCases")),"Solidariedade"===e.selectedMenuItem.layerName&&(this.popup&&this.popup.remove(),this.map.setLayoutProperty("Solidariedade","visibility","none")),"Solidariedade"===a.layerName&&this.map.setLayoutProperty("Solidariedade","visibility","visible")))}},{key:"fetchNeighborhood",value:function(){var e=Object($.a)(R.a.mark((function e(){var t,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isFetching:!0}),e.next=4,q("bairros");case 4:t=e.sent,a={type:"FeatureCollection",features:[]},t.data.data.forEach((function(e){var t={type:"Feature",geometry:{type:"Point",coordinates:[e._source.longitude,e._source.latitude]},properties:e._source};a.features.push(t)})),this.setState({bairros:a,isFetching:!1}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),console.log(e.t0.response),this.setState({isFetching:!1});case 15:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"fetchOngs",value:function(){var e=Object($.a)(R.a.mark((function e(){var t,a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({isFetching:!0}),e.next=4,q("ongs");case 4:t=e.sent,a={type:"FeatureCollection",features:[]},t.data.data.forEach((function(e){var t={type:"Feature",geometry:{type:"Point",coordinates:[e._source.longitude,e._source.latitude]},properties:e._source};a.features.push(t)})),this.setState({ongs:a,isFetching:!1}),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),console.log(e.t0.response),this.setState({isFetching:!1});case 15:case"end":return e.stop()}}),e,this,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object($.a)(R.a.mark((function e(){var t=this;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchNeighborhood();case 2:return e.next=4,this.fetchOngs();case 4:this.setState({isLoading:!1}),this.map=new z.a.Map({container:this.mapContainer,style:"mapbox://styles/igorcouto/ck9mtp0zx384s1jwau5diy2w4/",center:[this.state.lng,this.state.lat],zoom:this.state.zoom,minZoom:7,maxZoom:13,maxBounds:[[-45.70898,-23.553521],[-40.40585,-20.715985]]}),this.map.on("load",(function(){t.map.flyTo({center:[t.state.lng,t.state.lat],zoom:12,speed:.25}),t.map.addSource("bairros",{type:"geojson",data:t.state.bairros}),t.map.addLayer({id:"CovidCases",type:"circle",source:"bairros",layout:{visibility:"none"},paint:{"circle-stroke-width":["interpolate",["linear"],["get","confirmed_cases"],10,4,50,6,60,8,70,10,80,12,90,14,100,16,200,26,300,36,400,46,500,56,600,66,700,76],"circle-stroke-color":"hsla(144, 91%, 43%, 0.4)","circle-color":"hsla(144, 91%, 43%, 0.4)"}}),t.map.addLayer({id:"CovidDeaths",type:"circle",source:"bairros",layout:{visibility:"none"},paint:{"circle-stroke-width":["interpolate",["linear"],["get","deaths"],10,4,50,6,60,8,70,10,80,12,90,14,100,16,200,26,300,36,400,46,500,56,600,66,700,76],"circle-stroke-color":"hsla(134, 44%, 46%, 0.6)","circle-color":"hsla(134, 44%, 46%, 0.6)"}}),t.map.addLayer({id:"Bairros-Title",type:"symbol",source:"bairros",layout:{"text-size":12,"icon-ignore-placement":!1,"text-field":["case",["match",["get","district"],["NAO INFORMADO"],!1,!0],["to-string",["get","district"]],["to-string",["get","district"]]],"text-transform":"lowercase"},paint:{"text-color":"hsla(0, 0%, 20%, 1)","text-halo-color":"hsla(0, 0%, 100%, 0.7)","text-halo-width":1,"text-halo-blur":1}}),t.map.addLayer({id:"Solidariedade",type:"symbol",source:"bairros",layout:{"icon-ignore-placement":!0,"text-size":12,visibility:"visible","icon-image":["step",["round",["/",["*",100,["get","delivered_amount"]],["get","demands"]]],"",1,"25 (1)",50,"50",75,"75",100,"100"],"text-field":["step",["get","delivered_amount"],"",1,["concat",["to-string",["round",["/",["*",100,["get","delivered_amount"]],["get","demands"]]]],"%"]]},paint:{"text-color":"#fff","icon-opacity":.7}}),t.props.handleMenuItem({image:D.a,selectedImage:O.a,title:"Solidariedade",color:"#F0184F",text:"solid",layerName:"Solidariedade"}),t.handlePopup("Solidariedade")})),this.map.addControl(new z.a.NavigationControl,"bottom-left");case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,n=t.showSubtitle,o=t.bairros,r=this.props,s=r.setDisplay,c=r.selectedMenuItem;return i.a.createElement("div",{id:"map",style:{display:s}},a?this.renderLoading():i.a.createElement(i.a.Fragment,null,i.a.createElement(B,{ongs:this.state.ongs,currentDistrict:this.state.currentDistrict,handleModalSubtitle:this.handleModalSubtitle,showSubtitle:n,selectedItem:c,listSolidarity:o.features}),i.a.createElement("div",{ref:function(t){return e.mapContainer=t},className:"mapContainer"})))}}]),a}(n.Component),U=a(43),Z=a.n(U),Q=a(44),X=a.n(Q),Y=a(45),K=a.n(Y),ee=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleMenuItem=function(e){n.setState({selectedMenuItem:e})},n.handleModalSubtitle=function(){n.setState({showSubtitle:!n.state.showSubtitle})},n.renderMap=function(){return i.a.createElement(G,{handleMenuItem:n.handleMenuItem,selectedMenuItem:n.state.selectedMenuItem})},n.renderPainel=function(){var e="painel"===n.state.selectedMenuItem.text?"flex":"none";return i.a.createElement("div",{className:"painel",style:{display:"".concat(e)}},i.a.createElement("div",{className:"painel-container"},i.a.createElement("h1",null,"Painel da transpar\xeancia"),i.a.createElement("p",null,"Geral"),i.a.createElement("img",{className:"painel-img",src:Z.a,alt:"Icone"}),i.a.createElement("img",{className:"painel-menu",src:X.a,alt:"Menu"}),i.a.createElement("img",{className:"painel2",src:K.a,alt:"Menu"})))},n.state={selectedMenuItem:"",showSubtitle:!1},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.renderMap()}},{key:"render",value:function(){return i.a.createElement("div",{id:"map"},i.a.createElement(A,{selectMenuItem:this.handleMenuItem,selectedMenuItem:this.state.selectedMenuItem}),this.renderPainel(),this.renderMap())}}]),a}(n.Component),te=function(){return i.a.createElement(s.a,null,i.a.createElement(c.c,null,i.a.createElement(c.a,{exact:!0,path:"/",component:ee}),i.a.createElement(c.a,{exact:!0,path:"/uniaorio",component:ee})))},ae=function(){return i.a.createElement(te,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));z.a.accessToken="pk.eyJ1IjoiaWdvcmNvdXRvIiwiYSI6ImNrOWZudjNtcTAyd3EzbHI3a2ppbnpnemUifQ.D--CSyWyEk70oULTVok7vg",r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[46,1,2]]]);
//# sourceMappingURL=main.266bb58b.chunk.js.map