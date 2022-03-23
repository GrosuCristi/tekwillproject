// List of all section ids
const sectionIds = ['greeting', 'facilities', 'reviews', 'contacts', 'gallery']

const sections = []
sectionIds.forEach(id => sections.push(document.getElementById(id)))

window.addEventListener('scroll', () => {

  // looping through each section from the id list when user scrolls
  sections.forEach(section => {

    // Checking if section is in prefred range of screen using a custom function
    if (sectionInRange(section)) {
      const attrId = section.getAttribute('id')

      // Add active class to navigation bar showing the user which section the are looking at
      setNavActivity(attrId, "nav-list")
    }
  })
}, false)

// Custom func which returns true if given section is in 30% - 60% vertical screen range, else returns false
function sectionInRange(section) {
  const rangeTop = window.innerHeight * 0.3
  const rangeBottom = window.innerHeight * 0.6
  const border = section.getBoundingClientRect()

  // Top edge of section is in range and occupies more than half of the screen
  if (
    border.top >= rangeTop &&
    border.top <= rangeBottom &&
    border.top <= window.innerHeight / 2
  ) return true

  // Bottom edge of section is in range and occupies more than half of the screen
  else if (
    border.bottom >= rangeTop &&
    border.bottom <= rangeBottom &&
    border.bottom >= window.innerHeight / 2
  ) return true

  // Entire  section is in the middle
  else if (
    border.top < rangeTop &&
    border.bottom > rangeBottom
  ) return true


  // if section is not in range at all
  return false
}

// Sets an active class to a specific navigation link
function setNavActivity(sectionTarget, navListId) {

  // Selects list and remove the current active class
  const ul = document.getElementById(navListId)
  ul.querySelector('.active').classList.remove('active')

  // Adds active class to the correct list elem based on section the user is looking at
  ul.querySelectorAll('li').forEach(li => {
    if (li.dataset.pointsto === sectionTarget) li.classList.add('active')
  })
}

// Custom func which delivers smooth scroll on most browsers
function scrollToSection(destId, sidemenu=false) {
  let delay = 0

  // If user clicked nav-link from sidemenu on mobile, delays the animation by few ms
  // to give time for the menu to close and then scroll
  if (sidemenu) {
    document.getElementById('sidemenu').classList.remove('open')
    document.querySelector('body').classList.remove('scroll-lock')
    delay = 250
  }

  setTimeout(() => {
    let offset = document.getElementById(destId).offsetTop
    offset = window.innerWidth >= 768 ? offset-85 : offset-60

    // zenscroll lib is used to add cross browser compatibility
    zenscroll.toY(offset)
  }, delay)
}