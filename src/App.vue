<template>
  <div id="app">
    <AppHeader />
    <main>
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import PackagesSection from './components/PackagesSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<style>
#app {
  min-height: 100vh;
}
</style>