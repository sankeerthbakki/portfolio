<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="app-container">
    <!-- Animated Grid Background -->
    <div class="grid-background">
      <div class="grid"></div>
      <div class="grid-overlay"></div>
    </div>

    <!-- Main Content -->
    <header>
      <NavBar />
    </header>

    <main>
      <div class="main-content">
        <RouterView />
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<style>
@import './assets/styles/variables.css';
@import './assets/styles/animations.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  color: var(--text-color);
  background: linear-gradient(135deg, var(--background-start), var(--background-end));
  min-height: 100vh;
}

.app-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Grid Background Animation */
.grid-background {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  perspective: 1000px;
}

.grid {
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px);
  background-size: 40px 40px;
  transform-origin: center;
  animation: gridRotate 20s linear infinite;
}

.grid-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at center,
    rgba(15, 23, 42, 0.3) 0%,
    rgba(15, 23, 42, 0.8) 100%
  );
}

/* Main Content Layout */
main {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 80px;
}

.main-content {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
}

@keyframes gridRotate {
  0% {
    transform: rotateX(45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(45deg) rotateZ(360deg);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-content {
    padding: 0 1rem;
  }
  
  .grid {
    background-size: 20px 20px;
  }
}

/* ::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(15, 23, 42, 0.3);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  border-radius: 3px;
} */
</style>