const sectionIds = ['greeting', 'facilities', 'reviews', 'contacts']

const sections = []
sectionIds.forEach(id => sections.push(document.getElementById(id)))

window.addEventListener('scroll', () => {
  sections.forEach(section => {
    if (sectionInRange(section)) {
      const attrId = section.getAttribute('id')
      setNavActivity(attrId, "nav-list")
    }
  })
}, false)

function sectionInRange(section) {
  const rangeTop = window.innerHeight * 0.3
  const rangeBottom = window.innerHeight * 0.6
  const border = section.getBoundingClientRect()

  // Marginea de sus elem. se afla in arie si ocupa mai mult decat jumate.
  if (
    border.top >= rangeTop &&
    border.top <= rangeBottom &&
    border.top <= window.innerHeight / 2
  ) return true

  // Marginea de sus elem. se afla in arie si ocupa mai mult decat jumate.
  else if (
    border.bottom >= rangeTop &&
    border.bottom <= rangeBottom &&
    border.bottom >= window.innerHeight / 2
  ) return true

  // Tot Elem se afla in mijloc
  else if (
    border.top < rangeTop &&
    border.bottom > rangeBottom
  ) return true

  return false
}

function setNavActivity(sectionTarget, navListId) {
  const ul = document.getElementById(navListId)
  ul.querySelector('.active').classList.remove('active')

  ul.querySelectorAll('li').forEach(li => {
    if (li.dataset.pointsto === sectionTarget) li.classList.add('active')
  })
}

function scrollToSection(destId, sidemenu=false) {
  if (sidemenu) {
    document.getElementById('sidemenu').classList.remove('open')
    document.querySelector('body').classList.remove('scroll-lock')
  }
  setTimeout(() => {
    if (destId === 'greeting')
      window.scrollTo({ top: 0, behavior: 'smooth' })
    else 
      document.getElementById(destId).scrollIntoView({ behavior: 'smooth', block: 'center'})
  }, 250)
}