<template lang="pug">
  .routine-wrapper
    .routine
      Checkbox(v-model="checked")
      .routine-title(v-if="checked") #[del {{ title }}]
      .routine-title(v-else) {{ title }}
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    title: String,
    done: Boolean,
  },
  data: () => ({
    checked: false,
  }),
  mounted(): void {
    this.checked = this.done
  },
  watch: {
    checked() {
      console.log(this.checked)
    },
  },
})
</script>

<style lang="sass" scoped>
.routine-wrapper
  padding: 5px 0
  .routine
    display: flex
    height: 28px
    &-title
      margin-left: 25px
      line-height: 28px
</style>
