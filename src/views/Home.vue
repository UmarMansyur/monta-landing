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
    <section>
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
<footer class="mt-auto bg-gray-900 w-full dark:bg-neutral-950">
  <div class="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
    <!-- Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
      <div class="col-span-full lg:col-span-1">
        <a class="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">Brand</a>
      </div>
      <!-- End Col -->

      <div class="col-span-1">
        <h4 class="font-semibold text-gray-100">Product</h4>

        <div class="mt-3 grid space-y-3">
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Pricing</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Changelog</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Docs</a></p>
        </div>
      </div>
      <!-- End Col -->

      <div class="col-span-1">
        <h4 class="font-semibold text-gray-100">Company</h4>

        <div class="mt-3 grid space-y-3">
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">About us</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Blog</a></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Careers</a> <span class="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">We're hiring</span></p>
          <p><a class="inline-flex gap-x-2 text-gray-400 hover:text-gray-200 dark:text-neutral-400 dark:hover:text-neutral-200" href="#">Customers</a></p>
        </div>
      </div>
      <!-- End Col -->

      <div class="col-span-2">
        <h4 class="font-semibold text-gray-100">Stay up to date</h4>

        <form>
          <div class="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-lg p-2 dark:bg-neutral-900">
            <div class="w-full">
              <label for="hero-input" class="sr-only">Search</label>
              <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600" placeholder="Enter your email">
            </div>
            <a class="w-full sm:w-auto whitespace-nowrap p-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
              Subscribe
            </a>
          </div>
          <p class="mt-3 text-sm text-gray-400">
            New UI kits or big discounts. Never spam.
          </p>
        </form>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->

    <div class="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div class="flex justify-between items-center">
        <p class="text-sm text-gray-400 dark:text-neutral-400">© 2022 Preline. All rights reserved.</p>
      </div>
      <!-- End Col -->

      <!-- Social Brands -->
      <div>
        <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </a>
        <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
          </svg>
        </a>
        <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg>
        </a>
        <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a class="size-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.362 10.11c0 .926-.756 1.681-1.681 1.681S0 11.036 0 10.111C0 9.186.756 8.43 1.68 8.43h1.682v1.68zm.846 0c0-.924.756-1.68 1.681-1.68s1.681.756 1.681 1.68v4.21c0 .924-.756 1.68-1.68 1.68a1.685 1.685 0 0 1-1.682-1.68v-4.21zM5.89 3.362c-.926 0-1.682-.756-1.682-1.681S4.964 0 5.89 0s1.68.756 1.68 1.68v1.682H5.89zm0 .846c.924 0 1.68.756 1.68 1.681S6.814 7.57 5.89 7.57H1.68C.757 7.57 0 6.814 0 5.89c0-.926.756-1.682 1.68-1.682h4.21zm6.749 1.682c0-.926.755-1.682 1.68-1.682.925 0 1.681.756 1.681 1.681s-.756 1.681-1.68 1.681h-1.681V5.89zm-.848 0c0 .924-.755 1.68-1.68 1.68A1.685 1.685 0 0 1 8.43 5.89V1.68C8.43.757 9.186 0 10.11 0c.926 0 1.681.756 1.681 1.68v4.21zm-1.681 6.748c.926 0 1.682.756 1.682 1.681S11.036 16 10.11 16s-1.681-.756-1.681-1.68v-1.682h1.68zm0-.847c-.924 0-1.68-.755-1.68-1.68 0-.925.756-1.681 1.68-1.681h4.21c.924 0 1.68.756 1.68 1.68 0 .926-.756 1.681-1.68 1.681h-4.21z"/>
          </svg>
        </a>
      </div>
      <!-- End Social Brands -->
    </div>
  </div>
</footer>
<!-- ========== END FOOTER ========== -->
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
</script>