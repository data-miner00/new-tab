<template lang="pug">
  .category
    .row
      .showing Showing {{ current }} out of {{ total }} results. {{ category }}
      .btn Create New
    .list-container
      WebList(:sites="sites")
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'web',
  data: () => ({
    current: 0,
    total: 0,
    sites: [{}],
  }),
  async asyncData({ params }) {
    const category = params.category
    return { category }
  },
  mounted(): void {
    this.current = 10
    this.total = 25
    this.sites = [
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
    ]
  },
})
</script>

<style lang="sass" scoped>
.row
  display: flex
  justify-content: space-between
  align-items: center
  font-size: .75em

.showing
  color: gray
.btn
  text-transform: uppercase
  border: 1px solid #eee
  padding: 5px 8px
</style>
