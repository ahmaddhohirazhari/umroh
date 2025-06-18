<template>
  <section id="packages" class="py-20 bg-gray-50">
    <div class="container-custom section-padding">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Paket Umroh & Haji Terbaik
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan dan budget Anda. Semua paket
          sudah termasuk akomodasi, transportasi, dan bimbingan ibadah.
        </p>
      </div>

      <!-- Package Filter -->
      <div class="flex justify-center mb-12">
        <div class="bg-white p-1 rounded-xl shadow-lg">
          <button
            @click="selectedType = 'all'"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
              selectedType === 'all'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'text-gray-600 hover:text-primary-600',
            ]"
          >
            Semua Paket
          </button>
          <button
            @click="selectedType = 'umroh'"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
              selectedType === 'umroh'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'text-gray-600 hover:text-primary-600',
            ]"
          >
            Umroh
          </button>
          <button
            @click="selectedType = 'haji'"
            :class="[
              'px-6 py-3 rounded-lg font-semibold transition-all duration-300',
              selectedType === 'haji'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'text-gray-600 hover:text-primary-600',
            ]"
          >
            Haji
          </button>
        </div>
      </div>

      <!-- Packages Grid -->
      <div class="grid lg:grid-cols-3 gap-8">
        <div
          v-for="pkg in filteredPackages"
          :key="pkg.id"
          class="bg-white rounded-2xl shadow-lg overflow-hidden card-hover relative"
        >
          <!-- Popular Badge -->
          <div v-if="pkg.popular" class="absolute top-4 left-4 z-10">
            <span
              class="bg-gradient-to-r from-gold-500 to-gold-400 text-white px-3 py-1 rounded-full text-sm font-semibold"
            >
              Terpopuler
            </span>
          </div>

          <!-- Package Image -->
          <div class="relative h-48 overflow-hidden">
            <img
              :src="'/mekah.jpg'"
              :alt="pkg.name"
              class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
            ></div>
            <div class="absolute bottom-4 left-4 right-4">
              <div class="flex items-center justify-between text-white">
                <span
                  class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                >
                  {{ pkg.duration }}
                </span>
                <span
                  class="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm capitalize"
                >
                  {{ pkg.type }}
                </span>
              </div>
            </div>
          </div>

          <!-- Package Content -->
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">{{ pkg.name }}</h3>
            <div class="text-2xl font-bold text-primary-600 mb-4">
              {{ pkg.price }}
            </div>

            <div class="space-y-3 mb-6">
              <div
                v-for="feature in pkg.features"
                :key="feature"
                class="flex items-center text-gray-600"
              >
                <svg
                  class="w-5 h-5 text-primary-500 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ feature }}
              </div>
            </div>

            <div class="flex gap-3">
              <button class="flex-1 btn-primary">Pesan Sekarang</button>
              <button
                class="px-4 py-3 border-2 border-gray-300 rounded-lg hover:border-primary-600 hover:text-primary-600 transition-all duration-300"
              >
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-16 text-center">
        <div
          class="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-12 text-white"
        >
          <h3 class="text-3xl font-bold mb-4">Butuh Paket Khusus?</h3>
          <p class="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Kami juga menyediakan paket custom sesuai kebutuhan dan budget Anda.
            Konsultasikan dengan tim ahli kami.
          </p>
          <button
            class="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Konsultasi Paket Custom
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useMainStore } from '../stores/main';

const store = useMainStore();
const selectedType = ref<'all' | 'umroh' | 'haji'>('all');

const filteredPackages = computed(() => {
  if (selectedType.value === 'all') {
    return store.packages;
  }
  return store.packages.filter((pkg) => pkg.type === selectedType.value);
});

const getPackageImage = (type: 'umroh' | 'haji') => {
  return type === 'umroh'
    ? 'https://images.pexels.com/photos/8142095/pexels-photo-8142095.jpeg?auto=compress&cs=tinysrgb&w=800'
    : 'https://images.pexels.com/photos/8142098/pexels-photo-8142098.jpeg?auto=compress&cs=tinysrgb&w=800';
};
</script>
