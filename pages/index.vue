<template>
  <div class="container">
    <div class="main">
      <!-- Date and Time  -->
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
      </div>

      <div class="birthday-noti"></div>

      <!-- Greeting -->
      <div class="greeting">
        Good morning {{ username }}. What would you like to do?
      </div>

      <!-- Available Actions -->
      <div class="available-actions">
        <NuxtLink class="action" to="/">
          <div class="title">Notes</div>
          <div class="description">
            Writing things down help you to free up your mental capacity for
            better productiveness.
          </div>
          <div class="link">To My Notes <fa icon="long-arrow-alt-right" /></div>
        </NuxtLink>
        <NuxtLink class="action" to="/web">
          <div class="title">Web Management</div>
          <div class="description">
            Internet is a vast territory that must be documented to leverage the
            value they provides.
          </div>
          <div class="link">To Web List <fa icon="long-arrow-alt-right" /></div>
        </NuxtLink>
        <NuxtLink class="action" to="/">
          <div class="title">Tasks</div>
          <div class="description">
            Life is busy and constantly bombarded with never-ending trials of
            things to do.
          </div>
          <div class="link">
            To Task List <fa icon="long-arrow-alt-right" />
          </div>
        </NuxtLink>
        <NuxtLink class="action" to="/">
          <div class="title">Diary</div>
          <div class="description">
            Cherish every moment in your life by transforming your experience
            into words that resonate.
          </div>
          <div class="link">To Diary <fa icon="long-arrow-alt-right" /></div>
        </NuxtLink>
        <NuxtLink class="action" to="/">
          <div class="title">Scratchpad</div>
          <div class="description">
            A quick place for you to express your idea and consolidate them
            illogically.
          </div>
          <div class="link">
            To Scratchpad <fa icon="long-arrow-alt-right" />
          </div>
        </NuxtLink>
        <NuxtLink class="action" to="/">
          <div class="title">Dictionary</div>
          <div class="description">
            Save new vocabulary that can be reviewed later on to reinforce the
            meaning and usage.
          </div>
          <div class="link">
            To Dictionary <fa icon="long-arrow-alt-right" />
          </div>
        </NuxtLink>
      </div>

      <!-- Frequently Visited -->
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

      <!-- Resources -->
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

      <!-- Scholar Article Search -->
      <div class="scholar">
        <div class="pages-title">Scholar Article</div>
        <div class="search-article">
          <div><img src="favicons/libgen.png" alt="libgen" /></div>
          <div>
            <input
              type="text"
              placeholder="Search for articles and research papers..."
              v-model="searchInput"
              @keyup.enter="search"
            />
          </div>
          <div class="article-origin">
            Powered by
            <a href="http://libgen.rs/" target="_blank" class="libgen"
              >Library Genesis</a
            >
          </div>
        </div>
      </div>

      <!-- Cloud Storage -->
      <div class="cloud">
        <div class="pages-title">Cloud Storage</div>
        <div class="shortcut-container">
          <Shortcut
            v-for="(cloudStorage, index) in cloudStorages"
            :key="index"
            :name="cloudStorage.name"
            :icon="cloudStorage.icon"
            :url="cloudStorage.url"
          />
        </div>
      </div>

      <!-- <div class="financial-service">
        <div class="pages-title">Financial Service</div>
      </div> -->
    </div>
    <div class="side-section">
      <div class="section">
        <div class="section-title">Reminder</div>
        <div class="reminding-task">Mihoyo Stream</div>
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

      <div class="section new goal-section">
        <div class="section-title">Goals</div>
        <div class="goals">
          <div class="goal">This is my goal</div>
        </div>
      </div>

      <div class="section new birthday-section">
        <div class="section-title birthday-title">✨ Birthday 🎉</div>
        <div class="section-desc">Birthday this month</div>
        <div class="birthday-list">
          <Birthday
            v-for="(birthday, index) in birthdays"
            :key="index"
            :name="birthday.name"
            :birthYear="birthday.birthYear"
            :birthMonth="birthday.birthMonth"
            :birthDay="birthday.birthDay"
          />
        </div>
      </div>

      <!-- <div class="section new meditate">
        <div class="section-title">Meditate</div>
      </div> -->
      <div class="section new">
        <div class="section-title">Routines</div>
        <div class="routines">
          <Routine
            v-for="(routine, index) in routines"
            :key="index"
            :title="routine.title"
            :done="routine.done"
          />
        </div>
      </div>

      <div class="section new">
        <div class="section-title">Rando Memes</div>
        <div class="meme">
          <img src="~/assets/images/meme.jpeg" alt="angry as fuk" width="250" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

