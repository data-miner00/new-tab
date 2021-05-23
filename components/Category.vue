<template lang="pug">
  nuxt-link(:to="to")
    .category(:class="{ 'active': active }")
      .chevron
      .category-title {{ title }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
  },
  computed: {
    active() {
      return this.title == this.$store.state.web.page
    },
    to() {
      if (this.title == 'Main') return '/web'
      return '/web/' + this.title
    },
  },
})
</script>

<style lang="sass" scoped>
.category
  display: flex
  height: 28px
  align-items: center
  border-radius: 10px
  padding: 30px 0
  .category-title
    text-transform: uppercase
    font-weight: 500

  &.active
    background: #fafafa
</style>
