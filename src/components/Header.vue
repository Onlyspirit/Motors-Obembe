<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
    <div class="container">
      <router-link class="navbar-brand fw-bold fs-4" to="/">Obembe Motors</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><router-link class="nav-link" to="/home">Home</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/inventory">Inventory</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about">About</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/reach">Reach Us</router-link></li>
        </ul>
        <a href="https://wa.me/2348073831871?text=Hello%20Obembe%20Motors%2C%20I'm%20interested%20in%20your%20cars" target="_blank" class="btn btn-success ms-3">
          <i class="bi bi-whatsapp"></i> WhatsApp
        </a>
      </div>
    </div>
  </nav>
</template>