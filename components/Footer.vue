<template lang="pug">
  footer
    a.build-with(href="https://nuxtjs.org")
      img(src="~/assets/images/builtwithnuxt.png" height="20")
    nav
      a.link(href="#") About
      a.link(href="#") Help
      a.link(href="#") Contribute

      
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //
})
</script>

<style lang="sass" scoped>
footer
  height: 80px
  width: 100%
  padding: 0 20%
  display: flex
  justify-content: space-between
  align-items: center
  border-top: 1px solid #eee
  // backdrop-filter: blur(5px)
  background: white

  a
    display: block
    text-decoration: none

  nav
    display: flex

    .link
      padding: 20px
      color: #42b883
      transition: color .2s

      &:hover
        color: #35495e
</style>
