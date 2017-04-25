<script>
  import { map } from 'vuex+';
  import counter from '@/components/counter/counter.vue';
  import counterStore from '@/components/counter/counter-substore.js';

  export default {
    props: ['title'],
    computed: {
      ...map.getters({
        count: counterStore.api.get.count,
      }),
      counterTitle() {
        return 'Counter ' + this.title;
      },
    },
    methods: {
      ...map.actions({
        increase: counterStore.api.act.increase,
      }),
    },
    components: {
      counter,
    },
  };
</script>

<template>
  <div class="combo-counter">
    <counter :name="counterTitle" :count="count" @increase="increase"></counter>
  </div>
</template>

<style scoped>
  .combo-counter {
    width: 100%;
  }
</style>
