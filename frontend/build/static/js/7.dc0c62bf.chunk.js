(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{24:function(e,t,i){e.exports=i(29)()},29:function(e,t,i){"use strict";var n=i(30);function s(){}function o(){}o.resetWarningCache=s,e.exports=function(){function e(e,t,i,s,o,r){if(r!==n){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var i={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:s};return i.PropTypes=i,i}},30:function(e,t,i){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},31:function(e,t,i){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function s(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",s,!0),n("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",s,!0),window.document.removeEventListener("visibilitychange",s))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,s){var o=Math.log(n),r=(Math.log(s)-o)/(i-t);return Math.exp(o+r*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(v+u)+"{"+e+"}",i=h[e];return i?""+v+i:(f.insertRule(t,f.cssRules.length),h[e]=u,""+v+u++)},t.hideAll=s,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var o=t.namespace="react-reveal",r=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=r=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),p=(t.ie10=!1,t.collapseend=void 0),u=1,h={},f=!1,v=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=r=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),r&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=r=!1),r&&window.setTimeout(c,1500),a||(t.collapseend=p=document.createEvent("Event"),p.initEvent("collapseend",!0,!0));var m=document.createElement("style");document.head.appendChild(m),m.sheet&&m.sheet.cssRules&&m.sheet.insertRule&&(f=m.sheet,window.addEventListener("scroll",s,!0),window.addEventListener("orientationchange",s,!0),window.document.addEventListener("visibilitychange",s))}},343:function(e,t,i){"use strict";i.r(t);var n=i(0),s=(i(1),[{title:"Quiz App",image:"./images/rn-mockup",description:"I lovetyping too much that I have built a game to play with",tools:["React","Redux","MongoDB","JWT","Express"],github:"https://github.com/Deelip7/react-node-ecommerce",link:"https://rn-store.herokuapp.com/"},{title:"Typing Test",image:"./images/tmdb-mockup",description:"sdjfiojdsifjdksjfjsdajklj klsadjf",tools:["React","API","SASS"],github:"https://github.com/Deelip7/react-tmdb-app",link:"https://festive-wilson-a51c32.netlify.app/"},{title:"Pixel Drawing",image:"./images/recipeApp-mockup",description:"Browseasdfdsfas dfsdaf asdfsdfrecipes from a variety of sources. Users can save recipes to view them later. API from themealdb.com.",tools:["Javascript","API"],github:"https://github.com/Deelip7/RecipesFinder",link:"https://practical-archimedes-a61091.netlify.app/"}]),o=i(69),r=i.n(o);t.default=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("section",{className:"my-28 px-5",id:"projects",children:[Object(n.jsx)("header",{className:"text-2xl font-bold pt-10",children:Object(n.jsx)("h4",{children:"Projects"})}),Object(n.jsx)("div",{className:"my-7 space-y-24",children:s.map((function(e,t){return Object(n.jsxs)("article",{className:"flex flex-wrap md:justify-between md:items-center",children:[Object(n.jsx)(r.a,{children:Object(n.jsxs)("picture",{className:t%2===0?"w-full md:w-6/12 shadow-lg ":"w-full md:w-6/12 shadow-lg md:order-1",children:[Object(n.jsx)("source",{srcSet:"".concat(e.image,"-1280.webp 1920w,\n                  ").concat(e.image,"-768.webp 768w,\n                  ").concat(e.image,"-320.webp 320w"),sizes:"(min-width: 768px) 50vw, 100vw",type:"image/webp"}),Object(n.jsx)("source",{srcSet:"".concat(e.image,"-768.jpg 768w,"),sizes:"(min-width: 768px) 50vw, 100vw",type:"image/jpg"}),Object(n.jsx)("img",{width:"768px",height:"575px",loading:"lazy",alt:e.title,className:"rounded-lg"})]})}),Object(n.jsx)("div",{className:"flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 ",children:Object(n.jsxs)(r.a,{children:[Object(n.jsx)("h3",{className:"uppercase font-bold text-lg",children:e.title}),Object(n.jsx)("p",{children:e.description}),Object(n.jsx)("div",{className:"flex overflow-auto space-x-3 pb-2",children:e.tools.map((function(e,t){return Object(n.jsx)("span",{className:"border border-gray-500 px-2 py-1 rounded-lg text-sm",children:e},t)}))}),Object(n.jsxs)("div",{className:"w-auto flex space-x-5 relative",children:[Object(n.jsx)("a",{href:e.github,target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"./images/icons/github.svg",alt:"link to github page",width:"24px",height:"24px"})}),Object(n.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:Object(n.jsx)("img",{src:"./images/icons/external-link.svg",alt:"link to live website",width:"24px",height:"24px"})})]})]})})]},t)}))})]}),Object(n.jsx)("div",{className:"mx-5"})]})}},35:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),o.default.Children.count(n)<2?o.default.createElement(r.default,s({},e,{inEffect:t,outEffect:i,children:n})):(n=o.default.Children.map(n,(function(n){return o.default.createElement(r.default,s({},e,{inEffect:t,outEffect:i,children:n}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,n):o.default.createElement("span",null,n))};var o=n(i(1)),r=n(i(36));e.exports=t.default},36:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,s=!1,o=void 0;try{for(var r,a=e[Symbol.iterator]();!(n=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);n=!0);}catch(e){s=!0,o=e}finally{try{!n&&a.return&&a.return()}finally{if(s)throw o}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i(1),c=(n=l)&&n.__esModule?n:{default:n},d=i(24),p=i(31),u=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),h={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:u.isRequired,outEffect:(0,d.oneOfType)([u,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},f={transitionGroup:d.object},v=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,p.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?r({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!p.observerMode&&this.props.collapse&&window.document.dispatchEvent(p.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,s=i.forever,o=i.count,r=i.delay,a=i.duration;if(!s){this.animationEndTimeout=window.setTimeout((function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))}),r+(a+(t?a:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),s=this.isOn?this.getDimensionValue():0,o=void 0,r=void 0;if(t.collapseOnly)o=i.duration/3,r=i.delay;else{var a=n>>2,l=a>>1;o=a,r=i.delay+(this.isOn?0:n-a-l),e.style.animationDuration=n-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:s,transition:"height "+o+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,s=void 0;e.collapseOnly?s={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),s={hasAppeared:!0,hasExited:!1,collapse:void 0,style:r({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(s,e,i):s),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),p.ssr&&(0,p.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&p.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];p.globalHide||(0,p.hideAll)(),this&&this.el&&(e||(e=this.props),p.ssr&&(0,p.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):i||this.inViewport(e)||e.force?this.animate(e):p.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||p.ssr&&!p.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):p.ssr&&(p.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map((function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):c.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=n.duration,a=n.reverse,l=i.length,d=2*o;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),o=d/2);var u=a?l:0;return i.map((function(e){return"object"===(void 0===e?"undefined":s(e))&&e?c.default.cloneElement(e,{style:r({},e.props.style,t.state.style,{animationDuration:Math.round((0,p.cascade)(a?u--:u++,0,l,o,d))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===s(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,s=n.style,o=n.className,a=n.children,l=this.props.disabled?o:(this.props.outEffect?p.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&a&&this.state.style.animationName?(i=this.cascade(a),d=r({},s,{opacity:1})):d=this.props.disabled?s:r({},s,this.state.style);var u=r({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:d},this.props.refProp,this.saveRef)),h=c.default.cloneElement(t,u,e?i||a:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:r({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,p.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),s=Math.min(i,window.innerHeight)*(p.globalHide?e.fraction:0);return n>s-window.innerHeight&&n<i-s}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){p.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!p.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(c.default.Component);v.propTypes=h,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=f,v.displayName="RevealBase",t.default=v,e.exports=t.default},69:function(e,t,i){"use strict";function n(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}function s(e,t){var i=t.left,n=t.right,s=t.up,o=t.down,r=t.top,a=t.bottom,l=t.mirror,c=t.opposite,p=(i?1:0)|(n?2:0)|(r||o?4:0)|(a||s?8:0)|(l?16:0)|(c?32:0)|(e?64:0);if(u.hasOwnProperty(p))return u[p];if(!l!=!(e&&c)){var h=[n,i,a,r,o,s];i=h[0],n=h[1],r=h[2],a=h[3],s=h[4],o=h[5]}var f=i||n,v=r||a||s||o,m=void 0;return f||v?e?m="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(f?(i?"":"-")+"42px":"0")+", "+(v?(o||r?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(f?(n?"":"-")+"2000px":"0")+", "+(v?(s||a?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(v?"center bottom":(i?"left":"right")+" center")+";\n        }":m="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(f?(i?"-":"")+"1000px":"0")+", "+(v?(o||r?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(f?(n?"-":"")+"10px":"0")+", "+(v?(s||a?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":m=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",u[p]=(0,d.animation)(m),u[p]}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.defaults,t=e.children,i=(e.out,e.forever),o=e.timeout,r=e.duration,a=void 0===r?d.defaults.duration:r,l=e.delay,p=void 0===l?d.defaults.delay:l,u=e.count,h=void 0===u?d.defaults.count:u,f=n(e,["children","out","forever","timeout","duration","delay","count"]),v={make:s,duration:void 0===o?a:o,delay:p,forever:i,count:h,style:{animationFillMode:"both"},reverse:f.left};return(0,c.default)(f,v,v,t)}Object.defineProperty(t,"__esModule",{value:!0});var r,a=i(24),l=i(35),c=(r=l)&&r.__esModule?r:{default:r},d=i(31),p={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,delay:a.number,count:a.number,forever:a.bool},u={};o.propTypes=p,t.default=o,e.exports=t.default}}]);
//# sourceMappingURL=7.dc0c62bf.chunk.js.map