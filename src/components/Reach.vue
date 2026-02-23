<template>
  <div class="page-wrapper">
    <div class="container my-5 position-relative z-1">
      <h1 class="text-center mb-5 fw-bold text-white text-shadow">Contact Obembe Motors</h1>
      <p class="text-center lead mb-5 text-white text-shadow">Ready to drive home your dream car? Reach out — we're here to help!</p>

      <!-- Quick Contact Cards -->
      <div class="row g-4 mb-5 justify-content-center">
        <div class="col-md-4 col-lg-3">
          <div class="card h-100 shadow-lg border-0 text-center p-4 hover-lift bg-white bg-opacity-90">
            <i class="bi bi-whatsapp fs-1 text-success mb-3"></i>
            <h5 class="fw-bold">WhatsApp / Chat</h5>
            <p class="fs-5 fw-bold text-dark">+234 807 383 1871</p>
            <p class="text-muted small mb-4">Fast replies • Send photos • Schedule viewing</p>
            <a 
              href="https://wa.me/2348073831871?text=Hi%20Obembe%20Motors,%20I%20want%20to%20buy%20a%20car%20from%20your%20website" 
              target="_blank" 
              class="btn btn-success btn-lg rounded-pill shadow"
            >
              Start Chat
            </a>
          </div>
        </div>

        <div class="col-md-4 col-lg-3">
          <div class="card h-100 shadow-lg border-0 text-center p-4 hover-lift bg-white bg-opacity-90">
            <i class="bi bi-geo-alt-fill fs-1 text-primary mb-3"></i>
            <h5 class="fw-bold">Visit Us</h5>
            <p class="fs-5 fw-bold text-dark">Ilesa, Osun State</p>
            <p class="text-muted small mb-4">Open Monday – Saturday: 9 AM – 6 PM</p>
            <a 
              href="https://wa.me/2348073831871?text=Hi%20Obembe%20Motors,%20send%20directions%20to%20your%20Ilesa%20location" 
              target="_blank" 
              class="btn btn-outline-primary btn-lg rounded-pill shadow"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div class="col-md-4 col-lg-3">
          <div class="card h-100 shadow-lg border-0 text-center p-4 hover-lift bg-white bg-opacity-90">
            <i class="bi bi-facebook fs-1 text-primary mb-3"></i>
            <h5 class="fw-bold">Facebook</h5>
            <p class="text-muted small mb-4">Latest arrivals, prices & customer stories</p>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              class="btn btn-primary btn-lg rounded-pill shadow"
            >
              View Page
            </a>
          </div>
        </div>
      </div>

      <!-- Message Form -->
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 col-xl-7">
          <div class="card shadow-lg border-0 bg-white bg-opacity-90 p-5">
            <h3 class="text-center fw-bold mb-4 text-primary">Send Us a Message</h3>
            <form @submit.prevent="sendMessage">
              <div class="row g-3">
                <div class="col-md-6">
                  <label for="name" class="form-label fw-bold">Your Name</label>
                  <input type="text" class="form-control form-control-lg" id="name" v-model="form.name" required placeholder="e.g. Adedeji">
                </div>
                <div class="col-md-6">
                  <label for="phone" class="form-label fw-bold">Phone / WhatsApp</label>
                  <input type="tel" class="form-control form-control-lg" id="phone" v-model="form.phone" required placeholder="0807 XXX XXXX">
                </div>
              </div>
              <div class="mt-3">
                <label for="email" class="form-label fw-bold">Email (optional)</label>
                <input type="email" class="form-control form-control-lg" id="email" v-model="form.email" placeholder="your@email.com">
              </div>
              <div class="mt-3">
                <label for="message" class="form-label fw-bold">Message / Interested Car</label>
                <textarea class="form-control form-control-lg" id="message" rows="5" v-model="form.message" required placeholder="e.g. Interested in Toyota Camry 2022, budget ₦15-20M..."></textarea>
              </div>
              <div class="text-center mt-4">
                <button type="submit" class="btn btn-success btn-lg px-5 py-3 rounded-pill fw-bold shadow">
                  Send Message
                </button>
              </div>
            </form>
            <p class="text-center mt-4 small text-muted">We'll reply fast via WhatsApp or call if needed!</p>
          </div>
        </div>
      </div>

      <!-- Google Maps -->
      <div class="text-center mt-5">
        <h4 class="fw-bold mb-4 text-white text-shadow">Our Location in Ilesa</h4>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5!2d4.738!3d7.628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed0b0b0b0b0b%3A0x123456789abcdef!2sIlesa%2C%20Osun%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1730000000000!5m2!1sen!2sng" 
          width="100%" 
          height="500" 
          style="border:0; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.4);" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        <p class="mt-3 text-white text-shadow">Ilesa, Osun State — WhatsApp for exact directions</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  email: '',
  message: ''
})

const sendMessage = () => {
  const text = `Name: ${form.value.name}%0APhone: ${form.value.phone}%0AEmail: ${form.value.email || 'N/A'}%0AMessage: ${form.value.message}`
  window.open(`https://wa.me/2348073831871?text=${text}`, '_blank')
  
  form.value = { name: '', phone: '', email: '', message: '' }
  alert('Message sent! Redirecting to WhatsApp...')
}
</script>

<style scoped>
.page-wrapper {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), 
              url('https://images.unsplash.com/photo-1502877338535-766e3a6052c0?auto=format&fit=crop&q=80&w=2000') center/cover fixed no-repeat;
  background-attachment: fixed;
}

.text-shadow {
  text-shadow: 0 2px 10px rgba(0,0,0,0.8);
}

.hover-lift {
  transition: all 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.25) !important;
}
.rounded-pill {
  transition: all 0.3s;
}
.rounded-pill:hover {
  transform: scale(1.05);
}
</style>