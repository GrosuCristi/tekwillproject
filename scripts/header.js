document.addEventListener('DOMContentLoaded', animatedLogo)

const logo = document.querySelector('.svg-logo');
const header = document.querySelector('header');
const langList = document.querySelector('.lang-dropdown-wrapper')

window.addEventListener('scroll', () => {animatedLogo()});
window.addEventListener('resize', () => {animatedLogo()});

// Func. which triggers class based on screen width and scroll
function animatedLogo() {

  // User did not scroll more than 20px
  if (window.scrollY <= 20) {

    // class is added to logo elem which centers on the screen
    logo.classList.add('on-top-of-greeting');
    
    // Add or remove layout complexity based on screen width
    if (screen.width >= 768){
      header.classList.add('shrinked')
      langList.classList.remove('offseted')
      logo.style.transform = 'translate(-50%, calc(-50% + 30vh + 135px)) scale(1)'
    }
    else {
      header.classList.remove('shrinked')
      langList.classList.add('offseted')
      logo.style.transform = 'translate(-50%, calc(-50% + 30vh + 75px)) scale(1)'
    }
  }

  // If user scrolled past 20px
  else {

    // Logo is placed inside header
    logo.classList.remove('on-top-of-greeting');
    logo.style.transform = 'translate(-50%, -50%) scale(' + getLogoScale() + ')'
    
    if (screen.width >= 768) {
      header.classList.remove('shrinked');
      langList.classList.add('offseted')
    }
  }
}

// Calculating transform: scale(alpha); for logo, alpha=? depending on screen width and other parameters
function getLogoScale(targetWidth=210) { return targetWidth / logo.width }
