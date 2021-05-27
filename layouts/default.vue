<template>
  <div class="root" tabindex="0" @keydown.ctrl="navigateSearch">
    <Header />
    <Nuxt v-if="!$slots.default" />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    // On keydown search function
    navigateSearch(evt: any) {
      if (evt.key == '/') {
        const searchbar: HTMLInputElement = document.getElementById(
          'searchbar'
        ) as HTMLInputElement
        searchbar &&
          (() => {
            searchbar.value = ''
            searchbar.focus()
          })()
      }
    },
  },
})
</script>

<style lang="sass">
@import "~/assets/sass/global"

.root
  // background-image: url(~assets/images/background2.jpg)
  // background-size: cover
  // background-attachment: fixed
  // background-repeat: no-repeat
  // background-position: center
  background: white
  min-height: 100vh
  color: #2F495E
</style>
