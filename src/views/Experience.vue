<script setup>
import { ref, computed } from 'vue'

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

const tabTransition = computed(() => {
  return activeTab.value === 'certifications' ? 'zoom' : 'slide'
})

const onBeforeEnter = (el) => {
  el.style.setProperty('--delay', `${el.dataset.index * 0.1}s`)
}
</script>

<template>
  <div class="content-container">
    <h1 class="section-title">
      <!-- <span class="title-decorator"></span> -->
      Experience
    </h1>
    
    <!-- Tabs -->
    <div class="tabs">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        @click="activeTab = tab.id"
        :class="['tab-btn', { active: activeTab === tab.id }]"
      >
        {{ tab.label }}
        <span class="tab-indicator"></span>
      </button>
    </div>

    <!-- Main Content Transition -->
    <Transition :name="tabTransition" mode="out-in">
      <!-- Work Experience Tab -->
      <div v-if="activeTab === 'work'" key="work" class="tab-content">
        <TransitionGroup 
          name="staggered-list" 
          tag="div"
          @before-enter="onBeforeEnter"
        >
          <div 
            v-for="(job, index) in workExperience" 
            :key="job.id"
            class="experience-card"
            :data-index="index"
          >
            <div class="card-header">
              <h3>{{ job.role }}</h3>
              <p class="company">{{ job.company }}</p>
              <p class="period">{{ job.period }} | {{ job.location }}</p>
            </div>
            <ul class="description-list">
              <li v-for="(item, i) in job.description" :key="i">
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
        </TransitionGroup>
      </div>

      <!-- Education Tab -->
      <div v-else-if="activeTab === 'education'" key="education" class="tab-content">
        <TransitionGroup 
          name="staggered-list" 
          tag="div"
          @before-enter="onBeforeEnter"
        >
          <div 
            v-for="(edu, index) in education" 
            :key="edu.id"
            class="experience-card"
            :data-index="index"
          >
            <div class="card-header">
              <h3>{{ edu.degree }}</h3>
              <p class="company">{{ edu.institution }}</p>
              <p class="period">{{ edu.period }} | {{ edu.location }}</p>
            </div>
            <ul class="description-list">
              <li v-for="(achievement, i) in edu.achievements" :key="i">
                {{ achievement }}
              </li>
            </ul>
          </div>
        </TransitionGroup>
      </div>

      <!-- Certifications Tab -->
      <div v-else key="certifications" class="tab-content">
    <TransitionGroup 
      name="certification-grid" 
      tag="div" 
      class="certifications-grid"
    >
      <div 
        v-for="cert in certifications" 
        :key="cert.id"
        class="certification-card"
      >
        <div class="certification-badge-wrapper">
          <img 
            :src="cert.badgeImage" 
            :alt="cert.name" 
            class="certification-badge"
          >
          <div class="shine-effect"></div>
        </div>
        <div class="certification-details">
          <h3>{{ cert.name }}</h3>
          <div class="cert-meta">
            <span class="issuer">{{ cert.issuer }}</span>
            <span class="separator">•</span>
            <span class="issue-date">{{ cert.date }}</span>
          </div>
          <a :href="cert.url" target="_blank" class="verify-btn">
            <span class="btn-text">View Credential</span>
            <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" stroke-width="2"/>
            </svg>
          </a>
        </div>
      </div>
    </TransitionGroup>
  </div>
    </Transition>
  </div>
</template>

<style scoped>
/* Base Styles */
/* .content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
} */

.section-title {
  position: relative;
  font-size: 2.5rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  text-align: center;
}

.title-decorator {
  display: block;
  width: 60px;
  height: 4px;
  background: var(--primary-color);
  margin: 0 auto 1rem;
  border-radius: 2px;
  animation: decorator-glow 2s ease-in-out infinite;
}

/* Tabs */
.tabs {
  position: relative;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.tab-btn {
  position: relative;
  padding: 1rem 2rem;
  border: none;
  background: transparent;
  color: var(--text-color);
  font-weight: 500;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tab-indicator {
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary-color);
  transition: all 0.3s ease;
}

.tab-btn.active .tab-indicator {
  width: 100%;
}

.tab-btn:hover {
  transform: translateY(-3px);
}

/* Experience Cards */
.experience-card {
  background: linear-gradient(145deg, rgba(30, 41, 59, 0.8), rgba(15, 23, 42, 0.8));
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  margin-bottom: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
  /* backdrop-filter: blur(10px); */
}

.experience-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.card-header h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.company {
  color: var(--primary-color);
  font-size: 1.1rem;
}

.period {
  color: #94a3b8;
  font-size: 0.9rem;
}

.description-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  list-style-type: none;
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
  margin-top: 1rem;
}

.tech-tag {
  background: rgba(59, 130, 246, 0.15);
  color: #93c5fd;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  transform: scale(1.05);
  background: rgba(59, 130, 246, 0.3);
}

/* Certifications Grid */
.certifications-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
}

/* Certification Card */
.certification-card {
  display: flex;
  align-items: center;
  gap: 2rem;
  background: linear-gradient(
    145deg, 
    rgba(30, 41, 59, 0.8), 
    rgba(15, 23, 42, 0.9)
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  width: 100%;
  max-width: 800px;
  position: relative;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.certification-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

/* Badge Wrapper */
.certification-badge-wrapper {
  position: relative;
  flex-shrink: 0;
  width: 150px;
  height: 150px;
}

.certification-badge {
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 1;
}

.shine-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.certification-card:hover .shine-effect {
  opacity: 1;
}

/* Certification Details */
.certification-details {
  flex: 1;
}

.certification-details h3 {
  font-size: 1.5rem;
  color: var(--text-color);
  margin-bottom: 0.75rem;
}

.cert-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  color: #94a3b8;
  font-size: 0.95rem;
}

.separator {
  opacity: 0.6;
}

/* Verify Button */
.verify-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  background: rgba(59, 130, 246, 0.1);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius-md);
  text-decoration: none;
  transition: all 0.3s ease;
}

.verify-btn:hover {
  background: rgba(59, 130, 246, 0.2);
  transform: translateX(5px);
}

.arrow-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.3s ease;
}

.verify-btn:hover .arrow-icon {
  transform: translateX(3px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .certification-card {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .cert-meta {
    flex-direction: column;
    gap: 0.25rem;
  }

  .certification-badge-wrapper {
    width: 120px;
    height: 120px;
  }

  .verify-btn {
    width: 100%;
    justify-content: center;
  }
}

/* Animations */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.zoom-enter-active,
.zoom-leave-active {
  transition: all 0.4s ease;
}

.zoom-enter-from,
.zoom-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.staggered-list-enter-active {
  animation: slide-in 0.4s ease;
  animation-delay: var(--delay);
}

@keyframes slide-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes decorator-glow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

/* Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .tabs {
    flex-direction: column;
  }

  .tab-btn {
    width: 100%;
  }

  .experience-card {
    padding: 1.5rem;
  }

  .certifications-grid {
    grid-template-columns: 1fr;
  }
}
</style>