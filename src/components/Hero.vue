<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateToProjects = () => {
  router.push('/projects')
}

const navigateToContact = () => {
  router.push('/contact')
}
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="text-content" data-aos="fade-up">
        <h1 class="title">
          Hi, I'm <span class="highlight">Sankeerth Bakki</span>
        </h1>
        <h2 class="subtitle">Full Stack Developer</h2>
        <p class="description">
          I build modern web applications with passion and precision
        </p>
        
        <div class="cta-buttons">
          <button @click="navigateToProjects" class="btn primary">
            View My Work
            <span class="btn-shine"></span>
          </button>
          <button @click="navigateToContact" class="btn secondary">
            Contact Me
            <span class="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - var(--header-height));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.hero-content {
  max-width: 800px;
  text-align: center;
}

.text-content {
  animation: fadeIn 1s ease-out;
}

.title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-color);
}

.highlight {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
}

.subtitle {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: slideUp 0.5s ease-out forwards;
  animation-delay: 0.3s;
}

.description {
  font-size: 1.2rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  opacity: 0;
  animation: slideUp 0.5s ease-out forwards;
  animation-delay: 0.6s;
}

.cta-buttons {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  opacity: 0;
  animation: slideUp 0.5s ease-out forwards;
  animation-delay: 0.9s;
}

.btn {
  padding: 0.8rem 2rem;
  border-radius: var(--border-radius-md);
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-speed);
  position: relative;
  overflow: hidden;
  border: none;
}

.btn.primary {
  background: var(--primary-color);
  color: white;
}

.btn.secondary {
  background: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.btn:hover {
  transform: translateY(-2px);
}

.btn.primary:hover {
  background: var(--secondary-color);
}

.btn.secondary:hover {
  background: rgba(59, 130, 246, 0.1);
}

.btn-shine {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transform: rotate(45deg);
  transition: 0.5s;
}

.btn.primary:hover .btn-shine {
  left: 100%;
}

.arrow {
  display: inline-block;
  transition: transform var(--transition-speed);
}

.btn.secondary:hover .arrow {
  transform: translateX(5px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 1rem;
  }

  .title {
    font-size: 2.5rem;
  }

  .subtitle {
    font-size: 1.5rem;
  }

  .description {
    font-size: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }
}
</style>