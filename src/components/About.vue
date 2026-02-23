<template>
  <div>
    <!-- Page Banner / Hero -->
    <section class="bg-dark text-white py-5 text-center" 
      style="background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://leadership.ng/wp-content/uploads/2024/10/Tokunbo-vehicles.jpg') center/cover no-repeat;">
      <div class="container py-5">
        <h1 class="display-4 fw-bold mb-3">About Obembe Motors</h1>
        <p class="lead fs-4">Premium Tokunbo & Foreign Used Cars • Trusted Dealer in Ilesa, Osun State</p>
      </div>
    </section>

    <div class="container my-5">
      <!-- Who We Are -->
      <div class="row align-items-center mb-5 pb-5 border-bottom">
        <div class="col-lg-6 mb-4 mb-lg-0">
          <h2 class="fw-bold mb-4 text-primary">Who We Are</h2>
          <p class="fs-5 lh-lg">
            Obembe Motors (also known as Obembe Autos and Properties) is a premium car dealership based in Ilesa, Osun. 
            Founded by <strong>Mr. Obembe </strong>, we specialize in clean, foreign-used and tokunbo vehicles 
            with full options, clean papers, and no hidden issues.
          </p>
          <p class="fs-5 lh-lg">
            We believe in quality over quantity — every car we sell is personally inspected, 
            serviced where needed, and delivered with transparency and integrity.
          </p>
        </div>
        <div class="col-lg-6">
          <img 
            src="https://leadership.ng/wp-content/uploads/2024/10/Tokunbo-vehicles.jpg" 
            alt="Obembe Motors Vehicle Display Yard in Ilesa" 
            class="img-fluid rounded-3 shadow-lg"
            style="object-fit: cover; height: 400px;"
          >
          <p class="text-center text-muted mt-3 small">Our Ilesa vehicle display yard – real tokunbo cars ready for you</p>
        </div>
      </div>

      <!-- Why Choose Us – Card Style -->
      <div class="text-center mb-5">
        <h2 class="fw-bold mb-5 text-primary">Why Customers Choose Obembe Motors</h2>
      </div>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100 shadow border-0 text-center p-4 hover-lift">
            <i class="bi bi-shield-check-fill fs-1 text-success mb-4"></i>
            <h5 class="fw-bold">Clean Papers & History</h5>
            <p class="text-muted">No accidents, no customs issues — full documentation guaranteed every time.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow border-0 text-center p-4 hover-lift">
            <i class="bi bi-tools fs-1 text-success mb-4"></i>
            <h5 class="fw-bold">Thoroughly Inspected</h5>
            <p class="text-muted">Every vehicle checked by experienced mechanics before it reaches you.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100 shadow border-0 text-center p-4 hover-lift">
            <i class="bi bi-chat-dots-fill fs-1 text-success mb-4"></i>
            <h5 class="fw-bold">Fast & Friendly Service</h5>
            <p class="text-muted">Quick WhatsApp responses, flexible payment, and delivery options across Osun and beyond.</p>
          </div>
        </div>
      </div>

      <!-- Location & Contact CTA -->
      <div class="text-center my-5 py-5 bg-light rounded-4 shadow-sm">
        <h3 class="fw-bold mb-4 text-primary">Visit Us in Ilesa</h3>
        <p class="fs-5 mb-4">
          Ilesa, Osun State<br>
          Open Monday – Saturday: 9 AM – 6 PM
        </p>

        <!-- Google Maps -->
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.5!2d4.738!3d7.628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039ed0b0b0b0b0b%3A0x123456789abcdef!2sIlesa%2C%20Osun%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1730000000000!5m2!1sen!2sng" 
          width="100%" 
          height="450" 
          style="border:0; border-radius: 12px;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>

        <div class="mt-5">
          <a href="https://wa.me/2348073831871?text=Hi%20Obembe%20Motors,%20I%20just%20saw%20your%20About%20page%20and%20want%20to%20come%20see%20cars" target="_blank" class="btn btn-success btn-lg px-5 py-3 shadow">
            <i class="bi bi-whatsapp me-2"></i> Chat to Visit or Inquire
          </a>
        </div>
      </div>

      <!-- Social Proof -->
      <div class="text-center py-4">
        <h4 class="mb-4 fw-bold">See What Our Customers Say</h4>
        <a href="https://www.facebook.com" target="_blank" class="btn btn-primary btn-lg px-5 shadow">
          <i class="bi bi-facebook me-2"></i> View Reviews on Facebook
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
// No logic needed – static page
</script>

<style scoped>
.hover-lift {
  transition: all 0.3s ease;
}
.hover-lift:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
}
</style>