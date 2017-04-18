<script>
  import { use, api } from 'vuex+';
  import counter from '../counter.vue';

  const { mapGetters, mapActions, mixins } = use('counter-group-store');

  export default {
    mixins: [mixins.useStore],
    computed: {
      ...mapGetters({
        count: api.counterGroup.anotherCounter.get.count,
      }),
    },
    methods: {
      ...mapActions({
        increase: api.counterGroup.anotherCounter.act.increase,
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
