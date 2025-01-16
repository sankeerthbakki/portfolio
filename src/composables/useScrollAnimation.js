import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  let observer = null

  const handleIntersect = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
      }
    })
  }

  onMounted(() => {
    observer = new IntersectionObserver(handleIntersect, observerOptions)
    
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in'
    )
    
    animatedElements.forEach(el => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })
} 