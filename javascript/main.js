const initScroll = () => {
  const scroll = document.querySelector('.nav-scroll')
  window.addEventListener('scroll', (e) => {
    height = (window.scrollY / (document.body.offsetHeight - window.innerHeight)) * 100
    scroll.style.height = height + '%'
  })
}

const initSideNav = () => {
  const sideNav = document.querySelector('.side-nav')
  window.addEventListener('scroll', (e) => {
    if (window.scrollY > (window.innerHeight - (window.innerHeight))) {
      sideNav.style.transform = "translateX(0%)"
    } else {
      sideNav.style.transform = "translateX(-100%)"
    }
  })
}

initSideNav();
initScroll();
