<template>
  <div class="container">
    <div class="main">
      <div class="time">
        <div>
          <img
            v-if="isDay"
            src="~/assets/images/day.png"
            alt="day"
            height="40"
          />
          <img v-else src="~/assets/images/night.png" alt="day" height="40" />
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
        <div class="action">
          <div class="title">Dictionary</div>
          <div class="description">
            Save new vocabulary that can be reviewed later on to reinforce the
            meaning and usage.
          </div>
          <div class="link">
            To Dictionary <fa icon="long-arrow-alt-right" />
          </div>
        </div>
      </div>

      <div class="pages">
        <div class="pages-title">Frequently Visited</div>
        <div class="shortcut-container">
          <Shortcut
            v-for="(shortcut, index) in shortcuts"
            :key="index"
            :icon="shortcut.icon"
            :name="shortcut.name"
            :url="shortcut.url"
          />
        </div>
      </div>

      <div class="resources">
        <div class="pages-title">Resources</div>
        <div class="resource-container">
          <Resource
            v-for="(resource, index) in resources"
            :key="index"
            :title="resource.title"
            :icon="resource.icon"
            :url="resource.url"
            :domain="resource.domain"
          />
          <div class="view-full">
            <div>Full Resource List<fa icon="long-arrow-alt-right" /></div>
          </div>
        </div>
      </div>
    </div>
    <div class="side-section">
      <div class="section">
        <div class="section-title">Reminder</div>
        <div class="reminding-task">JLPT Exam</div>
        <div class="countdown">
          <div class="time-t">
            <div class="time-left">{{ cd_days }}</div>
            <div class="time-label">Days</div>
          </div>
          <div class="time-t">
            <div class="time-left">{{ cd_hours }}</div>
            <div class="time-label">Hours</div>
          </div>
          <div class="time-t">
            <div class="time-left">{{ cd_minutes }}</div>
            <div class="time-label">Minutes</div>
          </div>
          <div class="time-t">
            <div class="time-left">{{ cd_seconds }}</div>
            <div class="time-label">Seconds</div>
          </div>
        </div>
      </div>
      <div class="section new">
        <div class="section-title">Advertistment</div>
        <div class="ad">
          <div class="ad-image">
            <img src="ads/ads3.png" width="250" />
          </div>
          <div class="ad-desc">
            Join Hotjar, lorem ipsum dolor sit amet. Adispicing elet. Lmao msis.
          </div>
        </div>
        <div class="ad">
          <div class="ad-image">
            <img src="ads/ads2.jpg" alt="" width="250" />
          </div>
          <div class="ad-desc">
            Raygun, the collest thing on earth, lorem ipsum dolor sit amet.
            Adispicing elet. Lmao msis.
          </div>
        </div>
      </div>
      <div class="section new">
        <div class="section-title">Rando Memes</div>
        <div class="meme">
          <img src="~/assets/images/meme.jpeg" alt="" width="250" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Shortcut from '~/components/Shortcut.vue'

// How the fuck does time works?
const SECOND: number = 1000
const MINUTE: number = SECOND * 60
const HOUR: number = MINUTE * 60
const DAY: number = HOUR * 24

export default Vue.extend({
  // components: { Shortcut },
  head: (): Object => ({
    title: 'New Tab',
  }),
  data: () => ({
    date: '',
    time: '',
    miliseconds: 438026426,
    cd_days: 10,
    cd_hours: 10,
    cd_minutes: 10,
    cd_seconds: 10,
  }),
  mounted() {
    const dateObj: Date = new Date()

    const _hour: number = dateObj.getHours()
    const AMPM: string = _hour >= 12 ? 'PM' : 'AM'
    const hour: number = _hour == 0 ? 12 : _hour > 12 ? _hour - 12 : _hour
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

    const reminderDate: Date = new Date('May 17, 2021 00:00:00')

    setInterval(() => {
      const newDate: Date = new Date()
      const differenceInMilis: number =
        reminderDate.getTime() - newDate.getTime()
      this.cd_days = Math.floor(differenceInMilis / DAY)
      this.cd_hours = Math.floor((differenceInMilis % DAY) / HOUR)
      this.cd_minutes = Math.floor((differenceInMilis % HOUR) / MINUTE)
      this.cd_seconds = Math.floor((differenceInMilis % MINUTE) / SECOND)
    }, 8000)
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
    isDay() {
      const hours: number = new Date().getHours()
      return hours > 6 && hours < 19
    },
    shortcuts() {
      return [
        {
          name: 'Facebook',
          icon: 'facebook',
          url: 'https://www.facebook.com',
        },
        {
          name: 'Twitter',
          icon: 'twitter',
          url: 'https://www.twitter.com',
        },
        {
          name: 'Youtube',
          icon: 'youtube',
          url: 'https://www.youtube.com',
        },
        {
          name: 'Instagram',
          icon: 'instagram',
          url: 'https://www.instagram.com',
        },
        {
          name: 'GitHub',
          icon: 'github',
          url: 'https://www.github.com',
        },
        {
          name: 'Windy',
          icon: 'windy',
          url: 'https://www.windy.com',
        },
        {
          name: 'Reddit',
          icon: 'reddit',
          url: 'https://www.reddit.com',
        },
        {
          name: 'Laracasts',
          icon: 'laracasts',
          url: 'https://www.laracasts.com',
        },
        {
          name: 'Stack Overflow',
          icon: 'stackoverflow',
          url: 'https://www.stackoverflow.com',
        },
        {
          name: 'Pinterest',
          icon: 'pinterest',
          url: 'https://www.pinterest.com',
        },
      ]
    },
    resources() {
      return [
        {
          icon: 'gdrive',
          title: 'JLPT Resource',
          domain: 'drive.google.com',
          url:
            'https://drive.google.com/drive/folders/1GPr0fv3als98UVjrJmp0OKYuLMDnUgL6',
        },
        {
          icon: 'u',
          title: 'UCI Machine Learning Repository',
          domain: 'archive.ics.uci.edu',
          url: 'https://archive.ics.uci.edu/ml/index.php',
        },
        {
          icon: 'gdrive',
          title: 'JLPT Resource',
          domain: 'drive.google.com',
          url:
            'https://drive.google.com/drive/folders/1GPr0fv3als98UVjrJmp0OKYuLMDnUgL6',
        },
        {
          icon: 'gdrive',
          title: 'JLPT Resource',
          domain: 'drive.google.com',
          url:
            'https://drive.google.com/drive/folders/1GPr0fv3als98UVjrJmp0OKYuLMDnUgL6',
        },
      ]
    },
  },
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  /* height: calc(100vh - 80px); */
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
  border: 1px solid #eee;
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

.new {
  margin-top: 50px;
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

.side-section {
  padding: 20px;
}

.section-title {
  font-size: 14px;
  color: gray;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.ad {
  background: #fafafa;
  width: 270px;
  border-radius: 0 0 5px 5px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #eee;
}

.ad-desc {
  font-size: 12px;
  padding: 10px 0;
  text-align: justify;
}

.pages {
  margin-top: 2em;
}

.shortcut-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pages-title {
  text-align: center;
  font-size: 18px;
}

.countdown {
  display: flex;
  margin-top: 10px;
}

.time-t {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  align-items: center;
}

.time-left {
  font-size: 24px;
}

.time-label {
  font-size: 12px;
  color: gray;
}

.resources {
  margin-top: 2em;
}

.resource-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.view-full {
  height: 60px;
  display: grid;
  place-items: center;
  color: #067df7;
  width: 45%;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #eee;
}

.view-full:hover {
  text-decoration: underline;
}
</style>
