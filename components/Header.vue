<template>
  <header>
    <div class="logo">New Tab</div>
    <div class="user">
      <div class="avatar"></div>
      <div class="username">Kanye</div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="sass">
header
  height: 80px
  width: 100%
  padding: 0 10%
  display: flex
  justify-content: space-between
  align-items: center
  border-bottom: 1px solid #eee
  backdrop-filter: blur(5px)
  // color: white
  position: sticky
  top: 0
  left: 0
  .logo
    text-transform: uppercase
    font-size: 20px
  .user
    display: flex
    align-items: center
    .avatar
      border-radius: 250px
      background: #eee
      height: 40px
      width: 40px
    .username
      padding: 5px 12px
      border-radius: 240px
      margin-left: 10px
      cursor: pointer
      transition: background 0.2s

      &:hover
        background: #eee
</style>
