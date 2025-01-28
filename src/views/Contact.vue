<template>
  <div class="content-container">
    <h2 class="section-title">Contact Me</h2>
    <div class="contact-content">
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="formData.name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email" required>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="formData.message" required></textarea>
        </div>
        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
        
        <div v-if="submitStatus === 'success'" class="status-message success">
          Message sent successfully!
        </div>
        <div v-if="submitStatus === 'error'" class="status-message error">
          There was an error sending your message. Please try again.
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const submitStatus = ref(null);

const handleSubmit = async () => {
  isSubmitting.value = true;
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    submitStatus.value = 'success';
    formData.value = { name: '', email: '', message: '' };
  } catch (error) {
    submitStatus.value = 'error';
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.section-title {
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;
}

.contact-content {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

label {
  color: #fff;
  font-size: 1rem;
}

input, textarea {
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(30, 41, 59, 0.7);
  color: #fff;
  font-size: 1rem;
}

textarea {
  min-height: 150px;
  resize: vertical;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
}

.submit-btn {
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn:hover:not(:disabled) {
  background: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.status-message {
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
}

.status-message.success {
  background: rgba(34, 197, 94, 0.2);
  color: #4ade80;
}

.status-message.error {
  background: rgba(239, 68, 68, 0.2);
  color: #f87171;
}
</style>