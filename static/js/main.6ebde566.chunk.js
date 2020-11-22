(this["webpackJsonpreact-news"]=this["webpackJsonpreact-news"]||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},25:function(e,t,a){},26:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),s=a.n(l),c=(a(25),a(1)),i=a(2),o=a(4),m=a(3),d=(a(26),a(6)),u=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).openModal=e.openModal.bind(Object(d.a)(e)),e}return Object(i.a)(a,[{key:"openModal",value:function(){var e={title:this.props.item.title,author:this.props.item.author,description:this.props.item.description,urlToImage:this.props.item.urlToImage};this.props.openModal(e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"card card-styles mt-4 mr-3 ml-3",style:{width:"18rem"}},r.a.createElement("img",{src:this.props.item.urlToImage,className:"card-img-top",alt:""}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.props.item.title)),r.a.createElement("button",{onClick:this.openModal,type:"button",class:"btn-styles","data-toggle":"modal","data-target":".bd-example-modal-lg"},"Full View"))}}]),a}(r.a.Component),p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{class:"modal fade bd-example-modal-lg",tabindex:"-1",role:"dialog","aria-labelledby":"myLargeModalLabel","aria-hidden":"true"},r.a.createElement("div",{class:"modal-dialog modal-lg"},r.a.createElement("div",{class:"modal-content"},r.a.createElement("div",{class:"modal-header"},r.a.createElement("h5",{class:"modal-title",id:"exampleModalLabel"},this.props.title),r.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{class:"modal-body"},r.a.createElement("div",null,r.a.createElement("img",{className:"img-fluid",src:this.props.urlToImage})),r.a.createElement("div",null,this.props.description)),r.a.createElement("div",{class:"modal-footer"},r.a.createElement("p",{className:""},"Author: ",this.props.author),r.a.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close"))))))}}]),a}(n.Component),h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).renderItems=function(t){return t.map((function(t){return r.a.createElement(u,{item:t,openModal:e.openModal})}))},e.state={},e.renderItems=e.renderItems.bind(Object(d.a)(e)),e.openModal=e.openModal.bind(Object(d.a)(e)),e}return Object(i.a)(a,[{key:"openModal",value:function(e){var t=e.title,a=e.author,n=e.urlToImage,r=e.description;this.setState({title:t,author:a,urlToImage:n,description:r})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid col-md-9"},r.a.createElement("div",{className:"d-inline-flex p-2 bd-highlight justify-content-center row"},this.renderItems(this.props.items)),r.a.createElement(p,{title:this.state.title,author:this.state.author,description:this.state.description,urlToImage:this.state.urlToImage}))}}]),a}(n.Component),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:""},r.a.createElement("div",null,"React News"),r.a.createElement("div",null,r.a.createElement("small",null,"by Manuel Ca\xf1izares")))}}]),a}(n.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"mt-4 mr-2 ml-2 text-justify"},r.a.createElement("p",{className:""},r.a.createElement("a",{href:this.props.item.url,style:{textDecoration:"none"},target:"blank"},this.props.item.title))),r.a.createElement("div",{className:"divider"}))}}]),a}(n.Component),E=(a(27),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).renderItems=function(e){return e.map((function(e){return r.a.createElement(v,{item:e})}))},e.renderItems=e.renderItems.bind(Object(d.a)(e)),e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"col-md-3 mt-4"},r.a.createElement("div",null,r.a.createElement("h2",null,"Other News")),this.renderItems(this.props.items))}}]),a}(n.Component)),f=a(8),g=a.n(f),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={newsData:[],asideData:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="4007110774184dce9a8ef9ec2d7c286d",a="http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=".concat(t),n="http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=".concat(t);g.a.get(n).then((function(t){var a=t.data.articles;e.setState({newsData:a}),console.log(e.state.newsData)})),g.a.get(a).then((function(t){var a=t.data.articles;e.setState({asideData:a}),console.log(e.state.asideData)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-styles"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement("i",{className:"fas fa-rss-square fas-styles"}),r.a.createElement("span",{className:"news-portal"},"React News Portal"),r.a.createElement("span",{className:"news-portal"},r.a.createElement("small",{className:""},"A simple app using Axios"))))),r.a.createElement("div",{className:"container-fluid row"},r.a.createElement(h,{items:this.state.newsData}),r.a.createElement(E,{items:this.state.asideData})),r.a.createElement("div",{className:"card-footer mt-4 pt-4"},r.a.createElement(b,null)))}}]),a}(r.a.Component);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.6ebde566.chunk.js.map