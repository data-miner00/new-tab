<!-- Adapted From 
  -- https://codepen.io/AllThingsSmitty/pen/WjZVjo -->

<template>
  <div class="round">
    <input
      type="checkbox"
      :id="randomId"
      :checked="checked"
      @change="$emit('change', $event.target.checked)"
    />
    <label :for="randomId"></label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
  },
  computed: {
    randomId() {
      return `checkbox-${Math.floor(Math.random() * 100000)}`
    },
  },
})
</script>

<style scoped>
.round {
  position: relative;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 28px;
  left: 0;
  position: absolute;
  top: 0;
  width: 28px;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: '';
  height: 6px;
  left: 7px;
  opacity: 0;
  position: absolute;
  top: 8px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type='checkbox'] {
  visibility: hidden;
}

.round input[type='checkbox']:checked + label {
  background-color: #66bb6a;
  border-color: #66bb6a;
}

.round input[type='checkbox']:checked + label:after {
  opacity: 1;
}
</style>
