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
                <img class="h-9" src="/images/kemendikbud.png" alt="Image Description">
                <img class="h-9" src="/images/kampus-merdeka.png" alt="Image Description">
                <img class="h-9" src="/images/logo-unira.png" alt="Image Description">
              </div>
            </div>
            <h4 class="text-xl mt-3 font-bold">Selamat datang di MONTAK</h4>
            <h1 class="block text-xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight">
              Aplikasi <span class="text-blue-600">Monitoring</span> Tugas Akhir dan Kerja Praktek</h1>
            <p class="mt-3 text-xl text-gray-800">
              Montak adalah platform manajemen tugas akhir dan kerja praktek yang dirancang untuk mempermudah
              pengelolaan data dan proses administrasi tugas akhir dan kerja praktek mahasiswa.
            </p>

            <!-- Buttons -->
            <div class="mt-7 grid gap-3 w-full sm:inline-flex">
              <a class="px-6 py-3 inline-flex justify-center items-center gap-x-2 font-semibold rounded-lg border border-transparent bg-gray-600 text-white hover:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none text-md"
                href="#">
                Ajukan Judul TA/KP
              </a>

            </div>
          </div>

          <div class="relative ms-4">
            <img class="w-28 absolute -z-20 mt-96" src="/images/patern.svg" alt="patern">
            <img class="w-full sm:block hidden" src="/images/hero-img.png" alt="hero-img">


            <!-- SVG-->
            <div class="absolute bottom-0 start-0 hidden sm:block">
              <svg class="w-2/3 ms-auto h-auto text-white" width="630" height="451" viewBox="0 0 630 451" fill="none"
                xmlns="http://www.w3.org/2000/svg">
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
    <section class="mt-10 my-auto mx-auto bg-gradient-to-b from-gray-100 to-white">
      <!-- Features -->
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <!-- Grid -->
        <div class="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
          <div class="lg:col-span-4">
            <!-- Stats -->
            <div class="lg:pe-6 xl:pe-12">
              <p class="text-6xl font-bold leading-10 text-blue-600">
                2024
                <span
                  class="ms-1 inline-flex items-center gap-x-1 bg-gray-200 font-medium text-gray-800 text-xs leading-4 rounded-full py-0.5 px-2">
                  <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" viewBox="0 0 16 16">
                    <path
                      d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                  </svg>
                  New Release
                </span>
              </p>
              <p class="mt-2 sm:mt-3 text-gray-500">
                Montak akan terus melakukan pembaruan dan peningkatan fitur untuk memudahkan pengguna dalam mengelola
                tugas akhir dan kerja praktek.
              </p>
            </div>
            <!-- End Stats -->
          </div>
          <!-- End Col -->

          <div
            class="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-300 lg:before:">
            <div class="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-3 sm:gap-8">
              <div>
                <p class="text-3xl font-semibold text-blue-600">99+</p>
                <p class="mt-1 text-gray-500">Pengunjung Bulan Ini</p>
              </div>
              <div>
                <p class="text-3xl font-semibold text-blue-600">144+</p>
                <p class="mt-1 text-gray-500">Proposal Penelitian yang diajukan</p>
              </div>
              <div>
                <p class="text-3xl font-semibold text-blue-600">50+</p>
                <p class="mt-1 text-gray-500">Proposal Didanai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-gradient-to-b from-[#001c3b] to-[#00215E] text-white" id="features">
      <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <div class="lg:w-3/4">
            <h2 class="text-3xl text-white font-bold lg:text-4xl">
              Kolaborasi yang lebih baik dengan Montak
            </h2>
            <p class="mt-3 text-white">
              Jangan khawatir dengan judul tugas akhir dan kerja praktek yang sama, Montak akan membantu anda untuk
              menemukan judul yang sesuai dengan minat dan keahlian anda.
            </p>
            <p class="mt-5">
              <a class="inline-flex items-center gap-x-1 font-medium text-blue-600 dark:text-blue-500" href="#">
                Selengkapnya
                <svg class="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </p>
          </div>
          <div class="space-y-6 lg:space-y-10">
            <h4 class="text-2xl font-bold">Tahapan Pengajuan Proposal dan Kerja Praktek</h4>
            <div class="flex">
              <!-- Icon -->
              <span
                class="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-[#FC4100] text-white shadow-sm mx-auto ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>


              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold text-white">
                  Memprogram Kerja Praktek/Tugas Akhir
                </h3>
                <p class="mt-1 text-white">
                  Langkah pertama yang harus dilakukan adalah memprogram kerja praktek atau tugas akhir melalui SIMAT.
                  Khusus kerja Praktek hanya ada di Fakultas Teknik.
                </p>
              </div>
            </div>
            <div class="flex">
              <!-- Icon -->
              <span
                class="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
                </svg>
              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                  Telah Melunasi Tagihan di SIMAT
                </h3>
                <p class="mt-1 text-gray-600">
                  Untuk dapat melakukan pengajuan proposal diwajibkan untuk melunasi tagihan keuangan terlebih dahulu di
                  SIMAT.
                </p>
              </div>
            </div>
            <div class="flex">
              <!-- Icon -->
              <span
                class="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>

              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                  Heregistrasi Pengajuan Proposal dan Kerja Praktek
                </h3>
                <p class="mt-1 text-gray-600">
                  Heregistrasi untuk pengajuan proposal dan kerja praktek dapat dilakukan melalui masing-masing
                  fakultas.
                </p>
              </div>
            </div>
            <div class="flex">
              <!-- Icon -->
              <span
                class="flex-shrink-0 inline-flex justify-center items-center size-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
              </span>
              <div class="ms-5 sm:ms-8">
                <h3 class="text-base sm:text-lg font-semibold text-gray-800">
                  Megupload Judul Proposal dan Kerja Praktek di Montak
                </h3>
                <p class="mt-1 text-gray-600">
                  Setelah melakukan heregistrasi, selanjutnya mahasiswa dapat mengupload judul proposal dan kerja
                  praktek
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="my-10">
      <div class="text-center">
        <h1 class="text-4xl font-bold mb-5">PERIODE PENGAJUAN JUDUL KP/TA</h1>
      </div>
      <div class="mx-14">
        <div class="flex flex-col">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200 ">
                  <tbody>
                    <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                        colspan="3">
                        <h2 class="font-bold text-black text-lg">Periode 1 - Informatika (Kerja Praktek)</h2>
                      </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-bold">
                        Tanggal Pendaftaran
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-bold">
                        Batas Akhir Pendaftaran
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-bold">
                        Pelaksanaan Ujian KP/TA
                      </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        13 Maret 2024
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        23 Maret 2024
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        25 sd. 30 Maret 2024
                      </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                        colspan="3">
                        <h2 class="font-bold text-black text-lg">Periode 1 - Informatika (Kerja Praktek)</h2>
                      </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-bold">
                        Tanggal Pendaftaran
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-bold">
                        Batas Akhir Pendaftaran
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-bold">
                        Pelaksanaan Ujian KP/TA
                      </td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        13 Maret 2024
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        23 Maret 2024
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        25 sd. 30 Maret 2024
                      </td>
                    </tr>
                  </tbody>
                </table>
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
import Footer from './Footer.vue';
</script>