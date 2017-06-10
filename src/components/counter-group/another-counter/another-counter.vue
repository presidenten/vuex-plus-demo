<script>
  import { map, root } from 'vuex+';
  import counter from '@/common/ui/counter.vue';
  import subCounter from './sub-counter/sub-counter.vue';

  export default {
    components: {
      counter,
      subCounter,
    },
    computed: {
      ...map.getters({
        count: 'anotherCounter/count',
        parent: 'anotherCounter/parentCount',
      }),
      counterGroupCount() {
        // Example getter from root
        return root.get({ path: 'counterGroup/count' });
      },
    },
    methods: {
      ...map.actions({
        increase: 'anotherCounter/increase',
      }),
    },
  };
</script>

<template>
  <div class="another-counter">
    <div class="counter-group">
      From parent {{ parent }}
      From root: {{counterGroupCount}}
    </div>
    <counter name="A. Counter" :count="count" @increase="increase" class="extra-arrow"></counter>
    <subCounter instance="single" title="SubCounter 1"></subCounter>
    <subCounter instance="multi" title="SubCounter 2"></subCounter>
  </div>
</template>

<style scoped>
  .another-counter {
    position: relative;
    width: 100%;
    border: 1px solid #ddd;
  }

  .counter-group {
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }

  .extra-arrow {
    position: relative;
  }

  .extra-arrow:before {
    content: "⤸";
    position: absolute;
    transform: scaleY(-5) scaleX(2);
    right: -10px;
    top: -28px;
  }

  .extra-arrow:after {
    content: "⤸\A⤸";
    white-space: pre; /* or pre-wrap */
    position: absolute;
    transform: scaleY(1) scaleX(1.2);
    right: -10px;
    bottom: -15px;
  }
</style>
