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