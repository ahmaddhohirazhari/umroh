<template>
  <section
    id="home"
    class="pt-20 bg-gradient-to-br from-primary-50 via-white to-gold-50 bg-islamic-pattern min-h-screen flex items-center"
  >
    <div class="container-custom section-padding py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="animate-fade-in-up">
          <div
            class="inline-flex items-center bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            Terpercaya & Berpengalaman 15+ Tahun
          </div>

          <h1
            class="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Wujudkan Impian
            <span class="text-gradient block">Umroh & Haji</span>
            Bersama Kami
          </h1>

          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Rasakan pengalaman spiritual terbaik dengan paket umroh dan haji
            yang dirancang khusus untuk kenyamanan dan ketenangan ibadah Anda.
            Dipercaya ribuan jamaah seluruh Indonesia.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <button class="btn-primary flex items-center justify-center">
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Konsultasi Gratis
            </button>
            <button class="btn-outline flex items-center justify-center">
              <svg
                class="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Lihat Video
            </button>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-8">
            <div class="text-center">
              <div class="text-2xl lg:text-3xl font-bold text-primary-600 mb-2">
                5000+
              </div>
              <div class="text-sm text-gray-600">Jamaah Terlayani</div>
            </div>
            <div class="text-center">
              <div class="text-2xl lg:text-3xl font-bold text-primary-600 mb-2">
                15+
              </div>
              <div class="text-sm text-gray-600">Tahun Pengalaman</div>
            </div>
            <div class="text-center">
              <div class="text-2xl lg:text-3xl font-bold text-primary-600 mb-2">
                99%
              </div>
              <div class="text-sm text-gray-600">Kepuasan Jamaah</div>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="relative animate-fade-in">
          <div class="relative">
            <img
              src="/mekah.jpg"
              alt="Masjidil Haram"
              class="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          <div
            class="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-primary-200 to-gold-200 rounded-2xl -z-10"
          ></div>

          <!-- Floating Cards -->
          <div
            class="absolute top-8 -left-8 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow"
          >
            <div class="flex items-center space-x-3">
              <div
                class="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-primary-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <div>
                <div class="font-semibold text-gray-900">Kualitas Terbaik</div>
                <div class="text-sm text-gray-600">Hotel Bintang 5</div>
              </div>
            </div>
          </div>

          <div
            class="absolute bottom-8 -right-8 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow"
            style="animation-delay: 1s"
          >
            <div class="flex items-center space-x-3">
              <div
                class="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center"
              >
                <svg
                  class="w-6 h-6 text-gold-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <div class="font-semibold text-gray-900">Terpercaya</div>
                <div class="text-sm text-gray-600">Izin Resmi</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
