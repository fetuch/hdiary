<template>
  <div class="max-w-5xl mx-auto sm:px-6 lg:px-8 xl:px-0">
    <pre>{{ $auth.user }}</pre>

    <div class="flex items-center h-12 mt-6 mb-2 pl-2">
      <span class="font-extrabold text-primary text-lg">Historia&nbsp;</span>
      <span class="text-secondary text-lg">wpisów</span>


      <a
        href=""
        class="bg-white h-10 justify-center px-5 text-base tracking-tight ml-auto mr-2 inline-flex items-center px-4 py-2 border border-primary rounded-md font-semibold text-xs text-primary tracking-widest hover:bg-gray-50 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-300 hover:shadow-md"
        style="letter-spacing: normal;font-weight: 500;"
      >
        <svg
          class="mr-2"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8333 5.83331H17.5M17.5 5.83331V12.5M17.5 5.83331L10.8333 12.5L7.5 9.16665L2.5 14.1666"
            stroke="#001965"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 17.5H2.5V3.75"
            stroke="#001965"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
        Widok wykresu
      </a>

      <NuxtLink to="/entries/create"
                class="bg-primary h-10 justify-center px-5 text-base tracking-tight inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-300 hover:shadow-md"
                style="letter-spacing: normal;font-weight: 500;"
      >
        <svg
          class="mr-2"
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 1.25V8M8.5 8V14.75M8.5 8H15.25M8.5 8L1.75 8"
            stroke="#9ACA3C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Dodaj wpis
      </NuxtLink>
    </div>

    <div class="flex flex-col">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <entries-table :entries="entries"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    async asyncData({ app }) {
      const entries = await app.$axios.$get('/entries')

      return { entries: entries.data }
    },

    data() {
      return {
        entries: []
      }
    },
  }
</script>
