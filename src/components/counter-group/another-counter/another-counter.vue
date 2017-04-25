<script>
  import { map } from 'vuex+';
  import counter from '@/components/counter/counter.vue';
  import anotherCounter from './another-counter-substore.js';
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
    <comboCounter instance="single" title="3"></comboCounter>
    <comboCounter instance="multi" title="mix"></comboCounter>
  </div>
</template>

<style scoped>
  .another-counter {
    width: 100%;
    border: 1px solid #ddd;
  }
</style>
