<script>
  import { map, global } from 'vuex+';
  import counter from '@/components/counter/counter.vue';
  import anotherCounter from './another-counter-substore.js';
  import comboCounter from './combo-counter/combo-counter.vue';

  export default {
    computed: {
      ...map.getters({
        count: anotherCounter.api.get.count,
      }),
      counterGroupCount() {
        // Example getter from global
        return global.get({ path: global.api.counterGroup.get.count });
      },
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
    <div class="counter-group">From global: {{counterGroupCount}}</div>
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

  .counter-group {
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    text-align: center;
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
