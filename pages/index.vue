<template>
  <div class="container">
    <div class="main">
      <div class="greeting">Good morning Kyle. What would you like to do?</div>
    </div>
    <div class="side-section"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: () => ({
    title: 'New Tab',
  }),
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  height: calc(100vh - 80px);
  display: flex;
  /* justify-content: center; */
  /* align-items: center;
  text-align: center; */
  padding: 20px 20%;
  display: grid;
  grid-template-columns: 70% 30%;
}

.greeting {
  font-size: 24px;
  font-weight: 600;
}

.side-section {
  background: #eee;
}
</style>
