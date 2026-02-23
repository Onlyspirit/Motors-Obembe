<template>
  <div>
    <!-- Hero Section -->
    <section class="hero text-white text-center d-flex align-items-center" 
      style="background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://img.freepik.com/premium-photo/view-interior-modern-automobile-showing-dashboard_152904-572.jpg?ga=GA1.1.221654128.1759736429&semt=ais_hybrid&w=740&q=80') center/cover no-repeat; min-height: 80vh;">
      <div class="container">
        <h1 class="display-3 fw-bold mb-3">Obembe Motors</h1>
        <p class="lead fs-4 mb-4">Premium Used & Foreign Cars • Trusted Dealer in Ilesa, Osun</p>
        <p class="fs-5 mb-5">Quality rides, full options, clean papers. Drive home today!</p>
        <div class="d-flex justify-content-center gap-4 flex-wrap">
          <router-link to="/inventory" class="btn btn-warning btn-lg fw-bold px-5 py-3">Browse Inventory</router-link>
          <a href="https://wa.me/2348073831871?text=Hello%20Obembe%20Motors..." target="_blank" class="btn btn-success btn-lg fw-bold px-5 py-3">
            <i class="bi bi-whatsapp me-2"></i> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- Featured Cars Teaser -->
    <section class="container my-5">
      <h2 class="text-center mb-5 fw-bold">Featured Vehicles</h2>
      <div class="row g-4">
        <div class="col-md-4" v-for="car in featuredCars" :key="car.id">
          <div class="card h-100 shadow border-0">
            <img :src="car.image" class="card-img-top" alt="Featured Car" style="height: 220px; object-fit: cover;">
            <div class="card-body text-center">
              <h5 class="card-title">{{ car.title }}</h5>
              <p class="text-success fw-bold fs-4">{{ car.price }}</p>
              <p class="text-muted">{{ car.specs }}</p>
              <a href="https://wa.me/2348073831871?text=Interested%20in%20{{ car.title }}" target="_blank" class="btn btn-outline-primary">Inquire Now</a>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-5">
        <router-link to="/inventory" class="btn btn-primary btn-lg px-5">View All Cars</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
const featuredCars = [
  {
    id: 1,
    title: 'Toyota Camry 2022',
    price: '₦18.5M',
    specs: 'Foreign Used • Low Mileage • Full Options',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbZI0Vbpk2mxhsKd5hS6cpguIjEuEaYlV2Q&s'
    // Real 2022 Camry SE tokunbo listing in Naija – parked on road with traffic background
  },
  {
    id: 2,
    title: 'Lexus RX 350 2020',
    price: '₦28M',
    specs: 'Clean Interior • Loaded • Accident-Free',
    image: 'https://buycars.ng/wp-content/uploads/WhatsApp-Image-2022-05-04-at-4.45.43-AM.jpeg'
    // Actual 2020 RX 350 F-Sport in Nigerian compound/yard setting – very local feel
  },
  {
    id: 3,
    title: 'Mercedes-Benz C300 2019',
    price: '₦22M',
    specs: 'AMG Package • Super Clean • Negotiable',
    image: 'https://images.carloaded.com/large/cIkWV6IJsd2OFjsrZcO0TJr4P8rAEn1Y638A6J7hzYZZ2uk2Pq.jpeg'
    // 2019 C300 foreign used in Naija – real rear view on road, typical market photo
  }
]
</script>