<script>
  import { mapGetters, mapActions } from 'vuex';
  import counter from '@/common/ui/counter.vue';

  export default {
    name: 'normal-vuex-counter',
    components: {
      counter,
    },
    computed: {
      ...mapGetters({
        count: 'normalVuexCounter/count',
      }),
    },
    methods: {
      ...mapActions({
        increase: 'normalVuexCounter/increase',
      }),
    },
  };
</script>

<template>
  <div class="normal-vuex-counter">
    <counter name="Normal vuex counter" :count="count" @increase="increase"></counter>
  </div>
</template>

<style scoped>
  .normal-vuex-counter {
  }
</style>
