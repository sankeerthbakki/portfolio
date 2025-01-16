<template>
  <div class="content-container">
    <h2 class="section-title">Skills</h2>
    <!-- Square Icons with Borders Layout -->
    <div class="skills-square-icons">
      <div class="skills-items">
        <div v-for="skill in allSkills" :key="skill.name" class="square-box">
          <div class="square-item">
          <img :src="skill.icon" alt="{{ skill.name }}" class="square-icon" />
           </div>
        <div class="square-name">
        {{ skill.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
const layout = 'square-icons'; // Set to 'square-icons' for Square Icons with Borders design

const allSkills = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'},
  { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'},
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg'},
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'},
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'},
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Vuetify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuetify/vuetify-original.svg'},
  { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg'},
  // { name: 'Vuex', icon: '/icons/vuex.png' },
  // { name: 'Vue Router', icon: '/icons/vuerouter.png' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'},
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'},
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg'},
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg'},
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg'}
];
</script>

<style scoped>
.section-title {
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
}
/* Square Icons with Borders Layout */
.skills-square-icons {
  display: flex;
  justify-content: center;
}
.skills-items {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
.square-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: 1px solid var(--secondary-color);
  /* padding: 20px; */
  border-radius: 16px;
  width: 120px;
  height: 120px;
  /* background: #fff; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
}
.square-box:hover {
  transform: scale(1.1);
  /* box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  /* border: 1px solid var(--secondary-color); */
}
.square-icon {
  width: 80px;
  height: 80px;
  margin-bottom: 0;
  display: block; /* Ensures no extra spacing for inline alignment */
}
.square-name {
  font-size: 16px;
  /* font-weight: bold; */
  margin-top: 10px;
  text-align: center;
  width: 120px;
  /* color: #333; */
}
  @media (max-width: 1024px) {
  .square-item {
    width: 100px;
    height: 100px;
  }
  .square-icon {
    width: 70px;
    height: 70px;
  }
  .square-name {
    font-size: 14px;
    width: 100px;
  }
}

@media (max-width: 768px) {
  .square-item {
    width: 90px;
    height: 90px;
  }
  .square-icon {
    width: 60px;
    height: 60px;
  }
  .square-name {
    font-size: 12px;
    width: 90px;
  }
}

@media (max-width: 480px) {
  .square-item {
    width: 80px;
    height: 80px;
  }
  .square-icon {
    width: 50px;
    height: 50px;
  }
  .square-name {
    font-size: 10px;
    width: 80px;
  }
}
</style>
