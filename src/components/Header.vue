<template>
  <!-- ========== HEADER ========== -->
  <header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full text-sm fixed top-0 border-b bg-gradient-to-b from-[#001c3b] to-[#00215E] text-white py-1 sm:py-1">
    <nav class="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
      aria-label="Global">
      <div class="flex items-center justify-between">
        <a class="flex-none text-xl font-extrabold" href="#" aria-label="Brand">MONTAK</a>
        <div class="sm:hidden">
          <button type="button"
            class="hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none"
            data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24"
              height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>
      <div id="navbar-collapse-with-animation"
        class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-end py-2 md:py-0 sm:ps-7">
          <a class="py-3 ps-px sm:px-3 font-medium" :class="$route.path == '/' ? 'font-bold' : 'font-medium'" href="#" aria-current="page">Beranda</a>
          <a class="py-3 ps-px sm:px-3  font-medium" href="#">Penelitian Dosen</a>
          <a class="py-3 ps-px sm:px-3  font-medium" href="#">Biaya</a>
          <a class="py-3 ps-px sm:px-3  font-medium" href="#">Penelitian Dosen</a>
          <a class="py-3 ps-px sm:px-3  font-medium" href="#">Panduan</a>



          <a class="flex items-center gap-x-2  font-medium hover sm:border-s sm:border-white/30 py-2 md:py-0 sm:my-6 sm:ps-6"
            href="#">
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            LOGIN
          </a>
          <button type="button"
            class="sm:ms-0 md:ms-3 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none ">
            SIMAT
          </button>
        </div>
        <!-- <div class="flex flex-col sm:flex-row sm:items-center sm:justify-start py-2 md:py-0 sm:ps-7">
          <a class="py-3 ps-px sm:px-3  font-medium/80 hover" href="#">Tentang</a>
          <a class="py-3 ps-px sm:px-3  font-medium/80 hover" href="#">Kontak</a>
        </div> -->
      </div>
    </nav>
  </header>
</template>