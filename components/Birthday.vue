<template lang="pug">
  .birthday(:class="randomClass")
    .p-name {{ name }}
    .p-birthday {{ dob }} • {{ timeLeft }} days left • {{ age }} yrs old
</template>

<script lang="ts">
import Vue from 'vue'

// How the fuck does time works?
const SECOND: number = 1000
const MINUTE: number = SECOND * 60
const HOUR: number = MINUTE * 60
const DAY: number = HOUR * 24

export default Vue.extend({
  props: {
    name: String,
    birthYear: Number,
    birthMonth: Number,
    birthDay: Number,
  },
  computed: {
    timeLeft() {
      const today: Date = new Date()
      const year: number = today.getFullYear()

      // Set the date to this year
      // @ts-ignore
      const bday: Date = new Date(year, this.birthMonth - 1, this.birthDay)

      const diff: number = bday.getTime() - today.getTime()

      const daysLeft: number = Math.floor(diff / DAY)

      return daysLeft
    },

    age() {
      const year: number = new Date().getFullYear()
      // @ts-ignore
      const age: number = year - this.birthYear
      return age
    },

    dob() {
      return `${this.birthYear}/${this.birthMonth}/${this.birthDay}`
    },

    randomClass() {
      return `s${Math.floor(Math.random() * 4) + 1}`
    },
  },
})
</script>

<style lang="scss" scoped>
.birthday {
  padding: 10px;
  border-radius: 10px;

  color: white;

  .p-name {
    font-weight: bold;
  }

  .p-birthday {
    margin-top: 5px;
    font-size: 14px;
  }

  &.s1 {
    background: linear-gradient(to right, #00c9ff, #92fe9d);
  }

  &.s2 {
    background: linear-gradient(to right, #673ab7, #512da8);
  }

  &.s3 {
    background: linear-gradient(to right, #f46b45, #eea849);
  }

  &.s4 {
    background: linear-gradient(to right, #8e9eab, #eef2f3);
  }
}
</style>
