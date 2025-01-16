import { nextTick } from 'vue'
import { useRouter } from 'vue-router'

export function useScroll() {
  const router = useRouter()

  const scrollToSection = async (sectionId) => {
    // If we're not on the home page, first navigate to home
    if (router.currentRoute.value.path !== '/') {
      await router.push('/')
    }
    
    // Wait for DOM update
    await nextTick()
    
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 80 // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return {
    scrollToSection
  }
} 