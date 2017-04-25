<script>
  import { map } from 'vuex+';
  import testCounter from './test-counter-substore.js';
  import counter from '../counter.vue';
  import comboCounter from '../another-counter/combo-counter/combo-counter.vue';

  export default {
    computed: {
      ...map.getters({
        count: testCounter.api.get.count,
      }),
    },
    methods: {
      ...map.actions({
        increase: testCounter.api.act.increase,
      }),
    },
    components: {
      counter,
      comboCounter,
    },
  };
</script>

<template>
  <div class="test-counter">
    <counter name="Counter pi" :count="count" @increase="increase"></counter>
    <comboCounter subinstance="sansa"></comboCounter>
  </div>
</template>

<style scoped>
  .test-counter {
    width: 100%;
    border: 1px solid #ddd;
  }
</style>
