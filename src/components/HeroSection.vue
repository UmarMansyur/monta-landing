<template>
    <section class="hero-section">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 sm:mt-12">
            <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 justify-between md:items-center">
                <div>
                    <div class="flex mx-auto">
                        <div class="bg-gray-100 rounded-full px-4 py-3 flex gap-2">
                            <img class="h-9" src="/images/kemendikbud.png" alt="Image Description">
                            <img class="h-9" src="/images/kampus-merdeka.png" alt="Image Description">
                            <img class="h-9" src="/images/logo-unira.png" alt="Image Description">
                        </div>
                    </div>
                    <h4 class="text-xl mt-3 font-bold sm:text-xl">Selamat datang di MONTAK</h4>
                    <h1 class="block text-4xl sm:text-xl font-bold text-gray-800 lg:text-5xl lg:leading-tight">
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
                        <svg class="w-2/3 ms-auto h-auto text-white" width="630" height="451" viewBox="0 0 630 451"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
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
</template>