<template>
  <div
    class="min-h-screen flex flex-col sm:justify-center items-center pt-6 px-6 sm:pt-0"
    style="background: linear-gradient(180deg, #001965 50%, #9ACA3C 50%);"
  >
    <div class="w-20">
      <img
        src="/logo-white.png"
        alt=""
      >
    </div>

    <div class="w-full sm:max-w-md mt-6 p-6 lg:p-10 bg-white shadow-md overflow-hidden rounded-lg mb-6">

      <div>
        <div class="flex justify-center mb-3"><span class="text-blue-1000 text-2xl font-black">Zaloguj się</span></div>

        <form method="POST" action="">
          <div class="flex rounded-md shadow-sm">
            <input
              v-model="email"
              type="email"
              value=""
              placeholder="email"
              class="flex-1 min-w-0 block w-full px-3 py-2 focus:ring-blue-1000 focus:border-blue-1000 sm:text-sm border-gray-300 rounded-md"
              required autofocus
            />
          </div>

          <div class="mt-3">
            <div class="flex rounded-md shadow-sm">
              <input
                v-model="password"
                type="password"
                value=""
                placeholder="hasło"
                class="flex-1 min-w-0 block w-full px-3 py-2 focus:ring-blue-1000 focus:border-blue-1000 sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          <!-- Remember Me -->
          <div class="block my-3">
            <label for="remember_me" class="inline-flex items-center">
              <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-blue-1000 shadow-sm focus:border-blue-1000 focus:ring focus:ring-blue-1000 focus:ring-opacity-50" name="remember">
              <span class="ml-2 text-xs text-gray-600">Zapamiętaj mnie</span>
            </label>
          </div>

          <button
            type="submit"
            class="w-full bg-green-1000 text-blue-1000 text-sm font-bold py-2 px-3 rounded-md"
            @click.prevent="submit"
          >
            Zaloguj
          </button>

          <div class="flex items-center justify-center mt-3">
            <a class="underline text-xs text-gray-600 hover:text-gray-900" href="">
              Nie pamiętasz hasła?
            </a>
          </div>
        </form>
      </div>

      <div class="flex justify-center my-4">
        lub
      </div>

      <div>
        <div class="text-center mb-3">
          <div class="text-blue-1000 text-2xl font-black">Zarejestruj się</div>
          <div class="text-gray-600 text-xs">używając danych od lekarza.</div>
        </div>

        <form method="POST" action="">
          <div class="flex rounded-md shadow-sm">
            <input
              name="access_key"
              value=""
              placeholder="kod od lekarza"
              class="flex-1 min-w-0 block w-full px-3 py-2 focus:ring-blue-1000 focus:border-blue-1000 sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <button type="submit" class="w-full bg-blue-1000 text-green-1000 text-sm font-bold py-2 px-3 mt-3 rounded-md">Dalej</button>
        </form>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  auth: false,
  layout: 'guest',

  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    async submit() {
      await this.$auth.loginWith('laravelSanctum', {
        data: {
          email: this.email,
          password: this.password,
        },
      })

      this.$router.push('/')
    }
  }
}
</script>
