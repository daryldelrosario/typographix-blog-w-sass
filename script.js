// SKELETON screen ui shown for 3 seconds
setTimeout(() => {
  document.querySelectorAll(".skeleton").forEach(el => el.style.display = "none");
  document.querySelectorAll(".hidden").forEach(el => el.style.display = "block");
}, 3000);

// FUNCTION TO CHECK IF PAGE IS SCROLLED AND ADJUST THE LOGO SIZE 

function checkScroll() {
  const navbar = document.getElementById("navbar");
  const logo = document.getElementById("logo");

  let scrollPosition = window.scrollY;

  // Add / remove "scrolled" class based on scroll position
  if(scrollPosition > 20) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Calculate new font-size based on scroll position 
  let newSize = 2 - (scrollPosition * 0.03); // decrese by 0.03 rem for every 1px scrolled

  // Clamping the font-size between 1.5rem and 3rem 
  newSize = Math.max(1.5, newSize);
  newSize = Math.min(2.2, newSize);

  logo.style.fontSize = newSize + "rem";
}

// EVENT LISTENER FOR SCROLL EVENT 
window.addEventListener("scroll", checkScroll);

// DARK MODE EXERCISE =======
const themeSwitcher = document.getElementById("theme-switcher");

// FUNCTION for UPDATE THEME ICON & TEXT
function updateThemeIcon(isDarkMode) {
  themeSwitcher.children[0].classList.replace(isDarkMode ? 'fa-sun': 'fa-moon', isDarkMode ? 'fa-moon': 'fa-sun');
}

// FUNCTION to Determine if dark mode is preferred
function prefersDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// FUNCTION to Set theme based on the preference 
function setThemeBasedOnPreference() {
  const isDarkMode = prefersDarkMode();
  document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  updateThemeIcon(isDarkMode);
}

// FUNCTION to switch the themes
function switchTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme === 'dark');
}

// ADDEVENT LISTENERS
themeSwitcher.addEventListener("click", switchTheme);

// LOCAL STORAGE EXERCISE 
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  if(savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme === 'dark');
  } else {
    setThemeBasedOnPreference();
  }
}

// LISTEN for system theme changes 
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', setThemeBasedOnPreference);

// INITIALIZE theme when the script loads
initializeTheme();