<template>
  <div class="px-2 space-y-2 text-center">
    <NuxtLink to="/"
       class="bg-secondary font-bold text-primary group flex flex-col items-center justify-center px-2 py-2 text-xs rounded-md w-28 h-20 hover:text-primary hover:bg-secondary hover:font-bold transition duration-400"
       aria-current="page">
      <svg
        class="h-6 w-6 mb-3 text-primary group-hover:text-primary"
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.20711 12.7071L2.5 13L2.20711 12.7071C1.81658 13.0976 1.18342 13.0976 0.792894 12.7071L0.440051 13.0599L0.792893 12.7071C0.402369 12.3166 0.402369 11.6834 0.792893 11.2929L11.2929 0.792893C11.6834 0.402369 12.3166 0.402369 12.7071 0.792893L23.2071 11.2929C23.5976 11.6834 23.5976 12.3166 23.2071 12.7071C22.8166 13.0976 22.1834 13.0976 21.7929 12.7071L21.3536 12.2678L20.5 11.4142V12.6213V22.5C20.5 23.0523 20.0523 23.5 19.5 23.5H16.5C15.9477 23.5 15.5 23.0523 15.5 22.5V19.5C15.5 18.3954 14.6046 17.5 13.5 17.5H10.5C9.39543 17.5 8.5 18.3954 8.5 19.5V22.5C8.5 23.0523 8.05229 23.5 7.5 23.5H4.5C3.94772 23.5 3.5 23.0523 3.5 22.5V12.6213V11.4142L2.64645 12.2678L2.20711 12.7071Z"
          fill="currentColor" stroke="currentColor"/>
      </svg>

      Dashboard
    </NuxtLink>


    <NuxtLink to="/2"
       class="text-white font-medium group flex flex-col items-center justify-center text-xs rounded-md w-28 h-20 w-28 h-20 hover:text-primary hover:bg-secondary hover:font-bold transition duration-400">
      <svg
        class="h-6 w-6 mb-3 text-lighter-gray group-hover:text-primary"
        viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.5 3.5H5V3V1.5C5 0.947715 5.44772 0.5 6 0.5C6.55228 0.5 7 0.947715 7 1.5V3V3.5H7.5H16.5H17V3V1.5C17 0.947715 17.4477 0.5 18 0.5C18.5523 0.5 19 0.947715 19 1.5V3V3.5H19.5H21C22.3807 3.5 23.5 4.61929 23.5 6V21C23.5 22.3807 22.3807 23.5 21 23.5H3C1.61929 23.5 0.5 22.3807 0.5 21V6C0.5 4.61929 1.61929 3.5 3 3.5H4.5ZM6 7C4.89543 7 4 7.89543 4 9C4 10.1046 4.89543 11 6 11H18C19.1046 11 20 10.1046 20 9C20 7.89543 19.1046 7 18 7H6Z"
          fill="currentColor" stroke="currentColor"/>
      </svg>

      Wpisy
    </NuxtLink>

    <a href=""
       class="text-white font-medium group flex flex-col items-center justify-center text-xs rounded-md w-28 h-20 w-28 h-20 hover:text-primary hover:bg-secondary hover:font-bold transition duration-400">
      <svg
        class="h-4 w-4 mb-3 text-lighter-gray group-hover:text-primary"
        width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1V7M7 7V13M7 7H13M7 7L1 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>

      Dodaj wpis
    </a>

    <a href=""
       class="text-white font-medium group flex flex-col items-center justify-center px-2 py-2 text-xs rounded-md w-28 h-20 hover:text-primary hover:bg-secondary hover:font-bold transition duration-400 relative">
      <svg xmlns="http://www.w3.org/2000/svg"
           class="h-7 w-7 mb-3 relative text-lighter-gray group-hover:text-primary"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
      </svg>

      Powiadomienia
    </a>

    <a href=""
       class="text-white font-medium group flex flex-col items-center justify-center px-2 py-2 text-xs rounded-md w-28 h-20 hover:text-primary hover:bg-secondary hover:font-bold transition duration-400 relative">
      <svg
        class="h-6 w-6 mb-3 text-lighter-gray group-hover:text-primary"
        viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1.93875 9.12157C0.732681 9.87471 0 11.1955 0 12.6165V28.8786C0 31.1548 1.84683 33 4.125 33H28.875C31.1532 33 33 31.1548 33 28.8786V12.6165C33 11.1955 32.2673 9.87471 31.0612 9.12157L18.6862 1.39392C17.3486 0.558636 15.6514 0.558635 14.3138 1.39392L1.93875 9.12157ZM7.33157 14.113C6.38379 13.4817 5.10325 13.7376 4.4714 14.6846C3.83954 15.6315 4.09565 16.911 5.04343 17.5423L15.3559 24.4113C16.0487 24.8728 16.9513 24.8728 17.6441 24.4113L27.9566 17.5423C28.9043 16.911 29.1605 15.6315 28.5286 14.6846C27.8968 13.7376 26.6162 13.4817 25.6684 14.113L16.5 20.22L7.33157 14.113Z"
                fill="currentColor"/>
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="33" height="33" fill="white"/>
          </clipPath>
        </defs>
      </svg>

      Wiadomości
    </a>

    <a href=""
       class="text-white font-medium group flex flex-col items-center justify-center px-2 py-2 text-xs rounded-md w-28 h-20 hover:text-primary hover:bg-secondary hover:font-bold transition duration-400">
      <svg xmlns="http://www.w3.org/2000/svg"
           class="h-8 w-8 mb-3 text-lighter-gray group-hover:text-primary"
           viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"/>
      </svg>

      Moje dane
    </a>
  </div>
</template>
