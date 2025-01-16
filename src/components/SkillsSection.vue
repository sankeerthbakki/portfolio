<template>
    <section class="skills">
      <h2>My Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Frontend</h3>
          <ul>
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>Vue.js</li>
            <li>React</li>
            <li>Responsive Design</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Python</li>
            <li>Express</li>
            <li>RESTful APIs</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Database</h3>
          <ul>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Redis</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Tools & Others</h3>
          <ul>
            <li>Git & GitHub</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>CI/CD</li>
            <li>Agile/Scrum</li>
          </ul>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .skills {
    padding: 4rem 0;
    background-color: #f8fafc;
  }
  
  .skills h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    color: var(--text-color);
  }
  
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }
  
  .skill-category {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .skill-category h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  .skill-category ul {
    list-style: none;
    padding: 0;
  }
  
  .skill-category li {
    padding: 0.5rem 0;
    color: var(--text-color);
  }
  
  .skill-category li::before {
    content: "•";
    color: var(--primary-color);
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  </style>