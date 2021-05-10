<template>
  <div class="container">
    <div class="main">
      <div class="time">
        <div>
          <img src="~/assets/images/day.png" alt="day" height="40" />
        </div>
        <div class="date-time">{{ date }} {{ time }}</div>
        <!-- <fa icon="envelope" /> -->
      </div>

      <div class="greeting">
        Good morning {{ username }}. What would you like to do?
      </div>

      <div class="available-actions">
        <div class="action">
          <div class="title">Notes</div>
          <div class="description">
            Writing things down help you to free up your mental capacity for
            better productiveness.
          </div>
          <div class="link">To My Notes <fa icon="long-arrow-alt-right" /></div>
        </div>
        <div class="action">
          <div class="title">Web Management</div>
          <div class="description">
            Internet is a vast territory that must be documented to leverage the
            value they provides.
          </div>
          <div class="link">To Web List <fa icon="long-arrow-alt-right" /></div>
        </div>
        <div class="action">
          <div class="title">Tasks</div>
          <div class="description">
            Life is busy and constantly bombarded with never-ending trials of
            things to do.
          </div>
          <div class="link">
            To Task List <fa icon="long-arrow-alt-right" />
          </div>
        </div>
        <div class="action">
          <div class="title">Diary</div>
          <div class="description">
            Cherish every moment in your life by transforming your experience
            into words that resonate.
          </div>
          <div class="link">To Diary <fa icon="long-arrow-alt-right" /></div>
        </div>
        <div class="action">
          <div class="title">Scratchpad</div>
          <div class="description">
            A quick place for you to express your idea and consolidate them
            illogically.
          </div>
          <div class="link">
            To Scratchpad <fa icon="long-arrow-alt-right" />
          </div>
        </div>
      </div>
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
    const time: string = `${hour}:${minute.toString().padStart(2, '0')} ${AMPM}`

    // @ts-ignore
    const month: string = this.months[dateObj.getMonth()]
    // @ts-ignore
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
    username() {
      return this.$store.state.user.username
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

.available-actions {
  margin-top: 2em;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 3px;
}

.action {
  flex-basis: 32%;
  height: 200px;
  border: 1px solid #eee;
  transition: box-shadow 0.2s;
  cursor: pointer;
  padding: 20px;
  border-radius: 10px;
}

.action.disabled {
  cursor: default;
  border: 1px solid gray;
}

.action:hover {
  box-shadow: 0px 0px 20px 5px #eee;
}

.action:hover > .link {
  text-decoration: underline;
}

.title {
  font-size: 16px;
  font-weight: 600;
}

.description {
  margin-top: 20px;
  font-size: 14px;
}

.link {
  margin-top: 20px;
  color: #067df7;
}
</style>
