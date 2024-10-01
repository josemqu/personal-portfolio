import{r as p}from"./index.DhYZZe0J.js";var v={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c=p,f=Symbol.for("react.element"),h=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function x(o,e,s){var r,n={},i=null,u=null;s!==void 0&&(i=""+s),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(u=e.ref);for(r in e)a.call(e,r)&&!m.hasOwnProperty(r)&&(n[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:f,type:o,key:i,ref:u,props:n,_owner:d.current}}l.Fragment=h;l.jsx=x;l.jsxs=x;v.exports=l;var t=v.exports;const _=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",children:t.jsx("path",{d:"M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"})}),w=()=>t.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 -960 960 960",width:"24px",fill:"currentColor",children:t.jsx("path",{d:"M520-200v-560h240v560H520Zm-320 0v-560h240v560H200Zm400-80h80v-400h-80v400Zm-320 0h80v-400h-80v400Zm0-400v400-400Zm320 0v400-400Z"})});function j(){const[o,e]=p.useState(!1),s=p.useRef(),r=()=>{o?s.current.pause():(s.current.src="/sounds/sound.mp3",s.current.volume=.5,s.current.play()),e(!o)};return t.jsxs("div",{children:[t.jsx("div",{onClick:r,children:o?t.jsx(w,{}):t.jsx(_,{})}),t.jsx("audio",{ref:s})]})}export{j as Player};
