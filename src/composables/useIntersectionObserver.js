import { onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(callback, options = {}) {
  let observer = null
  
  onMounted(() => {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(callback)
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.rootMargin || '0px'
    })

    const targets = document.querySelectorAll(options.target || '.animate-on-scroll')
    targets.forEach(target => observer.observe(target))
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return observer
} 