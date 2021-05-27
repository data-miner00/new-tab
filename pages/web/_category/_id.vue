<template lang="pug">
  .details-page 
    .back-arrow
      .back-arrow-wrap
        fa(icon="arrow-left")
    .site-details
      .site-details__title
        .row
          img(:src="icon" width="24" height="24")
          h1 {{ name }}
        .title__url {{ url }}
      .site-details__preview
        img(:src="snapshot" width="800")
      .site-details__details
        p.details__description {{ description }}
        .row.mr
          .details__language #[fa(icon="globe")] {{ language }}
          .details__tags
            WebTag(
              v-for="tag in tags"
              :key="tag"
              :tag="tag"
            )
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'web',
  data: () => ({
    id: '',
    name: '',
    icon: '',
    description: '',
    snapshot: '',
    location: '',
    technology: '',
    tags: [''],
    url: '',
    language: '',
  }),
  mounted(): void {
    const id: string = this.$route.params.id
    this.id = id
    this.name = 'Tesla'
    this.icon = '/favicons/tesla.png'
    this.description =
      "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California. Tesla's current products include electric cars, battery energy storage from home to grid-scale, solar panels and solar roof tiles, as well as other related products and services. In 2020, Tesla had the highest sales in the plug-in and battery electric passenger car segments, capturing 16% of the plug-in market and 23% of the battery-electric market. Through its subsidiary Tesla Energy, the company develops and is a major installer of solar photovoltaic energy generation systems in the United States. Tesla Energy is also one of the largest global suppliers of battery energy storage systems, with 3 GWh of battery storage supplied in 2020."
    this.tags = ['technology', 'aesthetic']
    this.url = 'https://www.tesla.com'
    this.language = 'English'
    this.snapshot = '/preview/tesla_20210527.png'
  },
})
</script>

<style lang="sass" scoped>
.row
  display: flex
  align-items: center
  & > *
    display: block
  h1
    margin-left: 20px

.back-arrow
  background: #fafafa
  border-radius: 250px
  height: 50px
  width: 50px
  display: grid
  place-items: center
  transition: all .2s
  cursor: pointer
  &-wrap
    width: fit-content

  &:hover
    background: #eee
    // color: purple
.site-details
  padding-top: 20px

  &__title
    .title__url
      font-size: .75em
      color: gray
      text-transform: uppercase

  &__preview
    margin-top: 30px

  &__details
    margin-top: 30px
    .details__description
    .mr
      padding: 30px 0
      justify-content: space-between

    .details__tags
      display: flex
      column-gap: 5px
</style>
