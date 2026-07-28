export function initScrollAnimations(): void {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    const elements = document.querySelectorAll<HTMLElement>('.fade-up')
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.transitionDelay = `${(i % 4) * 0.08}s`
      observer.observe(elements[i])
    }
  } else {
    const elements = document.querySelectorAll('.fade-up')
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add('visible')
    }
  }
}
