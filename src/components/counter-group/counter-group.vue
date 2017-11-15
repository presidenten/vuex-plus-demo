<script>
  import { map, register } from 'vuex+';
  import counter from '@/common/ui/counter.vue';
  import normalCounter from '@/components/normal-vuex-counter/normal-vuex-counter.vue';

  import anotherCounter from './another-counter/another-counter.vue';

  export default {
    mixins: [register('counter-group-store')], // filename without `.js`
    components: {
      counter,
      normalCounter,
      anotherCounter,
    },
    computed: {
      ...map.getters({
        count: 'counterGroup/count',
      }),
    },
    methods: {
      ...map.actions({
        increase: 'counterGroup/increase',
      }),
      removeCounter() {
        this.$emit('removeCounter');
      },
    },
  };
</script>

<template>
  <div class="counter-group">
    <div class="name">Group instance: {{instance}}</div>
    <div class="box">
      <counter name="Top Counter" :count="count" @increase="increase"></counter>

      <anotherCounter></anotherCounter>

      <normalCounter></normalCounter>

      <button class="delete" @click="removeCounter(instance.id)">×</button>
    </div>
  </div>
</template>

<style scoped>
  .counter-group {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
  }

  .box {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 160px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    background-color: #red;
  }

  .name {
    max-height: 14px;
  }

  .group:last-of-type {
    margin: 0;
  }

  button.delete {
    position: absolute;
    top: -5px;
    right: -5px;
    height: 20px;
    width: 20px;
    font-size: 12px;
    color: #888;
    border: none;
    background: none;
  }
</style>
