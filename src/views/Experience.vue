<script setup>
import { ref } from 'vue'

const activeTab = ref('work')

const tabs = [
  { id: 'work', label: 'Work Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' }
]

const workExperience = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'Saayam for All',
    period: 'November 2024 - Present',
    location: 'California, United States',
    description: [
      "Designed and implemented scalable microservices using Java and Spring Boot, enhancing functionalities for Volunteer Management, and Data Analytics within the Saayam platform",
    "Leveraged AWS services, including Lambda for serverless execution, Cognito for authentication, API Gateway for API management, RDS for databases, and CloudWatch for monitoring, to deploy and maintain scalable backend systems"
  ],
  technologies: ['Java', 'Spring Boot', 'AWS']
  },
  {
    id: 2,
    role: 'Software Development Engineer',
    company: 'Modak Analytics',
    period: 'July 2022 - March 2022',
    location: 'Hyderabad, India',
    description: [
    "Spearheaded the UI development for Modern Data Management Platform Portal using Vue.js, enhancing user experience and interface responsiveness.",
 "Automated the integration testing of the Modak Nabu UI’s Data Connections module using the Cucumber and Puppeteer frameworks, reducing error rates by 25%.",
 "Developed over 30 reusable components, ensuring consistency and efficiency across the platform.",
 "Achieved 100% cross-browser compatibility, ensuring consistent performance and appearance across all major browsers.",
 "Utilized Git for version control, maintaining a clean and organized codebase to facilitate seamless team collaboration.",
 "Played a pivotal role in supporting a team of 10 individuals who were working on developing the UI.",
 "Produced in-depth documentation for UI components, coding standards, and best practices, streamlining new teammember onboarding and ensuring consistent practices.",
 "Mentored 3 new developers in the team by transferring knowledge about the overall project structure.",
 "Integrated numerous REST APIs, facilitating seamless data exchange and system integration."

    ],
    technologies: ['Vue.js', 'Node.js','HTML', 'CSS',
     'Cucumber', 'Puppeteer', 'AWS']
  },
  {
    id: 3,
    role: 'Graduate Assistant',
    company: 'University of Alabama in Huntsville',
    period: 'August 2022 - May 2024',
    location: 'Huntsville, Alabama, USA',
    description: [
    "Played a central role in creating responsive user interfaces using React.js for the Student Management Tool, increasing userengagement and enhancing overall user experience.",
    "Streamlined development processes by creating reusable components and optimizing state management with React, reducing overall development time by 20%.",
    "Developed and implemented RESTful APIs using Java and Spring, enhancing the functionality and scalability.",
    "Optimized database queries and ensured data integrity using PostgreSQL, ensuring reliable performance"
  ],
  technologies: ['React.js', 'Node.js','HTML', 'CSS',
     'Java', 'Spring', 'PostgreSQL']
  }
  // Add more work experiences
]

const education = [
  {
    id: 1,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Vardhaman College of Engineering',
    period: '2016 - 2020',
    location: 'Hyderabad, India',
    achievements: [
      'Graduated with Bachelor\'s degree in Computer Science',
      'Led the University Programming Club',
      'Acquired foundational skills in various computer science domains'
    ]
  },
  {
    id: 2,
    degree: 'Master of Science in Computer Science',
    institution: 'University of Alabama in Huntsville',
    period: '2022 - 2024',
    location: 'Huntsville, Alabama, USA',
    achievements: [
        'Graduated with Master\'s degree in Computer Science',
      'Acquired advanced skills in computer science and engineering'
    ]
  }
  // Add more education entries
]

const certifications = [
  {
    id: 1,
    name: 'AWS Certified Developer',
    issuer: 'Amazon Web Services',
    date: 'August 2024',
    credentialId: 'AWS-123456',
    url: 'https://www.credly.com/badges/8c19b05e-bae1-4e69-82ec-ed7250266523/public_url',
    badgeImage: 'public/images/aws_badge.png'
  },
  // Add more certifications
]
</script>

