<template lang="pug">
  a.individual(:href="url" target="_blank")
    .favicon
      div
        img(:src="src")
    .description
      span.name {{ name | snippet }}
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: String,
    tags: Array,
    url: String,
    icon: String,
  },
  computed: {
    src() {
      return `./favicons/${this.icon}.png`
    },
  },
  filters: {
    snippet(value: string) {
      return value.length > 16 ? value.slice(0, 13) + '...' : value
    },
  },
})
</script>

<style lang="sass" scoped>
a.individual
  width: 112px
  height: 112px
  border-radius: 5px
  display: inline-block
  text-decoration: none
  color: inherit
  background: #fafafa
  transition: background .2s

  .favicon
    height: 48px
    width: 48px
    border-radius: 250px
    background: white
    display: grid
    place-items: center
    margin: 16px auto 0

    img
      display: block

  .description
    text-align: center
    font-size: 13px
    margin: 6px 0 0
    padding: 2px 8px

  &:hover
    background: rgba(0, 0, 0, .1)
</style>
