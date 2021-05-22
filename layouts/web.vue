<template lang="pug">
  DefaultLayout
    .web
      h4 Web Repository
      .container
        .leftbar
          Category(v-for="(category, index) in links" :key="index" :title="category")
        .content
          Nuxt
  
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultLayout from './default.vue'
export default Vue.extend({
  //
  components: { DefaultLayout },

  computed: {
    links() {
      return [
        'Main',
        'Business', // crypto, stocks, finance
        'Technology', //
        'Commerce', //
        'Language',

        'Utility',
        'Entertainment', // Game, Image, Streaming, Social
        'Information', // News, Academic, health

        'Others',
      ]
    },
  },
})
</script>

<style lang="sass" scoped>
@import "../assets/sass/_mixins"
.web
  @include pageBaseStyle

  .container
    width: 100%
    min-height: 80vh
    display: flex
    margin-top: 32px

    .leftbar
      flex-basis: 320px
      padding-right: 32px
    .content
      flex-grow: 1
      background: pink
</style>
