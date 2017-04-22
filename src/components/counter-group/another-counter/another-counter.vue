<script>
  import { use, api } from 'vuex+';
  import counter from '../counter.vue';

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
    },
  };
</script>

<template>
  <div class="another-counter">
    <counter name="Counter 2" :count="count" @increase="increase"></counter>
  </div>
</template>

<style scoped>
  .another-counter {
    width: 100%;
  }
</style>
