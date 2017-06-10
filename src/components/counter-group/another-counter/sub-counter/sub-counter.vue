<script>
  import { map } from 'vuex+';
  import counter from '@/common/ui/counter.vue';

  export default {
    props: ['title'],
    components: {
      counter,
    },
    computed: {
      ...map.getters({
        count: 'counter/count',
      }),
    },
    methods: {
      ...map.actions({
        increase: 'counter/increase',
      }),
    },
  };
</script>

<template>
  <div class="sub-counter">
    <counter :name="title" :count="count" @increase="increase"></counter>
  </div>
</template>

<style scoped>
  .sub-counter {
    width: 100%;
  }
</style>
