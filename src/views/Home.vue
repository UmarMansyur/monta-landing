<template>
  <Header></Header>
  <main id="content" class="mt-3">
    <!-- Hero -->
    <HeroSection />
    <InformationCard />
    <RegistrationStep />
    <TimeRegistration />
    <section class="bg-gradient-to-b from-gray-100 to-white">
      <div class="w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="max-w-full mx-auto text-center mb-10 lg:mb-14">
          <h2 class="text-2xl font-bold md:text-4xl md:leading-tight">PERTANYAAN YANG SERING DI AJUKAN</h2>
          <p class="mt-1 text-gray-600">Jika ada pertanyaan lebih lanjut, silahkan hubungi kami.</p>
        </div>
        <div class="max-w-full grid grid-cols-2 mx-auto gap-x-10">
          <div class="hs-accordion-group">
            <div class="hs-accordion hs-accordion-active:bg-white bg-white shadow-sm rounded-xl p-6 active"
              id="hs-basic-with-title-and-arrow-stretched-heading-one">
              <button
                class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition"
                aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                Apakah MONTAK dapat diakses oleh semua fakultas di Universitas Madura?
                <div class="bg-gray-100 p-3 rounded-full">
                  <svg
                    class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                  <svg
                    class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m18 15-6-6-6 6" />
                  </svg>
                </div>
              </button>
              <div id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                <p class="text-gray-800 text-sm">
                  Ya, MONTAK dapat diakses oleh semua fakultas di Universitas Madura. Gunakan akun yang telah terdaftar di SIMAT Universitas Madura untuk masuk ke MONTAK.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
  <!-- ========== FOOTER ========== -->
  <Footer></Footer>
  <!-- ========== END FOOTER ========== -->
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import HeroSection from '../components/HeroSection.vue';
import InformationCard from '../components/InformationCard.vue';
import RegistrationStep from '../components/RegistrationStep.vue';
import TimeRegistration from '../components/TimeRegistration.vue';
import Footer from './Footer.vue';
</script>