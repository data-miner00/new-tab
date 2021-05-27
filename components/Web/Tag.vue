<template lang="pug">
  .tag(:style="{background: randomColor}") {{ tag }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['tag'],
  computed: {
    randomColor() {
      return '#' + Math.random().toString().slice(2, 8)
    },
  },
})
</script>

<style lang="sass" scoped>
.tag
  border-radius: 25px
  padding: 5px 8px
  background: orange
  font-size: .625em
  color: white
</style>
