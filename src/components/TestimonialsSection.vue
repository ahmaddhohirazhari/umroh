<template>
  <section id="testimonials" class="py-20 bg-white">
    <div class="container-custom section-padding">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Testimoni Jamaah
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Dengarkan pengalaman spiritual jamaah yang telah mempercayakan
          perjalanan umroh dan haji bersama kami
        </p>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div
          v-for="testimonial in store.testimonials"
          :key="testimonial.id"
          class="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg card-hover border border-gray-100"
        >
          <!-- Stars -->
          <div class="flex mb-4">
            <svg
              v-for="star in 5"
              :key="star"
              :class="[
                'w-5 h-5',
                star <= testimonial.rating ? 'text-gold-500' : 'text-gray-300',
              ]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <!-- Testimonial Text -->
          <blockquote class="text-gray-700 mb-6 leading-relaxed">
            "{{ testimonial.text }}"
          </blockquote>

          <!-- Author -->
          <div class="flex items-center">
            <div
              class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4"
            >
              {{ testimonial.name.charAt(0) }}
            </div>
            <div>
              <div class="font-semibold text-gray-900">
                {{ testimonial.name }}
              </div>
              <div class="text-sm text-gray-600">
                {{ testimonial.location }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Photo Gallery -->
      <div class="mb-16">
        <h3 class="text-2xl font-bold text-center text-gray-900 mb-8">
          Galeri Perjalanan
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="relative overflow-hidden rounded-xl card-hover">
            <img
              src="/mekah.jpg"
              alt="Masjidil Haram"
              class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-300"
            ></div>
          </div>
          <div class="relative overflow-hidden rounded-xl card-hover">
            <img
              src="/mekah.jpg"
              alt="Masjid Nabawi"
              class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-300"
            ></div>
          </div>
          <div class="relative overflow-hidden rounded-xl card-hover">
            <img
              src="/mekah.jpg"
              alt="Jamaah Umroh"
              class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-300"
            ></div>
          </div>
          <div class="relative overflow-hidden rounded-xl card-hover">
            <img
              src="/mekah.jpg"
              alt="Keutamaan Haji"
              class="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-black/20 hover:bg-black/40 transition-all duration-300"
            ></div>
          </div>
        </div>
      </div>

      <!-- Video Testimonials -->
      <div
        class="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 text-white text-center"
      >
        <h3 class="text-3xl font-bold mb-4">Video Testimoni</h3>
        <p class="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
          Saksikan langsung pengalaman jamaah dalam video testimoni eksklusif
        </p>
        <button
          class="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center mx-auto"
        >
          <svg class="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clip-rule="evenodd"
            />
          </svg>
          Tonton Video Testimoni
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMainStore } from '../stores/main';

const store = useMainStore();
</script>
