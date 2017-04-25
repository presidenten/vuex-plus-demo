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
    <comboCounter instance="single" title="Counter 2"></comboCounter>
    <counter name="Counter 3" :count="count" @increase="increase" class="extra-arrow"></counter>
    <comboCounter instance="multi" title="Counter ext"></comboCounter>
  </div>
</template>

<style scoped>
  .another-counter {
    position: relative;
    width: 100%;
    border: 1px solid #ddd;
  }

  .extra-arrow {
    position: relative;
  }

  .extra-arrow:before {
    content: "⤸";
    position: absolute;
    transform: scaleY(-1);
    right: -10px;
    top: -8px;
  }

  .extra-arrow:after {
    content: "⤸";
    position: absolute;
    right: -10px;
    bottom: -10px;
  }
</style>
