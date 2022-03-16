document.addEventListener('DOMContentLoaded', animatedLogo)

const logo = document.querySelector('.svg-logo');
const header = document.querySelector('header');
const langList = document.querySelector('.lang-dropdown-wrapper')

window.addEventListener('scroll', () => {animatedLogo()});
window.addEventListener('resize', () => {animatedLogo()});


function animatedLogo() {
  if (window.scrollY <= 20) {
    logo.classList.add('on-top-of-greeting');
    
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
  else {
    logo.classList.remove('on-top-of-greeting');
    logo.style.transform = 'translate(-50%, -50%) scale(' + getLogoScale() + ')'
    
    if (screen.width >= 768) {
      header.classList.remove('shrinked');
      langList.classList.add('offseted')
    }
  }
}

// Calcularea transform: scale(alpha); pentru logo, alpha=? in dependenta de marimea ecranului si alte conditii

function getLogoScale(targetWidth=210) { return targetWidth / logo.width }
