<template lang="pug">
  main.main
    section.intro
      h1 Web Repository

      p
        | The webpage can be categorized and labelled any a variety of ways.
        | The webpage can be categorized and labelled any a variety of ways.
        | The webpage can be categorized and labelled any a variety of ways.

    section.usage
      h1 Typical Usage

      ul
        li Add a new website
        li View details of an existing website
        li Edit an existing website
        li Remove an existing website

      h2 Add a website of interest
      
      
    section.recomm
      h1 Recommended

      WebList(:sites="sites")
    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'web',
  data: () => ({
    sites: [{}],
  }),
  mounted(): void {
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
section
  margin-bottom: 50px
  & > *
    margin-bottom: 20px


  ul
    padding: 20px 50px
    background: #fafafa
    display: flex
    flex-direction: column
    row-gap: 5px
</style>
