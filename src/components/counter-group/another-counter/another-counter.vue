<script>
  import { use, api } from 'vuex+';
  import counter from '../counter.vue';
  import comboCounter from './combo-counter/combo-counter.vue';

  const { mapGetters, mapActions } = use('counter-group-store');
  const anotherCounter = api.counterGroup.anotherCounter;

  export default {
    computed: {
      ...mapGetters({
        count: anotherCounter.get.count,
      }),
    },
    methods: {
      ...mapActions({
        increase: anotherCounter.act.increase,
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
    <comboCounter></comboCounter>
  </div>
</template>

<style scoped>
  .another-counter {
    width: 100%;
    border: 1px solid #ddd;
  }
</style>
