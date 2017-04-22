<script>
  import { use, api } from 'vuex+';
  import counter from '../../counter.vue';

  const { mapGetters, mapActions } = use('counter-group-store');
  const comboCounter = api.counterGroup.anotherCounter.comboCounter;

  export default {
    computed: {
      ...mapGetters({
        count: comboCounter.get.count,
      }),
    },
    methods: {
      ...mapActions({
        increase: comboCounter.act.increase,
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
