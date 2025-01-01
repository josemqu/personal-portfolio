import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as s}from"./index.DhYZZe0J.js";const a=()=>{const[r,o]=s.useState("light");s.useEffect(()=>{const t=localStorage.getItem("theme");t?(o(t),document.documentElement.setAttribute("data-theme",t)):window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(o("dark"),document.documentElement.setAttribute("data-theme","dark"))},[]);const l=()=>{const t=r==="light"?"dark":"light";o(t),document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)};return e.jsxs("div",{className:"theme-switch-wrapper no-print",children:[e.jsxs("label",{className:"theme-switch",htmlFor:"checkbox",children:[e.jsx("input",{type:"checkbox",id:"checkbox",checked:r==="dark",onChange:l}),e.jsxs("div",{className:"slider",children:[e.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"#FCD53F",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-sun",children:[e.jsx("circle",{cx:"12",cy:"12",r:"5"}),e.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),e.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),e.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),e.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),e.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),e.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),e.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),e.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"#FCD53F",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-moon",children:e.jsx("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"})})]})]}),e.jsx("style",{jsx:!0,children:`
        :root {
          --color-bg: #f0f0f0;
          --color-bg2: #fff;
          --color-text: #777;
          --bold-text: #222;
          --nav-text: #000000;
          --code: #f2f2f2;
          --block-quote-border: #999;
          --hover-border-color: #727272;
          --block-quote-text: #222;
          --slider-bg: #dddddd;
          --pills-bg: #ddd;
          --pills-text: #222;
          --slider-bg-before: #fff;
          --slider-input-bg: #58b4ff;
          --color-shadow: #555;
          --color-box-shadow: rgba(100, 100, 100, 0.1);
          --color-header-header: #f0f0f0;
        }

        [data-theme="light"] {
          --color-bg: #f0f0f0;
          --color-bg2: #fff;
          --color-text: #777;
          --bold-text: #222;
          --nav-text: #000000;
          --code: #f2f2f2;
          --block-quote-border: #999;
          --hover-border-color: #727272;
          --block-quote-text: #222;
          --slider-bg: #ddd;
          --pills-bg: #ddd;
          --pills-text: #222;
          --slider-bg-before: #fff;
          --slider-input-bg: #58b4ff;
          --color-shadow: #555;
          --color-box-shadow: rgba(100, 100, 100, 0.1);
          --color-header-header: #fff;
        }

        [data-theme="dark"] {
          --color-bg: #141924;
          --color-bg2: #1d2433;
          --color-text: #888;
          --bold-text: #eeeeee;
          --nav-text: #dddddd;
          --code: #f2f2f2;
          --block-quote-border: #58b4ff;
          --hover-border-color: #80d0ff;
          --block-quote-text: #dddddd;
          --slider-input-bg: #58b4ff;
          --slider-bg: #333;
          --pills-bg: #58b4ff;
          --pills-text: #222;
          --color-shadow: #eee;
          --color-box-shadow: rgba(0, 0, 0, 0.25);
          --color-header-header: #1d2433;
        }

        .theme-switch-wrapper {
          display: flex;
          justify-content: flex-start;
          align-items: flex-start;
          margin-left: 0.5rem;
        }

        .theme-switch {
          display: inline-block;
          height: 28px;
          position: relative;
          width: 48px;
        }

        .theme-switch input {
          display: none;
        }

        .slider {
          background-color: var(--slider-bg);
          bottom: 0;
          cursor: pointer;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          transition: 0.4s;
          border-radius: 28px;
        }

        .slider:before {
          background-color: var(--slider-bg-before);
          bottom: 4px;
          content: "";
          height: 20px;
          left: 4px;
          position: absolute;
          transition: 0.4s;
          width: 20px;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: var(--pills-bg);
        }

        input:checked + .slider:before {
          transform: translateX(20px);
        }

        .slider svg {
          color: #222;
          position: absolute;
          transition:
            opacity 0.2s ease 0s,
            transform 0.35s ease 0s;
          pointer-events: none;
        }

        .feather-moon {
          opacity: 0;
          left: 6px;
          bottom: 6px;
          transform: translateX(4px);
        }

        .feather-sun {
          opacity: 1;
          right: 6px;
          bottom: 6px;
          transform: translateX(0px);
        }

        input:checked + .slider .feather-moon {
          opacity: 1;
          transform: translateX(0);
        }

        input:checked + .slider .feather-sun {
          opacity: 0;
          transform: translateX(-4px);
        }
      `})]})};export{a as ThemeSwitch};
