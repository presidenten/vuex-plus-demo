<script>
  import { use, api } from 'vuex+';
  import counter from '../../counter.vue';

  const { mapGetters, mapActions, mixins } = use('counter-group-store');

  export default {
    mixins: [mixins.useStore],
    computed: {
      ...mapGetters({
        count: api.counterGroup.anotherCounter.comboCounter.get.count,
      }),
    },
    methods: {
      ...mapActions({
        increase: api.counterGroup.anotherCounter.comboCounter.act.increase,
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
