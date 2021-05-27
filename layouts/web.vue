<template lang="pug">
  DefaultLayout
    .layout__web
      .layout__web__leftbar
        Category(
          v-for="(category, index) in links" 
          :key="index" 
          :title="category" 
          @click.native="setPageState(category)"
        )
      .layout__web__content
        Nuxt
  
</template>

<script lang="ts">
import Vue from 'vue'
import DefaultLayout from './default.vue'
export default Vue.extend({
  //
  components: { DefaultLayout },
  methods: {
    setPageState(category: string) {
      this.$store.commit('web/setPage', category)
    },
  },
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
.layout__web
  @include pageBaseStyle
  min-height: 80vh
  display: grid
  grid-template-columns: 320px 1fr

  &__leftbar
    padding-right: 32px
  &__content
    padding: 0 16px
</style>
