<template>
  <div class="font-sans antialiased h-screen">
    <div class="h-screen flex overflow-hidden bg-gray-50">
      <static-sidebar />

      <div class="flex-1 overflow-auto focus:outline-none" tabindex="0">
        <div class="relative flex-shrink-0 hidden md:flex h-16">
          <!-- Bar -->
          <div class="flex mx-4 flex justify-end sm:mx-6 lg:mx-8 w-full border-b border-gray-300">
            <div class="flex items-center md:ml-6">

              <!-- Notifications -->
              <a href=""
                 class="relative p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                <span class="sr-only">View notifications</span>

                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>

              </a>

             <profile-dropdown />
            </div>
          </div>
        </div>

        <main class="flex-1 pb-8 z-0 overflow-y-auto min-h-screen">
          <div class="md:mt-8 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-3 pb-12">
            <Nuxt />
          </div>
        </main>

        <site-footer />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>
