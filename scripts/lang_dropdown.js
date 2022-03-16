const btn = document.querySelector('.lang-btn')
const drop = document.querySelector('.lang-dropdown')
let isOpen = false

btn.addEventListener('click', () => {
  if (isOpen) {
    drop.classList.remove('open')
  }
  else {
    drop.classList.add('open')
  }
  isOpen = !isOpen
}, false)

document.addEventListener('click', (e) => {
  if (e.target != btn) {
    drop.classList.remove('open')
    isOpen = false
  }
})