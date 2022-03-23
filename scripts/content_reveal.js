window.addEventListener('scroll', () => {

  // Select all elems which need to be revealed on scroll
  const revs = document.querySelectorAll('.reveal')

  // Loop through each
  revs.forEach((rev) => {
    const wHeight = window.innerHeight
    const topPos = rev.getBoundingClientRect().top // Pos of element from top of the page
    const revealPoint = 300 // PX

    // Element is in view 300px from bottom edge of the screen
    if (topPos < wHeight - revealPoint) {
      rev.classList.add('reveal-active')
    }

    // Element is not visible
    else if (topPos >= wHeight) {
      rev.classList.remove('reveal-active')
    }
  })
})