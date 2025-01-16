  <script setup>
import { onMounted } from 'vue'

const currentYear = new Date().getFullYear()

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/sankeerthbakki',
    icon: 'fa-brands fa-github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/sankeerth-bakki',
    icon: 'fa-brands fa-linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'fa-brands fa-twitter'
  }
]

const quickLinks = [
  { name: 'Home', path: '/' },
  // { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience'},
  { name: 'Skills', path: '/skills'},
  // { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

onMounted(() => {
  // Add animation classes after mount
  const sections = document.querySelectorAll('.footer-section')
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add('animate-in')
    }, index * 200) // Stagger the animations
  })
})
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-section fade-up">
        <h3>About Me</h3>
        <p>
          Full Stack Developer passionate about creating innovative web solutions
          and sharing knowledge with the developer community.
        </p>
      </div>

      <div class="footer-section fade-up">
        <h3>Quick Links</h3>
        <ul class="quick-links">
          <li v-for="(link, index) in quickLinks" 
              :key="link.path"
              :style="{ animationDelay: `${index * 100}ms` }"
              class="fade-right">
            <RouterLink :to="link.path">
              {{ link.name }}
              <font-awesome-icon icon="arrow-right" class="link-arrow" />
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="footer-section fade-up">
        <h3>Connect</h3>
        <div class="social-links">
          <a v-for="social in socialLinks"
             :key="social.name"
             :href="social.url"
             target="_blank"
             rel="noopener noreferrer"
             class="social-link bounce-hover">
            <font-awesome-icon :icon="social.icon" class="social-icon" />
            <span class="social-name">{{ social.name }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom fade-up">
      <p>&copy; {{ currentYear }} Sankeerth Bakki. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(10px);
  color: white;
  padding: 4rem 0 0;
  margin-top: 4rem;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer-section h3 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
}

.footer-section h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -0.5rem;
  width: 50px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-section p {
  line-height: 1.6;
  color: #e2e8f0;
}

.quick-links {
  list-style: none;
  padding: 0;
}

.quick-links li {
  margin-bottom: 0.5rem;
}

.quick-links a {
  color: #e2e8f0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.quick-links a:hover {
  color: var(--primary-color);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  color: #e2e8f0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--primary-color);
}

.footer-bottom {
  margin-top: 3rem;
  padding: 1.5rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  color: #e2e8f0;
  font-size: 0.9rem;
}

/* Keep all your existing animations */
.fade-up {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.6s ease forwards;
}

.fade-right {
  opacity: 0;
  transform: translateX(-20px);
  animation: fadeRight 0.6s ease forwards;
}

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Keep all your existing hover effects */
.bounce-hover:hover {
  transform: translateY(-3px);
}

.bounce-hover:hover .social-icon {
  transform: scale(1.1);
}

.link-arrow {
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s ease;
  margin-left: 5px;
}

.quick-links a:hover .link-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Keep the footer section animation */
.footer-section {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.footer-section.animate-in {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-section h3::after {
    left: 50%;
    transform: translateX(-50%);
  }

  .social-links {
    justify-content: center;
  }
}
</style>