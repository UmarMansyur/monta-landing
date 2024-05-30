<template>
  <Header></Header>
  <main id="content" class="mt-3">
    <!-- Hero -->
    <section class="hero-section">
      <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 sm:mt-10">
      
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 justify-between md:items-center">
          <div>
            <div class="flex mx-auto">
              <div class="bg-gray-100 rounded-full px-4 py-3 flex gap-2">
                <img class="w-9 h-w-9" src="/images/kemendikbud.png" alt="Image Description">
                <img class="w-10 h-9" src="/images/kampus-merdeka.png" alt="Image Description">
                <img class="h-w-9 w-9" src="/images/logo-unira.png" alt="Image Description">
              </div>
            </div>
            <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">Selamat Datang di <span class="text-blue-600">MONTAK</span></h1>
            <p class="mt-3 text-xl text-gray-800 dark:text-neutral-400">
              Segera cek waktu pendafataran Tugas Akhir dan Kerja Praktek!
            </p>

            <!-- Buttons -->
            <div class="mt-7 grid gap-3 w-full sm:inline-flex">
              <a class="py-3 px-9 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-600 text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#">
                Daftar Sekarang
              </a>

            </div>
          </div>

          <div class="relative ms-4">
            <img class="w-28 absolute -z-20 mt-96" src="/images/patern.svg" alt="patern">
            <img class="w-full sm:block hidden" src="/images/hero-img.png" alt="hero-img">
           

            <!-- SVG-->
            <div class="absolute bottom-0 start-0 hidden sm:block">
              <svg class="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451"
                viewBox="0 0 630 451" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="531" y="352" width="99" height="99" fill="currentColor" />
                <rect x="140" y="352" width="106" height="99" fill="currentColor" />
                <rect x="482" y="402" width="64" height="49" fill="currentColor" />
                <rect x="433" y="402" width="63" height="49" fill="currentColor" />
                <rect x="384" y="352" width="49" height="50" fill="currentColor" />
                <rect x="531" y="328" width="50" height="50" fill="currentColor" />
                <rect x="99" y="303" width="49" height="58" fill="currentColor" />
                <rect x="99" y="352" width="49" height="50" fill="currentColor" />
                <rect x="99" y="392" width="49" height="59" fill="currentColor" />
                <rect x="44" y="402" width="66" height="49" fill="currentColor" />
                <rect x="234" y="402" width="62" height="49" fill="currentColor" />
                <rect x="334" y="303" width="50" height="49" fill="currentColor" />
                <rect x="581" width="49" height="49" fill="currentColor" />
                <rect x="581" width="49" height="64" fill="currentColor" />
                <rect x="482" y="123" width="49" height="49" fill="currentColor" />
                <rect x="507" y="124" width="49" height="24" fill="currentColor" />
                <rect x="531" y="49" width="99" height="99" fill="currentColor" />
              </svg>
            </div>
            <!-- End SVG-->
          </div>
          <!-- End Col -->
        </div>
      </div>
    </section>
    <section class="bg-slate-50 mt-10 my-auto mx-auto">
      <!-- Features -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
          <div class="lg:col-span-4">
            <!-- Stats -->
            <div class="lg:pe-6 xl:pe-12">
              <p class="text-6xl font-bold leading-10 text-blue-600">
                92%
                <span
                  class="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-800 text-xs leading-4 rounded-full py-0.5 px-2">
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path
                      d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                  +7% this month
                </span>
              </p>
              <p class="mt-2 sm:mt-3 text-gray-500">of U.S. adults have bought from businesses using Space</p>
            </div>
            <!-- End Stats -->
          </div>
          <!-- End Col -->

          <div
            class="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:before:">
            <div class="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
              <!-- Stats -->
              <div>
                <p class="text-3xl font-semibold text-blue-600">99.95%</p>
                <p class="mt-1 text-gray-500">in fulfilling orders</p>
              </div>
              <!-- End Stats -->

              <!-- Stats -->
              <div>
                <p class="text-3xl font-semibold text-blue-600">2,000+</p>
                <p class="mt-1 text-gray-500">partner with Preline</p>
              </div>
              <!-- End Stats -->

              <!-- Stats -->
              <div>
                <p class="text-3xl font-semibold text-blue-600">85%</p>
                <p class="mt-1 text-gray-500">this year alone</p>
              </div>
              <!-- End Stats -->
            </div>
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Features -->
    </section>
  </main>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
</script>