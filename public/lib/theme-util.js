console.log(`toggle theme script loaded on ${window.location.pathname}`);

// Get the theme toggle input
// let themeToggle = document.querySelector(
//   '.theme-switch input[type="checkbox"]',
// );

// Get the current theme from local storage
// const currentTheme = localStorage.getItem("theme");

// If the current local storage item can be found
if (localStorage.getItem("theme")) {
  // Set the body data-theme attribute to match the local storage item
  document.documentElement.setAttribute(
    "data-theme",
    localStorage.getItem("theme"),
  );

  // If the current theme is dark, check the theme toggle
  if (localStorage.getItem("theme") === "dark") {
    document.querySelector('.theme-switch input[type="checkbox"]').checked =
      true;
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
document
  .querySelector('.theme-switch input[type="checkbox"]')
  .addEventListener("change", switchTheme, false);
