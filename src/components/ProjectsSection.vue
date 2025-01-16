<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  limit: {
    type: Number,
    default: 3
  }
})

const projects = ref([
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with React and Node.js',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    liveLink: 'https://project1.com',
    githubLink: 'https://github.com/yourusername/project1'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A Vue.js-based task management application with real-time updates',
    image: '/project2.jpg',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveLink: 'https://project2.com',
    githubLink: 'https://github.com/yourusername/project2'
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Real-time analytics dashboard for social media metrics',
    image: '/project3.jpg',
    technologies: ['Vue.js', 'D3.js', 'Node.js', 'Socket.io'],
    liveLink: 'https://project3.com',
    githubLink: 'https://github.com/yourusername/project3'
  }
])
</script>

<template>
  <div class="content-container">
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      <div v-for="project in displayedProjects" 
           :key="project.id" 
           class="project-card">
        <img :src="project.image" :alt="project.title" class="project-image">
        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="tech-stack">
            <span v-for="tech in project.technologies" 
                  :key="tech" 
                  class="tech-tag">
              {{ tech }}
            </span>
          </div>
          <div class="project-links">
            <a :href="project.github" target="_blank" class="btn">GitHub</a>
            <a :href="project.demo" target="_blank" class="btn primary">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
}

.project-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.project-content {
  padding: 1.5rem;
}

.project-content h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.project-content p {
  color: #e2e8f0;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-tag {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  text-align: center;
  flex: 1;
}

.btn:not(.primary) {
  border: 1px solid #3b82f6;
  color: #3b82f6;
}

.btn.primary {
  background: #3b82f6;
  color: white;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}
</style>