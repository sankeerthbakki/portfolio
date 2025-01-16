<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  // { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-content">
      <RouterLink to="/" class="logo">
        Sankeerth
      </RouterLink>

      <!-- Desktop Menu -->
      <div class="nav-links" :class="{ 'show': isMenuOpen }">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          :class="{ 'active': route.path === item.path }"
          @click="isMenuOpen = false"
        >
          {{ item.name }}
        </RouterLink>
      </div>

      <!-- Mobile Menu Button -->
      <button class="menu-button" @click="toggleMenu" :aria-expanded="isMenuOpen">
        <span class="menu-icon" :class="{ 'open': isMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  background: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.nav-content {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  transition: color var(--transition-speed);
}

.logo:hover {
  color: var(--secondary-color);
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem;
  transition: color var(--transition-speed);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: width var(--transition-speed);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.menu-button {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-icon {
  width: 24px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-icon span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--text-color);
  transition: var(--transition-speed);
}

.menu-icon.open span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.menu-icon.open span:nth-child(2) {
  opacity: 0;
}

.menu-icon.open span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

@media (max-width: 768px) {
  .menu-button {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: var(--header-height);
    left: 0;
    right: 0;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(10px);
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all var(--transition-speed);
  }

  .nav-links.show {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
}
</style>