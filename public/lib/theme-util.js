// Get the theme toggle input
let themeToggle = document.querySelector(
  '.theme-switch input[type="checkbox"]',
);

// Get the current theme from local storage
const currentTheme = localStorage.getItem("theme");

// Get the system theme
const darkModeMediaQuery = window.matchMedia(
  "(prefers-color-scheme: dark)",
).matches;

// If the current local storage item can be found
if (currentTheme) {
  // Set the body data-theme attribute to match the local storage item
  document.documentElement.setAttribute("data-theme", currentTheme);

  // If the current theme is dark, check the theme toggle
  if (localStorage.getItem("theme") === "dark") {
    themeToggle.checked = true;
  }
} else {
  // If the current local storage item can't be found, check the theme toggle if the system theme is dark
  if (darkModeMediaQuery) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggle.checked = true;
  }
}

// Function that will switch the theme based on the if the theme toggle is checked or not
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

// Add an event listener to the theme toggle, which will switch the theme
if (themeToggle) themeToggle.addEventListener("change", switchTheme, false);
