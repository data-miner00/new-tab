<template>
  <div class="root" tabindex="0" @keydown.ctrl="navigateSearch">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    // On keydown search function
    navigateSearch() {
      const searchbar: HTMLElement | null = document.getElementById('searchbar')
      searchbar && searchbar.focus()
    },
  },
})
</script>

<style lang="sass">
@import "~/assets/sass/layout"

.root
  // background-image: url(~assets/images/background2.jpg)
  // background-size: cover
  // background-attachment: fixed
  // background-repeat: no-repeat
  // background-position: center
  background: white
  min-height: 100vh
</style>
