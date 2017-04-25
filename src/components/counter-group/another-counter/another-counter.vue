<script>
  import { map } from 'vuex+';
  import anotherCounter from './another-counter-substore.js';
  import counter from '../counter.vue';
  import comboCounter from './combo-counter/combo-counter.vue';

  export default {
    computed: {
      ...map.getters({
        count: anotherCounter.api.get.count,
      }),
    },
    methods: {
      ...map.actions({
        increase: anotherCounter.api.act.increase,
      }),
    },
    components: {
      counter,
      comboCounter,
    },
  };
</script>

<template>
  <div class="another-counter">
    <counter name="Counter 2" :count="count" @increase="increase"></counter>
    <comboCounter subinstance="hejje"></comboCounter>
  </div>
</template>

<style scoped>
  .another-counter {
    width: 100%;
    border: 1px solid #ddd;
  }
</style>
