(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{224:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return g}),a.d(t,"pageQuery",function(){return v});var n=a(0),r=a.n(n),l=a(134),o=a(230),i=a.n(o),s=a(231),c=a.n(s),m=a(232),u=a.n(m),d=a(328),f=a.n(d),p=a(239),E=a(235);function g(e){var t=e.data.allMarkdownRemark.edges;return r.a.createElement(p.a,null,r.a.createElement(E.a,{title:"About Noel"}),r.a.createElement(i.a,{className:"my-5"},r.a.createElement(c.a,null,t.filter(function(e){return e.node.frontmatter.title.length>0}).map(function(e){var t=e.node;return r.a.createElement(u.a,{xs:{span:6},key:t.id},r.a.createElement(l.Link,{to:t.frontmatter.path},r.a.createElement(f.a,{style:{width:"100%"}},r.a.createElement(f.a.Body,null,r.a.createElement(f.a.Title,null,r.a.createElement("h4",null,t.frontmatter.title)),r.a.createElement(f.a.Subtitle,{className:"mb-2 text-muted"},t.frontmatter.date),r.a.createElement(f.a.Text,{className:"small"},t.frontmatter.excerpt,"...")))))}))))}var v="909485727"},235:function(e,t,a){"use strict";var n=a(241),r=a(0),l=a.n(r),o=a(1),i=a.n(o),s=a(251),c=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,o=e.title,i=n.data.site,s=t||i.siteMetadata.description;return l.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:o},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:s}].concat(r)})}m.defaultProps={lang:"en",meta:[],description:""},m.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=m},237:function(e,t,a){"use strict";a.d(t,"a",function(){return i});var n=a(0),r=a.n(n),l=a(234),o=a.n(l),i=function(e){var t=e.to,a=e.children;return r.a.createElement(o.a,{to:t,exit:{length:.75},entry:{delay:.75,length:.75}},a)}},239:function(e,t,a){"use strict";a(71),a(72);var n=a(0),r=a.n(n),l=a(1),o=a.n(l),i=a(237),s=a(238),c=a(134),m=a(234),u=a(230),d=a.n(u),f=a(231),p=a.n(f),E=a(232),g=a.n(E),v=a(233),x=a(236),h=a(217),b=a.n(h),y=function(e){var t=e.isHome;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.TransitionState,null,function(a){var n=a.transitionStatus,l=(a.exit,a.entry,["entering","entered"].includes(n));return r.a.createElement(s.Spring,{from:{paddingTop:e.isHome&&l?"8vh":"2vh",paddingBottom:e.isHome&&l?"15vh":"2vh"},to:{paddingTop:e.isHome&&l?"8vh":(e.isHome,"2vh"),paddingBottom:e.isHome&&l?"15vh":(e.isHome,"2vh")}},function(e){return r.a.createElement("div",{id:"nav",className:["bg-white","d-flex","d-flex-row","flex-wrap","align-items-center",t?null:"border-bottom"].join(" "),style:e},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(g.a,{className:"d-flex flex-row align-items-center pl-0 flex-xs-column justify-content-center justify-content-sm-start",xs:{span:12},sm:{span:8}},r.a.createElement(s.Spring,{from:{display:"block",opacity:1},to:{display:l&&t?"none":"block",opacity:l&&t?0:1}},function(e){return r.a.createElement("div",{className:"p-2",style:e},r.a.createElement("button",{title:"Go back",onClick:function(){return window.history.go(-1)},className:["align-items-center","d-flex","px-0",b.a.backBtn].join(" ")},r.a.createElement(v.a,{icon:x.b,size:"lg"})))}),r.a.createElement(s.Spring,{from:{fontSize:l&&t?"2em":"1em"},to:{fontSize:l&&t?"2em":"1em"}},function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"p-2",style:e},r.a.createElement(i.a,{to:"/"},r.a.createElement("span",{"aria-label":"noletorious",role:"img",className:b.a.n},"🏌️"))),r.a.createElement("div",{className:"p-2",style:e},r.a.createElement("p",{className:"mb-0 text-light font-weight-bold"},"Noel Torres"),r.a.createElement("h6",{className:"mb-0 text-light"},"Full-stack Designer")))})),r.a.createElement(g.a,{className:"d-flex align-items-center nav-items justify-content-center justify-content-sm-start",xs:{span:12},sm:{span:4},style:{fontSize:"120%"}},r.a.createElement("div",{className:"ml-sm-auto p-2"},r.a.createElement(i.a,{to:"/about"},"About")),r.a.createElement("div",{className:"p-2"},r.a.createElement(c.Link,{to:"/#work"},"Work"))))))})}))},N=a(244),w=a.n(N),j=a(240),P=a.n(j),k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{fluid:"true",className:["flex-grow-1"].join(" ")},r.a.createElement(p.a,{className:"h-100 d-flex"},r.a.createElement(g.a,{xs:{span:12},sm:{span:8,offset:2},md:{span:8,offset:2},lg:{span:6,offset:3},className:["d-flex","align-items-center"].join(" ")},r.a.createElement("div",{className:["img-fluid","w-100"].join(" "),style:{marginTop:"-6em"}},r.a.createElement("video",{controls:!0,loop:!0,muted:!0,autoPlay:"true",className:"w-100 h-100"},r.a.createElement("source",{src:P.a,type:"video/webm"}),"Your browser does not support this video."))),r.a.createElement(g.a,{xs:{span:12},className:["d-flex","justify-content-center","align-items-center","flex-column","text-center","text-light"].join(" ")},r.a.createElement("h3",null,"My name is Noel, ",r.a.createElement("br",null),"I create digital experiences for people."),r.a.createElement("p",null,r.a.createElement(w.a,{to:"#work"},r.a.createElement(v.a,{icon:x.d,size:"lg"})))))))},_=(a(40),a(218)),H=a.n(_),M=a(249),S=a(250),T=a.n(S),C=function(){var e=Object(n.useState)(null),t=e[0],a=e[1];return Object(n.useEffect)(function(){console.log("======useEffect======"),T.a.get("https://api.openweathermap.org/data/2.5/weather?id=5746545&units=imperial&appid=9ff3b3252f2b747c427a1c0be7eecc50").then(function(e){a(e.data)}).catch(function(e){console.log(e)})},[]),r.a.createElement("footer",{className:["bg-footer"].join(" ")},r.a.createElement(d.a,null,r.a.createElement(p.a,{className:["d-flex","align-items-center","justify-content-center"].join(" "),style:{height:"200px"}},r.a.createElement(g.a,{xs:{span:12},sm:{span:4}},r.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},r.a.createElement("ul",{className:["mb-0","ml-0","list-group","list-group-horizontal"].join(" ")},r.a.createElement("li",{className:["list-group-item",H.a.footerItem].join(" ")},r.a.createElement("a",{href:"//dribbble.com/noletorious"},r.a.createElement(v.a,{icon:M.a,size:"lg"}))),r.a.createElement("li",{className:["list-group-item",H.a.footerItem].join(" ")},r.a.createElement("a",{href:"//github.com/noletorious"},r.a.createElement(v.a,{icon:M.b,size:"lg"}))),r.a.createElement("li",{className:["list-group-item",H.a.footerItem].join(" ")},r.a.createElement("a",{href:"//linkedin.com/noletorious"},r.a.createElement(v.a,{icon:M.c,size:"lg"})))))),r.a.createElement(g.a,{xs:{span:12},sm:{span:4}},r.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},r.a.createElement("p",{className:["mb-0","text-white"].join(" ")},"Get in touch? ",r.a.createElement("a",{href:"mailto:hello@noletorious.com"},"Email")," is a quick way."))),r.a.createElement(g.a,{xs:{span:12},sm:{span:4}},r.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},r.a.createElement("h6",{className:["mb-0","text-white","text-mute"].join(" ")},t?t.name+", OR "+Math.round(t.main.temp)+"°F":"Loading weather data..."),r.a.createElement("img",{src:t?"http://openweathermap.org/img/w/"+t.weather[0].icon+".png":null,alt:"weather icon",style:{width:"30px",marginBottom:"0"}}))))))},I=a(235);a(219);var B=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={checkIsHomePage:!!a.props.page},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{title:"Noel Torres Portfolio"}),r.a.createElement(m.TransitionState,null,function(t){var a=t.transitionStatus,n=["entering","entered"].includes(a),l=["exiting","exited"].includes(a),o="POP"===a;return r.a.createElement(s.Spring,{from:{opacity:0,transform:"translateY("+(l?"10px":0)+")"},to:{opacity:n||o?1:0,transform:"translateY("+(n?0:"10px")+")"}},function(t){return r.a.createElement("div",null,e.state.checkIsHomePage?r.a.createElement("div",{className:"vh-100 d-flex flex-column"},r.a.createElement(y,{isHome:e.state.checkIsHomePage}),r.a.createElement(k,{style:t})):r.a.createElement(y,{isHome:e.state.checkIsHomePage}),r.a.createElement("main",{className:["d-flex","flex-column"].join(" "),style:t},e.props.children))})}),r.a.createElement(C,null))},n}(n.Component);B.propTypes={children:o.a.node.isRequired};t.a=B},240:function(e,t,a){e.exports=a.p+"static/home-animation-6074193a310d87c37592a736ee767b6d.webm"},241:function(e){e.exports={data:{site:{siteMetadata:{title:"Noletorious",description:"Portland's Favorite Web Designer",author:"@gatsbyjs"}}}}},252:function(e,t,a){"use strict";var n=a(4);t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.displayName,s=void 0===n?m(e):n,u=a.Component,d=void 0===u?"div":u,f=a.defaultProps,p=i.default.forwardRef(function(t,a){var n=t.className,s=t.bsPrefix,m=t.as,u=void 0===m?d:m,f=(0,l.default)(t,["className","bsPrefix","as"]),p=(0,c.useBootstrapPrefix)(s,e);return i.default.createElement(u,(0,r.default)({ref:a,className:(0,o.default)(n,p)},f))});return p.defaultProps=f,p.displayName=s,p};var r=n(a(22)),l=n(a(41)),o=n(a(243)),i=n(a(0)),s=n(a(253)),c=a(246),m=function(e){return e[0].toUpperCase()+(0,s.default)(e).slice(1)};e.exports=t.default},253:function(e,t,a){"use strict";a(20),t.__esModule=!0,t.default=function(e){return e.replace(n,function(e,t){return t.toUpperCase()})};var n=/-(.)/g;e.exports=t.default},328:function(e,t,a){"use strict";var n=a(56),r=a(4);t.__esModule=!0,t.default=void 0;var l=r(a(22)),o=r(a(41)),i=r(a(243)),s=n(a(0)),c=a(246),m=r(a(252)),u=r(a(329)),d=r(a(330)),f=r(a(331)),p=(0,u.default)("h5"),E=(0,u.default)("h6"),g=(0,m.default)("card-body"),v=s.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,r=e.bg,m=e.text,u=e.border,f=e.body,p=e.children,E=e.as,v=void 0===E?"div":E,x=(0,o.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),h=(0,c.useBootstrapPrefix)(a,"card"),b=(0,s.useMemo)(function(){return{cardHeaderBsPrefix:h+"-header"}},[h]);return s.default.createElement(d.default.Provider,{value:b},s.default.createElement(v,(0,l.default)({ref:t},x,{className:(0,i.default)(n,h,r&&"bg-"+r,m&&"text-"+m,u&&"border-"+u)}),f?s.default.createElement(g,null,p):p))});v.displayName="Card",v.defaultProps={body:!1},v.Img=f.default,v.Title=(0,m.default)("card-title",{Component:p}),v.Subtitle=(0,m.default)("card-subtitle",{Component:E}),v.Body=g,v.Link=(0,m.default)("card-link",{Component:"a"}),v.Text=(0,m.default)("card-text",{Component:"p"}),v.Header=(0,m.default)("card-header"),v.Footer=(0,m.default)("card-footer"),v.ImgOverlay=(0,m.default)("card-img-overlay");var x=v;t.default=x,e.exports=t.default},329:function(e,t,a){"use strict";var n=a(4);t.__esModule=!0,t.default=void 0;var r=n(a(22)),l=n(a(0)),o=n(a(243));t.default=function(e){return l.default.forwardRef(function(t,a){return l.default.createElement("div",(0,r.default)({},t,{ref:a,className:(0,o.default)(t.className,e)}))})},e.exports=t.default},330:function(e,t,a){"use strict";var n=a(4);t.__esModule=!0,t.default=void 0;var r=n(a(0)).default.createContext(null);t.default=r,e.exports=t.default},331:function(e,t,a){"use strict";var n=a(4);t.__esModule=!0,t.default=void 0;var r=n(a(22)),l=n(a(41)),o=n(a(243)),i=n(a(0)),s=a(246),c=i.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,c=e.variant,m=e.as,u=void 0===m?"img":m,d=(0,l.default)(e,["bsPrefix","className","variant","as"]),f=(0,s.useBootstrapPrefix)(a,"card-img");return i.default.createElement(u,(0,r.default)({ref:t,className:(0,o.default)(c?f+"-"+c:f,n)},d))});c.displayName="CardImg",c.defaultProps={variant:null};var m=c;t.default=m,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-blog-js-39687437919a3e4d7bb5.js.map