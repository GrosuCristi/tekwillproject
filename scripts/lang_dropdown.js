const btn = document.querySelector('.lang-btn')
const drop = document.querySelector('.lang-dropdown')
let isOpen = false

// When language button is clicked open or close the language menu
btn.addEventListener('click', () => {
  if (isOpen) {
    drop.classList.remove('open')
  }
  else {
    drop.classList.add('open')
  }
  isOpen = !isOpen
}, false)

// Close the menu if user clicked away
document.addEventListener('click', (e) => {
  if (e.target != btn) {
    drop.classList.remove('open')
    isOpen = false
  }
})