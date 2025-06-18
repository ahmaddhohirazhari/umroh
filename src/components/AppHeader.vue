<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300">
    <nav class="container-custom section-padding py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-3">
          <div class="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-500 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
          <div>
            <h1 class="text-xl font-bold text-gray-900">Barokah Travel</h1>
            <p class="text-xs text-gray-600">Umroh & Haji Terpercaya</p>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a href="#home" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Beranda</a>
          <a href="#about" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Tentang</a>
          <a href="#packages" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Paket</a>
          <a href="#testimonials" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Testimoni</a>
          <a href="#contact" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Kontak</a>
          <button class="btn-primary">
            Konsultasi Gratis
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 py-4 border-t border-gray-200">
        <div class="flex flex-col space-y-4">
          <a href="#home" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Beranda</a>
          <a href="#about" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Tentang</a>
          <a href="#packages" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Paket</a>
          <a href="#testimonials" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Testimoni</a>
          <a href="#contact" @click="mobileMenuOpen = false" class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">Kontak</a>
          <button class="btn-primary w-full mt-4">
            Konsultasi Gratis
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>