// How the fuck does time works?
const SECOND: number = 1000
const MINUTE: number = SECOND * 60
const HOUR: number = MINUTE * 60
const DAY: number = HOUR * 24

export default Vue.extend({
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
    searchInput: '',
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

    const reminderDate: Date = new Date('May 28, 2021 20:00:00')

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
  methods: {
    search() {
      const parsedSearchText: string = this.searchInput.replaceAll(' ', '+')
      window.open(`http://libgen.rs/scimag/?q=${parsedSearchText}`, '_blank')
      this.searchInput = ''
    },
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
          icon: 'gspreadsheet',
          title: 'Workout Guide',
          domain: 'docs.google.com',
          url:
            'https://docs.google.com/spreadsheets/d/1fR-rf2mDb9Ex5mwYbHcKflfJOxdPOtTV4AVopjxVpi4/edit#gid=0',
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
    birthdays() {
      return [
        {
          name: 'Tan Wei Jie',
          birthYear: 1998,
          birthMonth: 6,
          birthDay: 21,
        },
        {
          name: 'Lim Jing Chun',
          birthYear: 1998,
          birthMonth: 5,
          birthDay: 23,
        },
        {
          name: 'Tan Wei Yan',
          birthYear: 1998,
          birthMonth: 5,
          birthDay: 24,
        },
        {
          name: 'Yin Siew Fai',
          birthYear: 1998,
          birthMonth: 5,
          birthDay: 28,
        },
      ]
    },
    cloudStorages() {
      return [
        {
          name: 'Mega',
          icon: 'mega',
          url: 'https://mega.io/',
        },
        {
          name: 'Onedrive',
          icon: 'onedrive',
          url: 'https://onedrive.live.com/',
        },
        {
          name: 'Google Drive',
          icon: 'gdrive',
          url: 'https://www.drive.google.com/',
        },
        {
          name: 'Dropbox',
          icon: 'dropbox',
          url: 'https://www.dropbox.com',
        },
        {
          name: 'iCloud',
          icon: 'icloud',
          url: 'https://www.icloud.com',
        },
        {
          name: 'Mediafire',
          icon: 'mediafire',
          url: 'https://www.mediafire.com/',
        },
      ]
    },
    routines() {
      return [
        {
          title: 'Wake up at 7am',
          done: false,
        },
        {
          title: 'Meditate for 10 minutes',
          done: false,
        },
        {
          title: 'Exercise for 10 minutes',
          done: true,
        },
        {
          title: 'Read books for 20 minutes',
          done: false,
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

.birthday-list {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.scholar {
  margin-top: 2rem;
}

.search-article {
  border-radius: 250px;
  padding: 2px 20px;
  width: fit-content;
  margin: 20px auto 0;
  display: flex;
  align-items: center;
  background: #eeeee0;
  position: relative;
}

.search-article input {
  width: 26vw;
  padding: 11px 10px 9px;
  border: none;
  outline: none;
  background: transparent;
}

.article-origin {
  position: absolute;
  bottom: -20px;
  right: 0;
  font-size: 12px;
  color: gray;
}

.libgen {
  color: #a00000;
  font-weight: 800;
  text-decoration: none;
}

.libgen:hover {
  color: rgba(160, 0, 0, 0.7);
}

.cloud {
  margin-top: 4rem;
}

.goals {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.goal {
  color: white;
  padding: 10px;
  border-radius: 10px;
  background: linear-gradient(
    -146deg,
    rgba(255, 255, 255, 1) 19%,
    rgba(76, 109, 247, 1) 95%
  );
  border: 1px solid #4c6df7;
}
</style>
