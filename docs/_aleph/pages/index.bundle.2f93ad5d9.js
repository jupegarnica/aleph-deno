(()=>{function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=[],n=!0,r=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return a}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var t=__ALEPH.pack["https://deno.land/x/aleph@v0.3.0-alpha.21/framework/core/style.ts"].applyCSS;__ALEPH.pack["/pages/index.css"]={default:function(){return t("/pages/index.css","main{background:var(--background)}section.index{display:flex}.background{background:linear-gradient(135deg,#000 30%,#2f1350 100%);position:absolute;z-index:0;width:100vw;height:100vh;top:0;left:0;opacity:0;pointer-events:none;transition:all 2s ease}.typist{display:flex;flex-direction:column;align-items:flex-start;z-index:1;position:relative;min-width:80vw;padding:2em}.typist div{color:var(--text-color);transition:all .6s ease-in-out}.typist a{font-weight:800}.index a:hover{color:#000;cursor:url(/call.svg),auto}.index .hand:hover{cursor:url(/hand.svg),auto}.index .github:hover{cursor:url(/lightbulb.svg),auto}.hand{fill:indigo;fill:var(--text-color)}.animated .typist:hover+.background{opacity:1;transition:all .6s ease}.animated .typist div:hover{--text-color:#ddd;--link-active:#fc0;--background:linear-gradient(135deg, #000 30%, #2f1350 100%)}.animated .typist:hover :is(a,.hand){font-weight:700;fill:var(--link-active);transition:all .6s ease}")}};var a=__ALEPH.pack["https://esm.sh/react@17.0.1"].default;function n(){return a.createElement("svg",{className:"hand",xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"0.8em",viewBox:"0 0 24 24",width:"0.8em",fill:"#000000"},a.createElement("g",null,a.createElement("rect",{fill:"none",height:"24",width:"24"})),a.createElement("g",null,a.createElement("g",null,a.createElement("g",null,a.createElement("path",{d:"M23,5.5V20c0,2.2-1.8,4-4,4h-7.3c-1.08,0-2.1-0.43-2.85-1.19L1,14.83c0,0,1.26-1.23,1.3-1.25 c0.22-0.19,0.49-0.29,0.79-0.29c0.22,0,0.42,0.06,0.6,0.16C3.73,13.46,8,15.91,8,15.91V4c0-0.83,0.67-1.5,1.5-1.5S11,3.17,11,4v7 h1V1.5C12,0.67,12.67,0,13.5,0S15,0.67,15,1.5V11h1V2.5C16,1.67,16.67,1,17.5,1S19,1.67,19,2.5V11h1V5.5C20,4.67,20.67,4,21.5,4 S23,4.67,23,5.5z"})))))}var r,i,l,o,c=(r=function(e,t,a){var n=a.line,r=(a.lineIdx,a.charIdx),i=a.defDelayGenerator;return r===n.length-1?500:i()},i=__ALEPH.pack["https://esm.sh/react@17.0.1"].default,l=__ALEPH.pack["https://esm.sh/react@17.0.1"].useState,o=__ALEPH.pack["https://esm.sh/react-typist"].default,{default:function(){var t=e(l(!1),2),a=t[0],c=t[1];return i.createElement("section",{className:"page index "+(a?"animated":"")},i.createElement(o,{delayGenerator:r,className:"typist",cursor:{show:!1},onTypingDone:function(){return c(!0)},avgTypingDelay:60},i.createElement("div",null,"Hi ",i.createElement(n,null)),i.createElement("div",null,"I am a code developer,"),i.createElement("div",null,"a web artist in love with minimalism."),i.createElement("div",null,"My thoughts are on"," ",i.createElement("a",{className:"twitter",href:"https://twitter.com/jupegarnica"},"twitter")),i.createElement("div",null,"And some of my work at"," ",i.createElement("a",{className:"github",href:"https://github.com/jupegarnica"},"github"))),i.createElement("div",{className:"background"}))}});__ALEPH.pack["/pages/index.jsx"]=c})();