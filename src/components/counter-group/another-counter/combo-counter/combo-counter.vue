<script>
  import { map } from 'vuex+';
  import counter from '../../counter.vue';
  import comboCounter from './combo-counter-substore.js';

  export default {
    props: ['subinstance'],
    computed: {
      ...map.getters({
        count: comboCounter.api.get.count,
      }),
    },
    methods: {
      ...map.actions({
        increase: comboCounter.api.act.increase,
      }),
    },
    components: {
      counter,
    },
  };
</script>

<template>
  <div class="combo-counter">
    <counter name="Counter 3" :count="count" @increase="increase"></counter>
  </div>
</template>

<style scoped>
  .combo-counter {
    width: 100%;
  }
</style>
