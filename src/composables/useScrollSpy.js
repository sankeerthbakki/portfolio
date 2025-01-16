import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollSpy() {
  const currentSection = ref('home')

  const updateActiveSection = () => {
    const sections = document.querySelectorAll('section[id]')
    const navbarHeight = 80 // Adjust this value based on your navbar height

    let current = ''
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navbarHeight
      if (window.scrollY >= sectionTop - 100) { // Added offset for better detection
        current = section.getAttribute('id')
      }
    })

    currentSection.value = current || 'home'
  }

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection)
    // Initial check
    setTimeout(updateActiveSection, 100) // Small delay to ensure DOM is ready
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  return {
    currentSection
  }
} 