const closeBtn = document.getElementById('close-btn')
const sidemenu = document.getElementById('sidemenu')
const openBtn = document.getElementById('open-btn')
const body = document.querySelector('body')

openBtn.addEventListener('click', () => {
  sidemenu.classList.add('open')
  body.classList.add('scroll-lock')
})

closeBtn.addEventListener('click', () => {
  sidemenu.classList.remove('open')
  body.classList.remove('scroll-lock')
})