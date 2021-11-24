<template>
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-30">
      <div class="flex flex-col flex-grow bg-primary pt-5 pb-4 overflow-hidden">
        <div class="flex items-center justify-center flex-shrink-0 px-4">
          <img
            class="w-24"
            src="/logo1.svg"
            alt="Hemo Dzienniczek"
          >
        </div>

        <nav
          class="mt-5 flex-1 flex flex-col overflow-hidden"
          aria-label="Sidebar"
        >
          <nav-items />
        </nav>
      </div>
    </div>
  </div>
</template>
