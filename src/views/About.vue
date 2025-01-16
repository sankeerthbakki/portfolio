<template>
  <div class="content-container">
    <h1 class="section-title">About Me</h1>
    
    <div class="about-container">
      <!-- Profile Section -->
      <div class="profile-section" data-aos="fade-right">
        <div class="profile-image">
          <!-- <img src="/profile-image.jpg" alt="Profile Image"> -->
        </div>
        <div class="social-links">
          <a href="https://github.com/yourusername" target="_blank" class="social-link">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" class="social-link">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" class="social-link">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="mailto:your.email@example.com" class="social-link">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <!-- Bio Section -->
      <div class="bio-section" data-aos="fade-left">
        <div class="bio-content">
          <p class="bio-text">
            Hello! I'm [Your Name], a passionate Full Stack Developer based in [Your Location]. 
            With [X] years of experience in web development, I specialize in building modern, 
            responsive, and user-friendly applications.
          </p>
          
          <p class="bio-text">
            My journey in tech began [your story here]. Since then, I've worked on various 
            projects ranging from [type of projects] to [other types], always focusing on 
            writing clean, efficient, and maintainable code.
          </p>

          <p class="bio-text">
            When I'm not coding, you can find me [your interests/hobbies]. I'm always eager 
            to learn new technologies and take on challenging projects.
          </p>
        </div>

        <!-- Quick Facts -->
        <div class="quick-facts">
          <h2>Quick Facts</h2>
          <ul class="facts-list">
            <li>
              <span class="fact-icon">🎓</span>
              <span class="fact-text">Degree in Computer Science</span>
            </li>
            <li>
              <span class="fact-icon">💼</span>
              <span class="fact-text">X+ Years of Experience</span>
            </li>
            <li>
              <span class="fact-icon">🌍</span>
              <span class="fact-text">Based in [Your Location]</span>
            </li>
            <li>
              <span class="fact-icon">🚀</span>
              <span class="fact-text">X+ Projects Completed</span>
            </li>
          </ul>
        </div>

        <!-- Download CV Button -->
        <a href="/your-cv.pdf" download class="download-cv">
          <i class="fas fa-download"></i>
          Download CV
        </a>
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

.about-container {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 3rem;
  align-items: start;
}

.profile-section {
  position: sticky;
  top: 100px;
}

.profile-image {
  width: 100%;
  aspect-ratio: 1;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-speed);
}

.profile-image:hover img {
  transform: scale(1.05);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(30, 41, 59, 0.7);
  color: var(--text-color);
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all var(--transition-speed);
}

.social-link:hover {
  background: var(--primary-color);
  transform: translateY(-3px);
}

.bio-section {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
}

.bio-text {
  color: #e2e8f0;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.quick-facts {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.quick-facts h2 {
  color: var(--text-color);
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.facts-list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.facts-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #e2e8f0;
}

.fact-icon {
  font-size: 1.5rem;
}

.download-cv {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  border-radius: var(--border-radius-md);
  font-weight: 500;
  transition: all var(--transition-speed);
}

.download-cv:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
}

@media (max-width: 968px) {
  .about-container {
    grid-template-columns: 1fr;
  }

  .profile-section {
    position: static;
    max-width: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .facts-list {
    grid-template-columns: 1fr;
  }
}
</style>