document.addEventListener('DOMContentLoaded', animatedLogo)

const logo = document.querySelector('.logo');
const header = document.querySelector('header');
window.addEventListener('scroll', () => {animatedLogo()});

window.addEventListener('resize', () => {animatedLogo()});


function animatedLogo() {
  if (window.scrollY <= 20) {
    logo.classList.add('on-top-of-greeting');
    
    if (screen.width > 768)
      header.classList.add('shrinked');
    else 
      header.classList.remove('shrinked');
  }
  else {
    logo.classList.remove('on-top-of-greeting');
    if (screen.width > 768)
      header.classList.remove('shrinked');
  }
}