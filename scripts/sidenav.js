const closeBtn = document.getElementById('close-btn')
const sidemenu = document.getElementById('sidemenu')
const openBtn = document.getElementById('open-btn')
const body = document.querySelector('body')

// Open menu when hamburger-button is clicked
openBtn.addEventListener('click', () => {
  sidemenu.classList.add('open')
  body.classList.add('scroll-lock')
})

// Close menu when close button is clicked from sidenav
closeBtn.addEventListener('click', () => {
  sidemenu.classList.remove('open')
  body.classList.remove('scroll-lock')
})
