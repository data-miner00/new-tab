<template>
  <div class="notes">
    <client-only>
      <Tiptap />
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  //
})
</script>

<style lang="sass" scoped>
@import "../../assets/sass/_mixins"

.notes
  @include pageBaseStyle
</style>
