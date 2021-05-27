<template lang="pug">
  .list
    table
      thead
        tr.table-head
          th.index-label.index Index
          th.website-label Website
          th.tags-label Tags
          th.action-label
          th.action-label
      tbody
        tr(v-for="(site, index) in sites" :key="index")
          td.index {{ index + 1 }}.
          td
            .website
              div
                img.favicon(:src="`/favicons/${site.icon}.png`")
              div {{ site.name }}

          td.tags #[WebTag(v-for="tag in site.tags" :key="tag" :tag="tag")]
          td
            a(:href="site.url" target="_blank") Visit
          td
            NuxtLink(:to="$router.history.current.path + `/${site.name}`")
              fa(icon="info-circle")
          
            
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    sites: Array,
  },
})
</script>

<style lang="sass" scoped>
.list

  padding: 20px 0

  table
    border-radius: 10px
    border-collapse: collapse

    overflow: hidden

  thead
    background: #fafafa
    text-align: left

    th
      padding: 20px 0
      font-size: .875em

  .index
    padding-left: 40px

  .index-label
    width: 140px
  .website-label
    width: 200px
    padding-left: 10px
  .tags-label
    width: 300px
    padding-left: 10px
  .action-label
    width: 50px

  .website
    display: flex
    align-items: center

    .favicon
      margin-right: 10px

  .tags
    display: flex
    flex-wrap: wrap
    gap: 5px

  tbody
    td
      padding: 10px

    // &:nth-child(even) tr:nth-child(odd)
    // background-color: red


    &:nth-child(even) tr:nth-child(even)
        background-color: #fafafa
</style>
