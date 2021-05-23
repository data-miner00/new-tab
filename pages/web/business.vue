<template lang="pug">
  .business
    .showing Showing {{ current }} out of {{ total }} results.
    .list-container
      WebList(:sites="sites")
      
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  //
  layout: 'web',
  data: () => ({
    current: 10,
    total: 25,
    sites: [
      {
        name: 'Tesla',
        description: 'This is lorem i[sum,',
        tags: ['technology', 'aesthetic', 'electric'],
        url: 'https://tesla.com',
      },
      {
        name: 'Tesla',
        description: 'This is lorem i[sum,',
        tags: ['technology', 'aesthetic', 'electric'],
        url: 'https://tesla.com',
      },
    ],
  }),
})
</script>

<style lang="sass" scoped>
.showing
  color: gray
  font-size: .75em

  .list
</style>
