<script>
  import { use, api } from 'vuex+';
  import counter from './counter.vue';
  import anotherCounter from './another-counter/another-counter.vue';
  import comboCounter from './another-counter/combo-counter/combo-counter.vue';

  const { mapGetters, mapActions, mixins } = use('counter-group-store');

  export default {
    mixins: [mixins.addStore],
    computed: {
      ...mapGetters({
        count: api.counterGroup.get.count,
      }),
    },
    methods: {
      ...mapActions({
        increase: api.counterGroup.act.increase,
      }),
      removeCounter() {
        this.$emit('removeCounter');
      },
    },
    components: {
      counter,
      anotherCounter,
      comboCounter,
    },
  };
</script>

<template>
  <div class="counter-group">
    <div class="name">Group instance: #{{instance}}</div>
    <div class="box">
      <counter name="Counter 1" :count="count" @increase="increase"></counter>
      <anotherCounter></anotherCounter>
      <comboCounter></comboCounter>
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
    width: 100px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ddd;
    background-color: #f3f4ff;
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
