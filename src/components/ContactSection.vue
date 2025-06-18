<template>
  <section id="contact" class="py-20 bg-gray-50">
    <div class="container-custom section-padding">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Hubungi Kami
        </h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Siap membantu mewujudkan impian spiritual Anda. Konsultasi gratis dan dapatkan penawaran terbaik dari kami.
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-lg p-8">
          <h3 class="text-2xl font-bold text-gray-900 mb-6">Konsultasi Gratis</h3>
          <form @submit.prevent="store.submitContact" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Nama Lengkap *
              </label>
              <input
                id="name"
                v-model="store.contactForm.name"
                type="text"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                placeholder="Masukkan nama lengkap Anda"
              >
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                id="email"
                v-model="store.contactForm.email"
                type="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                placeholder="nama@email.com"
              >
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                Nomor WhatsApp *
              </label>
              <input
                id="phone"
                v-model="store.contactForm.phone"
                type="tel"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                placeholder="08xxxxxxxxxx"
              >
            </div>

            <div>
              <label for="packageType" class="block text-sm font-medium text-gray-700 mb-2">
                Paket yang Diminati
              </label>
              <select
                id="packageType"
                v-model="store.contactForm.packageType"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              >
                <option value="">Pilih paket</option>
                <option value="umroh-reguler">Umroh Reguler</option>
                <option value="umroh-vip">Umroh VIP</option>
                <option value="haji-reguler">Haji Reguler</option>
                <option value="custom">Paket Custom</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                v-model="store.contactForm.message"
                rows="4"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
                placeholder="Tulis pertanyaan atau kebutuhan khusus Anda..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="store.isLoading"
              class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <svg v-if="store.isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              {{ store.isLoading ? 'Mengirim...' : 'Kirim Pesan' }}
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Contact Cards -->
          <div class="grid gap-6">
            <div class="bg-white rounded-2xl shadow-lg p-6 card-hover">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Alamat Kantor</h4>
                  <p class="text-gray-600">
                    Jl. KH. Ahmad Dahlan No. 123<br>
                    Jakarta Selatan 12560<br>
                    Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 card-hover">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-gold-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Telepon & WhatsApp</h4>
                  <p class="text-gray-600">
                    <a href="tel:+628211234567" class="hover:text-primary-600 transition-colors duration-200">
                      +62 821 1234 5678
                    </a><br>
                    <a href="https://wa.me/628211234567" class="hover:text-primary-600 transition-colors duration-200">
                      WhatsApp: +62 821 1234 5678
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 card-hover">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Email</h4>
                  <p class="text-gray-600">
                    <a href="mailto:info@barokahtravel.com" class="hover:text-primary-600 transition-colors duration-200">
                      info@barokahtravel.com
                    </a><br>
                    <a href="mailto:admin@barokahtravel.com" class="hover:text-primary-600 transition-colors duration-200">
                      admin@barokahtravel.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl shadow-lg p-6 card-hover">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Jam Operasional</h4>
                  <p class="text-gray-600">
                    Senin - Jumat: 08:00 - 17:00<br>
                    Sabtu: 08:00 - 15:00<br>
                    Minggu: Tutup
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Quick Actions -->
          <div class="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 text-white">
            <h4 class="text-xl font-bold mb-4">Konsultasi Langsung</h4>
            <p class="text-primary-100 mb-6">
              Butuh informasi lebih cepat? Hubungi langsung via WhatsApp atau telepon untuk konsultasi gratis.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/628211234567" 
                class="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-.477-1.462-.013-2.809.162-3.939.445-.297.075-.471.372-.471.745 0 .198.099.471.223.644.124.173.223.223.372.372.15.15.223.297.223.471 0 .198-.099.372-.198.496-.099.124-.892 2.141-.892 2.141s-.372.744-.744.744-.744-.372-.744-.744.372-.744.744-.744c.124 0 .248-.025.372-.075.273-.099 1.758-.867 2.03-.967.273-.099.471-.148.67.15.197.297.767.966.94 1.164.173.199.347.223.644.075.297-.15 1.255-.463 2.39-.477 1.462-.013 2.809.162 3.939.445.297.075.471.372.471.745 0 .198-.099.471-.223.644-.124.173-.223.223-.372.372-.15.15-.223.297-.223.471 0 .198.099.372.198.496.099.124.892 2.141.892 2.141s.372.744.744.744.744-.372.744-.744z"/>
                </svg>
                WhatsApp
              </a>
              <a 
                href="tel:+628211234567" 
                class="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                Telepon
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useMainStore } from '../stores/main'

const store = useMainStore()
</script>