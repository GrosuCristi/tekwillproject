document.addEventListener('DOMContentLoaded', () => {
  if (screen.width > 768)
      header.classList.add('shrinked')
})

window.onscroll = function() {animatedLogo()};

const logo = document.querySelector('.logo');
const header = document.querySelector('header');

function animatedLogo() {
  if (window.scrollY <= 20) {
    logo.classList.add('on-top-of-greeting');
    
    if (screen.width > 768)
      header.classList.add('shrinked')
  }
  else {
    logo.classList.remove('on-top-of-greeting');
    if (screen.width > 768)
      header.classList.remove('shrinked');
  }
}