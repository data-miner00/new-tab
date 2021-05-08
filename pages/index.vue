<template>
  <div class="container">
    <div class="main">
      <div class="time">
        <div>
          <img src="~/assets/images/day.png" alt="day" height="40" />
        </div>
        <div class="date-time">{{ date }} {{ time }}</div>
      </div>

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
  data: () => ({
    date: '',
    time: '',
  }),
  mounted() {
    const dateObj: Date = new Date()

    const _hour: number = dateObj.getHours()
    const AMPM: string = _hour >= 12 ? 'PM' : 'AM'
    const hour: number = _hour > 12 ? _hour - 12 : _hour
    const minute: number = dateObj.getMinutes()
    const time: string = `${hour}:${minute} ${AMPM}`

    const month: string = this.months[dateObj.getMonth()]
    const day: string = this.days[dateObj.getDay()]
    const _date: number = dateObj.getDate()
    const date: string = `${day}, ${month} ${_date}`

    this.time = time
    this.date = date
  },

  computed: {
    months() {
      return [
        'January',
        'Febrauary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
    },
    days() {
      return [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ]
    },
  },
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
  margin-top: 40px;
}

.side-section {
  background: #eee;
}

.time {
  display: flex;
  align-items: center;
  color: gray;
}

.date-time {
  margin-left: 10px;
}
</style>
