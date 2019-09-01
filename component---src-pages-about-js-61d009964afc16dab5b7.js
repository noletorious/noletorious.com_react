(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{222:function(e,t,a){"use strict";a.r(t);var n=a(329),A=a(0),l=a.n(A),r=a(231),c=a.n(r),i=a(232),o=a.n(i),s=a(233),m=a.n(s),d=a(246),p=a(236),g=a(249),u=a.n(g);t.default=function(){var e=n.data;return l.a.createElement(d.a,null,l.a.createElement(p.a,{title:"About Noel"}),l.a.createElement(c.a,{className:"my-5 text-light"},l.a.createElement(o.a,null,l.a.createElement(m.a,null,l.a.createElement(u.a,{fluid:e.portlandImage.childImageSharp.fluid,fadeIn:!0,durationFadeIn:1e3,className:"mb-5"}))),l.a.createElement(o.a,{style:{marginTop:"-5em"}},l.a.createElement(m.a,{xs:{span:12},sm:{span:8,offset:2}},l.a.createElement("div",{className:"px-3 body-bg"},l.a.createElement("h1",{className:"mb-0 py-3"},"Hello world!"),l.a.createElement("p",null,"I am a full-stack designer currently in Portland, Oregon who cares about crafting enjoyable products for ",l.a.createElement("em",null,"people"),". I've worked in various web design roles from visual design, apparel design, content strategy, 2D animations, UX design, and web development. Through my career I've developed interdisciplinary skillsets which has given me a strong understanding of what good design is and a focus on creating effective, positive interactions driven by data.")," "))),l.a.createElement(o.a,null,l.a.createElement(m.a,{xs:{span:12},sm:{span:8,offset:2}},l.a.createElement("div",{className:"px-3"},l.a.createElement("h3",null,l.a.createElement("span",{role:"img","aria-label":"golfer"},"🏌️")," When I'm not designing"),l.a.createElement("p",null,"Competed nationally at golf as a youngster, now teaching friends. Other than that, cold brews and beyond burgers everyday.")," ",l.a.createElement("h3",null,l.a.createElement("span",{role:"img","aria-label":"designers"},"👍 "),"Design philosophy"),l.a.createElement("p",null,"It is always in flux. Lately I've taken to heart a recommendation by my manager to read Steve Krug’s ",l.a.createElement("em",null,"Don’t Make Me Think"),".")," ",l.a.createElement("h3",null,l.a.createElement("span",{role:"img","aria-label":"artist"},"🎨 ")," My creative type"),l.a.createElement("p",null,l.a.createElement("a",{target:"_blank",href:"https://mycreativetype.com/type/producer/",rel:"noopener noreferrer"},"Producer"))," ",l.a.createElement("h3",null,l.a.createElement("span",{role:"img","aria-label":"music"},"🎵")," Current jam"),l.a.createElement("p",null,"Awake by Tycho")," ",l.a.createElement("p",null,"Interested in viewing my resume? ",l.a.createElement("a",{href:"mailto:hello@noletorious.com"},"Send me an email"),", I'd be glad to share it."))))))}},236:function(e,t,a){"use strict";var n=a(241),A=a(0),l=a.n(A),r=a(1),c=a.n(r),i=a(255),o=a.n(i);function s(e){var t=e.description,a=e.lang,A=e.meta,r=e.title,c=n.data.site,i=t||c.siteMetadata.description;return l.a.createElement(o.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:r},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:i}].concat(A)})}s.defaultProps={lang:"en",meta:[],description:""},s.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),title:c.a.string.isRequired},t.a=s},238:function(e,t,a){"use strict";a.d(t,"a",function(){return c});var n=a(0),A=a.n(n),l=a(235),r=a.n(l),c=function(e){var t=e.to,a=e.children;return A.a.createElement(r.a,{to:t,exit:{length:.75},entry:{delay:.75,length:.75}},a)}},240:function(e,t,a){"use strict";a(40);var n=a(0),A=a.n(n),l=a(233),r=a.n(l),c=a(232),i=a.n(c),o=a(231),s=a.n(o),m=a(217),d=a.n(m),p=a(234),g=a(253),u=a(254),E=a.n(u);t.a=function(){var e=Object(n.useState)(null),t=e[0],a=e[1];return Object(n.useEffect)(function(){console.log("======useEffect======"),E.a.get("https://api.openweathermap.org/data/2.5/weather?id=5746545&units=imperial&appid=9ff3b3252f2b747c427a1c0be7eecc50").then(function(e){a(e.data)}).catch(function(e){console.log(e)})},[]),A.a.createElement("footer",{className:["bg-footer"].join(" ")},A.a.createElement(s.a,null,A.a.createElement(i.a,{className:["d-flex","align-items-center","justify-content-center"].join(" "),style:{height:"200px"}},A.a.createElement(r.a,{xs:{span:12},sm:{span:4}},A.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},A.a.createElement("ul",{className:["mb-0","ml-0","list-group","list-group-horizontal"].join(" ")},A.a.createElement("li",{className:["list-group-item",d.a.footerItem].join(" ")},A.a.createElement("a",{href:"//dribbble.com/noletorious"},A.a.createElement(p.a,{icon:g.a,size:"lg"}))),A.a.createElement("li",{className:["list-group-item",d.a.footerItem].join(" ")},A.a.createElement("a",{href:"//github.com/noletorious"},A.a.createElement(p.a,{icon:g.b,size:"lg"}))),A.a.createElement("li",{className:["list-group-item",d.a.footerItem].join(" ")},A.a.createElement("a",{href:"//linkedin.com/noletorious"},A.a.createElement(p.a,{icon:g.c,size:"lg"})))))),A.a.createElement(r.a,{xs:{span:12},sm:{span:4}},A.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},A.a.createElement("p",{className:["mb-0","text-white"].join(" ")},"Get in touch? ",A.a.createElement("a",{href:"mailto:hello@noletorious.com"},"Email")," is a quick way."))),A.a.createElement(r.a,{xs:{span:12},sm:{span:4}},A.a.createElement("div",{className:["d-flex","align-items-center","justify-content-center"].join(" ")},A.a.createElement("h6",{className:["mb-0","text-white","text-mute"].join(" ")},t?t.name+", OR "+Math.round(t.main.temp)+"°F":"Loading weather data..."),A.a.createElement("img",{src:t?"http://openweathermap.org/img/w/"+t.weather[0].icon+".png":null,alt:"weather icon",style:{width:"30px",marginBottom:"0"}}))))))}},241:function(e){e.exports={data:{site:{siteMetadata:{title:"Noletorious",description:"Portland's Favorite Web Designer",author:"@gatsbyjs"}}}}},243:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMy4wLjYsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDAgMjAwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojRjQ0MzMxO30NCgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6OTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQoJLnN0MntmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjE4O3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPGc+DQoJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTAwIiBjeT0iMTAwIiByPSI5OS41Ii8+DQo8L2c+DQo8cGF0aCBjbGFzcz0ic3QxIiBkPSJNOTAuNyw5MyIvPg0KPHBhdGggY2xhc3M9InN0MiIgZD0iTTkwLjcsNTZoNDYuMnY4OS40TDYzLjEsNTkuNVYxNDZoMjguMyIvPg0KPC9zdmc+DQo="},244:function(e,t,a){e.exports=a.p+"static/home-animation-9254966d86ed557b931518b03719e7a5.mp4"},245:function(e,t,a){e.exports=a.p+"static/home-animation-3660625ff13076bf79df4aae97e87c46.webm"},246:function(e,t,a){"use strict";a(71),a(72);var n=a(0),A=a.n(n),l=a(1),r=a.n(l),c=a(238),i=a(239),o=a(134),s=a(235),m=a(231),d=a.n(m),p=a(232),g=a.n(p),u=a(233),E=a.n(u),f=a(234),h=a(237),b=a(243),j=a.n(b),y=function(){return A.a.createElement("img",{alt:"Noel Torres Logo",src:j.a,style:{minWidth:"70px"}})},w=a(219),x=a.n(w),N=function(e){var t=e.isHome;return A.a.createElement(A.a.Fragment,null,A.a.createElement(s.TransitionState,null,function(a){var n=a.transitionStatus,l=(a.exit,a.entry,["entering","entered"].includes(n));return A.a.createElement(i.Spring,{from:{paddingTop:e.isHome&&l?"8vh":"2vh",paddingBottom:e.isHome&&l?"15vh":"2vh"},to:{paddingTop:e.isHome&&l?"8vh":(e.isHome,"2vh"),paddingBottom:e.isHome&&l?"15vh":(e.isHome,"2vh")}},function(e){return A.a.createElement("div",{id:"nav",className:["bg-white","d-flex","d-flex-row","flex-wrap","align-items-center",t?null:"border-bottom"].join(" "),style:e},A.a.createElement(d.a,null,A.a.createElement(g.a,null,A.a.createElement(E.a,{className:"d-flex flex-row align-items-center pl-0 flex-xs-column justify-content-center justify-content-sm-start",xs:{span:12},sm:{span:8}},A.a.createElement(i.Spring,{from:{display:"block",opacity:1},to:{display:l&&t?"none":"block",opacity:l&&t?0:1}},function(e){return A.a.createElement("div",{className:"p-2",style:e},A.a.createElement("button",{title:"Go back",onClick:function(){return window.history.go(-1)},className:["align-items-center","d-flex","px-0",x.a.backBtn].join(" ")},A.a.createElement(f.a,{icon:h.b,size:"lg"})))}),A.a.createElement(i.Spring,{from:{fontSize:l&&t?"2em":"1em"},to:{fontSize:l&&t?"2em":"1em"}},function(e){return A.a.createElement(A.a.Fragment,null,A.a.createElement("div",{className:"p-2",style:e},A.a.createElement(c.a,{to:"/"},A.a.createElement(y,null))),A.a.createElement("div",{className:"p-2",style:e},A.a.createElement("span",{className:"mb-0 font-weight-bold",style:{color:"#fff"}},"Noel Torres"),A.a.createElement("h6",{className:"my-0 text-light"},"Full-stack Designer")))})),A.a.createElement(E.a,{className:"d-flex align-items-center nav-items justify-content-center justify-content-sm-start",xs:{span:12},sm:{span:4},style:{fontSize:"120%"}},A.a.createElement("div",{className:"ml-sm-auto py-2"},A.a.createElement(c.a,{to:"/about"},"About")),A.a.createElement("div",{className:"py-2 pl-4"},A.a.createElement(o.Link,{to:"/#work"},"Work"))))))})}))},B=a(242),v=a.n(B),Q=a(244),D=a.n(Q),I=a(245),M=a.n(I),Y=function(){return A.a.createElement(A.a.Fragment,null,A.a.createElement(d.a,{fluid:"true",className:["flex-grow-1"].join(" ")},A.a.createElement(g.a,{className:"h-100 d-flex"},A.a.createElement(E.a,{xs:{span:12},sm:{span:8,offset:2},md:{span:10,offset:1},lg:{span:6,offset:3},className:["d-flex","align-items-center"].join(" ")},A.a.createElement("div",{className:["img-fluid","w-100"].join(" "),style:{marginTop:"-6em"}},A.a.createElement("video",{controls:!0,loop:!0,muted:!0,autoPlay:!0,className:"w-100 h-100"},A.a.createElement("source",{src:M.a,type:"video/webm"}),A.a.createElement("source",{src:D.a,type:"video/mp4"}),A.a.createElement("span",{className:"text-light"},"Your browser does not support HTML5 video.")))),A.a.createElement(E.a,{xs:{span:12},className:["d-flex","justify-content-center","align-items-center","flex-column","text-center","text-light"].join(" ")},A.a.createElement("h3",null,"Enriching digital experiences with thoughtful design.",A.a.createElement("br",null),"Hi, I'm Noel."),A.a.createElement("p",null,A.a.createElement(v.a,{to:"#work"},A.a.createElement(f.a,{icon:h.d,size:"lg"})))))))},S=a(240),k=a(236);a(218);var G=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={checkIsHomePage:!!a.props.page},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return A.a.createElement(A.a.Fragment,null,A.a.createElement(k.a,{title:"Noel Torres Portfolio"}),A.a.createElement(s.TransitionState,null,function(t){var a=t.transitionStatus,n=["entering","entered"].includes(a),l=["exiting","exited"].includes(a),r="POP"===a;return A.a.createElement(i.Spring,{from:{opacity:0,transform:"translateY("+(l?"10px":0)+")"},to:{opacity:n||r?1:0,transform:"translateY("+(n?0:"10px")+")"}},function(t){return A.a.createElement("div",null,e.state.checkIsHomePage?A.a.createElement("div",{className:"vh-100 d-flex flex-column"},A.a.createElement(N,{isHome:e.state.checkIsHomePage}),A.a.createElement(Y,{style:t})):A.a.createElement(N,{isHome:e.state.checkIsHomePage}),A.a.createElement("main",{className:["d-flex","flex-column"].join(" "),style:t},e.props.children))})}),A.a.createElement(S.a,null))},n}(n.Component);G.propTypes={children:r.a.node.isRequired};t.a=G},329:function(e){e.exports={data:{portlandImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAJABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEEAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAcqZXPcjD//EABkQAAIDAQAAAAAAAAAAAAAAAAACARMxA//aAAgBAQABBQK5y3oXORr6f//EABYRAAMAAAAAAAAAAAAAAAAAAAABEv/aAAgBAwEBPwGUSj//xAAWEQADAAAAAAAAAAAAAAAAAAAAARL/2gAIAQIBAT8BplM//8QAFxAAAwEAAAAAAAAAAAAAAAAAACBBMf/aAAgBAQAGPwKENT//xAAbEAACAQUAAAAAAAAAAAAAAAAAAZEgMVFhof/aAAgBAQABPyHDwNV3A0ooD//aAAwDAQACAAMAAAAQvD//xAAVEQEBAAAAAAAAAAAAAAAAAAAAYf/aAAgBAwEBPxCCD//EABURAQEAAAAAAAAAAAAAAAAAAABh/9oACAECAQE/ELqP/8QAHRAAAgIBBQAAAAAAAAAAAAAAAAEhMVERQXGBsf/aAAgBAQABPxBttG8Cpam8B68dB9EV8sW5/9k=",aspectRatio:2.1390374331550803,src:"/static/2f61954f48fd675e9e73c59a795a6d44/d47f1/portland-about.jpg",srcSet:"/static/2f61954f48fd675e9e73c59a795a6d44/b5b92/portland-about.jpg 200w,\n/static/2f61954f48fd675e9e73c59a795a6d44/3ff6e/portland-about.jpg 400w,\n/static/2f61954f48fd675e9e73c59a795a6d44/d47f1/portland-about.jpg 800w,\n/static/2f61954f48fd675e9e73c59a795a6d44/86173/portland-about.jpg 1200w,\n/static/2f61954f48fd675e9e73c59a795a6d44/a5547/portland-about.jpg 1600w",sizes:"(max-width: 800px) 100vw, 800px"}}},noelImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAVABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEA//EABYBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAABkUeGtNCWDTxNJpCa/8QAHBAAAgIDAQEAAAAAAAAAAAAAAAIBAxESExQy/9oACAEBAAEFAprsUWhYfghyshdtz0So7YK/vFaH/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/ARIgv//EABYRAAMAAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPwGGor//xAAcEAACAwADAQAAAAAAAAAAAAABEQACIRATcUH/2gAIAQEABj8CDqnKu1kZ9gL0SuxGm+8IZF1g+z//xAAbEAEAAwEBAQEAAAAAAAAAAAABABEhMUFRkf/aAAgBAQABPyFAN4S3J2ykYfD9y5bpYXyOct2WXMdpESgeZOmZY9z/AHpn/9oADAMBAAIAAwAAABDH/wC9/8QAGBEAAgMAAAAAAAAAAAAAAAAAABEBEFH/2gAIAQMBAT8Qk/RX/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAEQESH/2gAIAQIBAT8QdA2X/8QAHhABAQACAgMBAQAAAAAAAAAAAREAITFRQWFxgaH/2gAIAQEAAT8QsK8Ty/mEJkl9Ql8YchpcKZb4Htq/MitAaxgo8/zJPDiGvy42rkm7pLvDG1170+PeOXArJT2pn//Z",aspectRatio:.9511527940601797,src:"/static/b1fc55466d0d34c89c6a5bc65ca9920a/a6913/noel.jpg",srcSet:"/static/b1fc55466d0d34c89c6a5bc65ca9920a/584d5/noel.jpg 38w,\n/static/b1fc55466d0d34c89c6a5bc65ca9920a/05f9f/noel.jpg 75w,\n/static/b1fc55466d0d34c89c6a5bc65ca9920a/a6913/noel.jpg 150w,\n/static/b1fc55466d0d34c89c6a5bc65ca9920a/ab823/noel.jpg 225w,\n/static/b1fc55466d0d34c89c6a5bc65ca9920a/79638/noel.jpg 300w,\n/static/b1fc55466d0d34c89c6a5bc65ca9920a/6634a/noel.jpg 2434w",sizes:"(max-width: 150px) 100vw, 150px"}}}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-61d009964afc16dab5b7.js.map