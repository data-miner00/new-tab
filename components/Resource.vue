<template>
  <a :href="url" class="resource" target="_blank">
    <div class="resource-icon">
      <img :src="src" alt="" />
    </div>
    <div class="resource-desc">
      <div class="resource-title">{{ title }}</div>
      <div class="resource-domain">{{ domain }}</div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: String,
    title: String,
    domain: String,
    url: String,
  },
  computed: {
    src() {
      return `favicons/${this.icon}.png`
    },
  },
})
</script>

<style lang="sass" scoped>
.resource
  height: 60px
  flex-basis: 45%
  background: #fafafa
  display: flex
  padding: 5px
  border-radius: 10px
  text-decoration: none

  &-icon
    border-radius: 250px
    height: 50px
    width: 50px
    display: grid
    place-items: center
    img
      display: block

  &-desc
    padding: 8px 15px

  &-domain
    font-size: 12px
    color: #bdbdbd
</style>
