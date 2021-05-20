<template>
  <header>
    <!-- Logo -->
    <div class="logo">New Tab</div>

    <!-- Search Section -->
    <div class="search">
      <div class="select-search">
        <select v-model="searchEngine">
          <option
            v-for="(e, index) in availableSearchEngines"
            :key="index"
            :value="e.name"
          >
            {{ e.name }}
          </option>
        </select>
      </div>
      <div class="search-input">
        <input
          id="searchbar"
          type="text"
          placeholder="Search the internet by typing here"
          v-model="searchText"
          @keyup.enter="search"
          autofocus
        />
      </div>
    </div>

    <!-- Locale Buttons -->
    <div class="locales">
      <div class="locale selected">English</div>
      <div class="seperator">&nbsp;|&nbsp;</div>
      <div class="locale">日本語</div>
    </div>

    <!-- User Panel -->
    <div class="user" @click="dropdown = !dropdown">
      <div class="avatar-wrap">
        <div class="avatar"></div>
      </div>
      <div class="username">Sebastian <i class="gg-chevron-down"></i></div>
      <div class="dropdown" v-if="dropdown">Settings</div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    searchEngine: 'Google',
    searchText: '',
    dropdown: false,
  }),
  methods: {
    search() {
      const parsedSearchText = this.searchText.replaceAll(' ', '+')
      const parsedUrl =
        this.availableSearchEngines.find((e) => e.name == this.searchEngine)
          ?.searchUrl + parsedSearchText

      window.open(parsedUrl, '_blank')
    },
  },
  computed: {
    username() {
      return this.$store.state.user.username
    },
    availableSearchEngines() {
      return [
        {
          name: 'Google',
          searchUrl: 'https://www.google.com/search?q=',
        },
        {
          name: 'DuckDuckGo',
          searchUrl: 'https://www.duckduckgo.com/?q=',
        },
        {
          name: 'Youtube',
          searchUrl: 'https://www.youtube.com/results?search_query=',
        },
        {
          name: 'Bing',
          searchUrl: 'https://www.bing.com/search?q=',
        },
        {
          name: 'Baidu',
          searchUrl: 'https://www.baidu.com/s?wd=',
        },
        {
          name: 'Yahoo',
          searchUrl: 'https://search.yahoo.com/search?p=',
        },
        {
          name: 'Yandex',
          searchUrl: 'https://www.yandex.com/search/?text=',
        },
      ]
    },
  },
})
</script>

<style lang="sass" scoped>
@import "~/assets/sass/chevron"
header
  height: 80px
  width: 100%
  padding: 0 20%
  display: flex
  justify-content: space-between
  align-items: center
  border-bottom: 1px solid #eee
  // backdrop-filter: blur(5px)
  background: white
  position: sticky
  top: 0
  left: 0
  z-index: 3
  // color: white

  .logo
    text-transform: uppercase
    font-size: 20px

  .search
    padding: 0 20px
    display: flex
    border: 1px solid #eee
    border-radius: 250px
    // background: rgba(255, 255, 255, 0.3)

    input, select
      border: none
      background-color: transparent
      outline: none

    select
      padding: 10px 0
      cursor: pointer
    input
      padding: 11px 10px 9px
      width: 26vw

  .locales
    display: flex
    line-height: 24px
    .locale
      cursor: pointer
      &.selected
        color: brown
        text-decoration: underline
    .seperator
      color: #ccc
      user-select: none
  .user
    display: flex
    align-items: center
    border-radius: 250px
    cursor: pointer
    position: relative
    &:hover
      background: #eee
    .avatar-wrap
      border-radius: 250px
      display: grid
      place-items: center
      height: 40px
      width: 40px

      .avatar
        height: 32px
        width: 32px
        border-radius: 250px
        background-image: url(~assets/images/avatar.jpg)
        background-size: cover
        background-position: center

    .username
      padding: 5px 12px 5px 8px
      border-radius: 240px
      transition: background 0.2s

    .dropdown
      position: absolute
      bottom: -40px
      left: 0
      right: 0
      padding: 8px 10px
      text-align: center
      border: 1px solid #eee
      background: white
</style>
