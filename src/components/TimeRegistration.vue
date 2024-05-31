<template>
    <section class="my-10">
        <div class="text-center">
            <h1 class="text-4xl font-bold mb-5">PERIODE PENGAJUAN JUDUL KP/TA</h1>
        </div>
        <div class="sm:mx-2 md:mx-10">
            <div class="flex flex-col">
                <div class="flex w-full justify-between items-center">
                    <div>
                        <div class="max-w-sm">
                            <!-- SearchBox -->
                            <div class="relative">
                                <div
                                    class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                                    <svg class="flex-shrink-0 size-4 text-gray-600" xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                </div>
                                <input
                                    class="py-2 ps-10 pe-4 block w-full border border-gray-300 rounded-lg focus:border-gray-300 focus:ring-0 focus:ring-opacity-50 focus:ring-offset-0 focus:ring-offset-gray-100 focus:outline-none sm:text-sm"
                                    type="text" placeholder="Cari ..." value="" data-hs-combo-box-input="">
                            </div>
                            <!-- End SearchBox -->
                        </div>
                    </div>
                    <div class="text-end">
                        <button
                            class="ring-1 outline-blue-500  text-blue-500 px-3 py-2 rounded-lg hover:bg-blue-600 hover:text-white text-xs">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
                            </svg>

                        </button>
                    </div>

                </div>
                <div class="overflow-x-auto mt-3">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200 ">
                                <tbody>
                                    <tr class="odd:bg-white even:bg-gray-100 hover:bg-gray-100">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200"
                                            colspan="3">
                                            <h2 class="font-bold text-black text-lg">Periode 1 - Informatika (Kerja
                                                Praktek)</h2>
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
                                            <h2 class="font-bold text-black text-lg">Periode 1 - Informatika (Kerja
                                                Praktek)</h2>
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
                <div class="flex justify-end mt-3">
                    <nav class="flex justify-center items-center gap-x-1">
                        <button type="button"
                            class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                            <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="m15 18-6-6 6-6"></path>
                            </svg>
                            <span aria-hidden="true" class="sr-only">Previous</span>
                        </button>
                        <div class="flex items-center gap-x-1">
                            <span
                                class="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">1</span>
                            <span
                                class="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">of</span>
                            <span
                                class="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">3</span>
                        </div>
                        <button type="button"
                            class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                            <span aria-hidden="true" class="sr-only">Next</span>
                            <svg class="flex-shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6"></path>
                            </svg>
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>