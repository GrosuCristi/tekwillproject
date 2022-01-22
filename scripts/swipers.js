import Swiper from 'https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js'

const swiper1 = new Swiper('.swiper-1', {
  loop: true,
  effect: 'fade',
  
  autoplay: {
    delay: 5000,
  },

  fadeEffect: {
    crossFade: true
  }
})