(self.webpackChunkdebug=self.webpackChunkdebug||[]).push([[58],{8058:(e,t,n)=>{"use strict";n.r(t),n.d(t,{Sidebar:()=>b});var a=n(3058),r=n(3504),c=n(8299),l=n.n(c),i=n(9085),s=n(2242),o="https://github.com/hiroppy/fusuma.git",u="https://hiroppy.github.io/fusuma/debug",d=["twitter"],m="debug",h=function(e){return"".concat(e).padStart(2,"0")},b=(0,a.memo)((function(e){var t=e.isOpen,n=e.onStateChange,c=e.goTo,b=e.currentIndex,g=e.runPresentationMode,f=e.contents;return a.createElement(r.slide,{isOpen:t,disableAutoFocus:!0,onStateChange:n,outerContainerId:"root",pageWrapId:"webslides"},a.createElement("div",{className:"sidebar-social"},Array.isArray(d)&&d.map((function(e){return"twitter"===e?a.createElement("a",{key:"twitter",rel:"noopener noreferrer",target:"_blank",href:"https://twitter.com/intent/tweet?text=".concat(m," ").concat(u),"aria-label":"".concat(m," ").concat(u)},a.createElement(i.fWC,null)):"hatena"===e?a.createElement("a",{key:"hatena",href:"http://b.hatena.ne.jp/entry/".concat(u),className:"fa fa-hatena"}):void 0}))),a.createElement("div",{className:"sidebar-control"},window.slide&&a.createElement(a.Fragment,null,a.createElement(s.b2E,{onClick:function(){return c(0)},className:"sidebar-cursor"}),a.createElement("span",null,"".concat(h(b+1)," / ").concat(h(window.slide.slides.length))),a.createElement(s.cHm,{onClick:function(){return c(window.slide.slides.length-1)},className:"sidebar-cursor"}))),a.createElement("div",{className:"sidebar-tools"},a.createElement(s.Nms,{style:{width:26,height:26},onClick:function(){l().isEnabled&&l().toggle()},className:"sidebar-cursor"}),a.createElement(s.kxx,{onClick:function(){return g()},style:{width:19,height:19,marginTop:1},className:"sidebar-cursor"}),a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer","aria-label":"github"},a.createElement(i.hJX,{style:{width:20,height:20,marginTop:3,color:"#f5f5f5"}}))),0!==f.length&&a.createElement("ul",{className:"sidebar-contents"},f.map((function(e){return a.createElement("li",{key:e.title},a.createElement("a",{href:"#slide=".concat(e.index)},e.title))}))))}))}}]);