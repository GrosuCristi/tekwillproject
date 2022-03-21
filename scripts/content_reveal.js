window.addEventListener('scroll', () => {
  const revs = document.querySelectorAll('.reveal')

  revs.forEach((rev) => {
    const wHeight = window.innerHeight
    const topPos = rev.getBoundingClientRect().top
    const revealPoint = 300 // PX

    if (topPos < wHeight - revealPoint) {
      rev.classList.add('reveal-active')
    }
    else if (topPos >= wHeight) {
      rev.classList.remove('reveal-active')
    }
  })
})