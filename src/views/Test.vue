<template>
    <div class="skills-container">
      <h1 class="section-title">Skills</h1>
      <div class="skills-list">
        <div class="skill-item" v-for="skill in skills" :key="skill.name">
          <span class="skill-name">{{ skill.name }}</span>
          <div class="skill-bar">
            <div class="skill-fill" :style="{ width: skill.level + '%' }"></div>
          </div>
          <span class="skill-level">{{ skill.level }}%</span>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .skills-container {
    text-align: left;
  }
  
  .skills-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  
  .skill-item {
    display: flex;
    align-items: center;
  }
  
  .skill-name {
    flex: 1;
  }
  
  .skill-bar {
    flex: 2;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    height: 10px;
    margin: 0 1rem;
  }
  
  .skill-fill {
    background: var(--primary-color);
    height: 100%;
    border-radius: 4px;
  }
  </style>