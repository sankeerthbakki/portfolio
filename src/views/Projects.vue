<template>
  <div class="content-container">
    <h2 class="section-title">Projects</h2>
    <div class="projects-grid">
      <div v-for="project in projects" 
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
            <!-- <a :href="project.demo" target="_blank" class="btn primary">Live Demo</a> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Sample projects data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: 'Inventory Management System',
    description: 'Developed a robust inventory management system with Java and Spring for real-time inventory tracking and reporting.',
    image: '/project1.jpg', // Add your project image
    technologies: ['Java', 'Spring Boot', 'Spring Data JPA', 'Vue.js', 'PostgresSQL'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com'
  },
  {
    id: 2,
    title: 'Personal Finance Management Tool',
    description: 'Built a real-time finance management tool, allowing users to monitor bank and credit card transactions.',
    image: '/project2.jpg', // Add your project image
    technologies: ['Vue.js', 'Node.js', 'Express', 'Supabase', 'Plaid API'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com'
  },
  // Add more projects as needed
]
</script>

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

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>