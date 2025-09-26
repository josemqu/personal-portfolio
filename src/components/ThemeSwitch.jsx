import { useState, useEffect } from "react";

export const ThemeSwitch = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="theme-switch-wrapper no-print">
      <label className="theme-switch" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <div className="slider">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#FCD53F"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-sun"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="#FCD53F"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-moon"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </label>
      <style>{`
        :root {
          --color-bg: #f0f0f0;
          --color-bg2: #fff;
          --color-text: #777;
          --bold-text: #222;
          --nav-text: #000000;
          --code: #f2f2f2;
          --block-quote-border: #999;
          --block-quote-border-small: #ddd;
          --hover-border-color: #727272;
          --block-quote-text: #222;
          --slider-bg: #dddddd;
          --pills-bg: #ddd;
          --pills-text: #222;
          --slider-bg-before: #fff;
          --slider-input-bg: #58b4ff;
          --running-bg: #090;
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
          --block-quote-border-small: #ddd;
          --hover-border-color: #727272;
          --block-quote-text: #222;
          --slider-bg: #ddd;
          --pills-bg: #ddd;
          --pills-text: #222;
          --slider-bg-before: #fff;
          --slider-input-bg: #58b4ff;
          --running-bg: #090;
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
          --block-quote-border-small: #888;
          --hover-border-color: #80d0ff;
          --block-quote-text: #dddddd;
          --slider-input-bg: #58b4ff;
          --running-bg: #090;
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
      `}</style>
    </div>
  );
};