<template>
  <div class="content-container">
    <h1 class="section-title">Experience</h1>
    
    <!-- Tabs -->
    <div class="tabs">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }]"
      >
        {{ tab.label }}
      </button>
    </div>

    <!-- Work Experience -->
    <div v-if="activeTab === 'work'" class="tab-content">
      <div 
        v-for="job in workExperience" 
        :key="job.id"
        class="experience-card"
        data-aos="fade-up"
      >
        <div class="card-header">
          <h3>{{ job.role }}</h3>
          <p class="company">{{ job.company }}</p>
          <p class="period">{{ job.period }} | {{ job.location }}</p>
        </div>
        <ul class="description-list">
          <li v-for="(item, index) in job.description" :key="index">
            {{ item }}
          </li>
        </ul>
        <div class="tech-stack">
          <span 
            v-for="tech in job.technologies" 
            :key="tech" 
            class="tech-tag"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div v-if="activeTab === 'education'" class="tab-content">
      <div 
        v-for="edu in education" 
        :key="edu.id"
        class="experience-card"
        data-aos="fade-up"
      >
        <div class="card-header">
          <h3>{{ edu.degree }}</h3>
          <p class="company">{{ edu.institution }}</p>
          <p class="period">{{ edu.period }} | {{ edu.location }}</p>
        </div>
        <ul class="description-list">
          <li v-for="(achievement, index) in edu.achievements" :key="index">
            {{ achievement }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Certifications -->
    <div v-if="activeTab === 'certifications'" class="tab-content">
      <div class="certifications-grid">
        <div 
          v-for="cert in certifications" 
          :key="cert.id"
          class="certification-card"
          data-aos="fade-up"
        >
          <img :src="cert.badgeImage" :alt="cert.name" class="certification-badge">
          <div class="certification-details">
            <h3>{{ cert.name }}</h3>
            <p class="issuer">{{ cert.issuer }}</p>
            <p class="issue-date">Issued {{ cert.date }}</p>
            <a :href="cert.url" target="_blank" class="verify-btn">
              Verify Certificate
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-title {
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.tab-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: var(--border-radius-md);
  background: rgba(30, 41, 59, 0.7);
  color: var(--text-color);
  cursor: pointer;
  transition: all var(--transition-speed);
}

.tab-btn:hover {
  background: rgba(59, 130, 246, 0.2);
}

.tab-btn.active {
  background: var(--primary-color);
  color: white;
}

.tab-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-card {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  transition: transform var(--transition-speed);
}

.experience-card:hover {
  transform: translateY(-5px);
}

.card-header {
  margin-bottom: 1.5rem;
}

.card-header h3 {
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.company {
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.period {
  color: #94a3b8;
  font-size: 0.9rem;
}

.description-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.description-list li {
  color: #e2e8f0;
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  position: relative;
}

.description-list li::before {
  content: '•';
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(59, 130, 246, 0.2);
  color: #60a5fa;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
}

.certification-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  transition: all var(--transition-speed);
}

.certification-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.certification-badge {
  width: 180px;
  height: 180px;
  object-fit: contain;
  margin-bottom: 1.5rem;
  transition: transform var(--transition-speed);
}

.certification-card:hover .certification-badge {
  transform: scale(1.05);
}

.certification-details {
  width: 100%;
}

.certification-details h3 {
  font-size: 1.25rem;
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.issuer {
  color: var(--primary-color);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.issue-date {
  color: #94a3b8;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.verify-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  background: rgba(59, 130, 246, 0.1);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-speed);
}

.verify-btn:hover {
  background: rgba(59, 130, 246, 0.2);
  color: var(--secondary-color);
}

.verify-btn:hover .arrow {
  transform: translateX(5px);
}

@media (max-width: 768px) {
  .tabs {
    flex-direction: column;
  }

  .experience-card {
    padding: 1.5rem;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
  }
  
  .certification-card {
    padding: 1.5rem;
  }
  
  .certification-badge {
    width: 150px;
    height: 150px;
  }
}
</style> 