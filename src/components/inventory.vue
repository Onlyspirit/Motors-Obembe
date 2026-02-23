<template>
  <div>
    <!-- Page Banner -->
    <section class="bg-dark text-white py-5 text-center">
      <div class="container py-4">
        <h1 class="display-4 fw-bold mb-3">Our Inventory</h1>
        <p class="lead fs-5 mb-0">Premium Tokunbo & Foreign Used Cars • Clean Papers • Full Options • Negotiable Prices</p>
      </div>
    </section>

    <div class="container my-5">
      <!-- Search Bar -->
      <div class="row justify-content-center mb-5">
        <div class="col-lg-8 col-xl-6">
          <div class="input-group input-group-lg">
            <input 
              type="text" 
              class="form-control rounded-pill ps-4" 
              placeholder="Search by make, model, year, or price..." 
              v-model="searchQuery"
            >
            <button class="btn btn-primary rounded-pill px-4 ms-2" type="button">
              <i class="bi bi-search me-2"></i> Search
            </button>
          </div>
        </div>
      </div>

      <!-- Car Grid -->
      <div class="row g-4">
        <div class="col-md-6 col-lg-4 col-xl-3" v-for="car in filteredCars" :key="car.id">
          <div class="card h-100 border-0 shadow-lg overflow-hidden hover-lift position-relative">
            <img 
              :src="car.image" 
              class="card-img-top" 
              alt="Car Image" 
              style="height: 240px; object-fit: cover; transition: transform 0.4s ease;"
            >
            <div class="card-body d-flex flex-column p-4">
              <h5 class="card-title fw-bold fs-4 mb-2">{{ car.make }} {{ car.model }} {{ car.year }}</h5>
              <p class="text-success fw-bold fs-3 mb-3">{{ car.price }}</p>
              
              <ul class="list-group list-group-flush mb-4 small text-muted">
                <li class="list-group-item px-0"><i class="bi bi-speedometer2 me-2 text-primary"></i> {{ car.mileage }} km</li>
                <li class="list-group-item px-0"><i class="bi bi-gear-wide me-2 text-primary"></i> {{ car.transmission }}</li>
                <li class="list-group-item px-0"><i class="bi bi-fuel-pump me-2 text-primary"></i> {{ car.fuel }}</li>
              </ul>

              <a 
                :href="`https://wa.me/2348073831871?text=Hi%20Obembe%20Motors,%20I'm%20interested%20in%20the%20${encodeURIComponent(car.make + ' ' + car.model + ' ' + car.year)}%20for%20${car.price}`" 
                target="_blank" 
                class="btn btn-success btn-lg mt-auto rounded-pill fw-bold shadow"
              >
                <i class="bi bi-whatsapp me-2"></i> Inquire Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div v-if="filteredCars.length === 0" class="text-center my-5 py-5">
        <h4 class="fw-bold text-muted">No cars match your search right now.</h4>
        <p class="lead">Try different keywords or chat us for more options!</p>
        <a href="https://wa.me/2348073831871?text=Hi%20Obembe%20Motors,%20show%20me%20more%20cars%20please" target="_blank" class="btn btn-outline-primary btn-lg mt-3 px-5">
          <i class="bi bi-telephone me-2"></i> Chat for Help
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const searchQuery = ref('')

const cars = ref([
  {
    id: 1,
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    price: '₦18.5M',
    mileage: '34,000',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://autokunbo.com/wp-content/uploads/wp-cardealer-uploads/_listing_featured_image/2025/09/fa15ef5a-2bb6-4274-a60f-4c4d0dc1cab4.jpeg'
  },
  {
    id: 2,
    make: 'Lexus',
    model: 'RX 350',
    year: 2020,
    price: '₦28M',
    mileage: '45,000',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://autokunbo.com/wp-content/uploads/elementor/thumbs/IMG_8814-rdmkmqbedlrcuxj0vuhntf1dd22foqr7azdmnn66bg.jpeg'
  },
  {
    id: 3,
    make: 'Mercedes-Benz',
    model: 'C300',
    year: 2019,
    price: '₦22M',
    mileage: '52,000',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.carloaded.com/large/cIkWV6IJsd2OFjsrZcO0TJr4P8rAEn1Y638A6J7hzYZZ2uk2Pq.jpeg'
  },
  {
    id: 4,
    make: 'Honda',
    model: 'Accord',
    year: 2021,
    price: '₦15.8M',
    mileage: '28,000',
    transmission: 'CVT',
    fuel: 'Petrol',
    image: 'https://autokunbo.com/wp-content/uploads/elementor/thumbs/IMG_4337-rfxqm3ww4t2tnk5pnsz80noi6jinjvakt65tnbol8c.jpeg'
  },
  // Add your real cars here later – upload to assets/ for best reliability
])

const filteredCars = computed(() => {
  if (!searchQuery.value.trim()) return cars.value
  const q = searchQuery.value.toLowerCase().trim()
  return cars.value.filter(car =>
    `${car.make} ${car.model} ${car.year}`.toLowerCase().includes(q) ||
    car.price.toLowerCase().includes(q)
  )
})
</script>

<style scoped>
.hover-lift {
  transition: all 0.4s ease;
}
.hover-lift:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
}
.card-img-top:hover {
  transform: scale(1.08);
}
.rounded-pill {
  transition: all 0.3s;
}
.rounded-pill:hover {
  transform: scale(1.05);
}
</style>