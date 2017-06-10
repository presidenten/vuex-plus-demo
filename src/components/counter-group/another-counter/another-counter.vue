<script>
  import { map, root } from 'vuex+';
  import counter from '@/common/ui/counter.vue';
  import subCounter from './sub-counter/sub-counter.vue';

  export default {
    components: {
      counter,
      subCounter,
    },
    data: () => ({
      arrowsVisible: false,
    }),
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
      click() {
        this.arrowsVisible = true;
        setTimeout(() => {
          this.increase();
          this.arrowsVisible = false;
        }, 300);
      },
    },
  };
</script>

<template>
  <div class="another-counter">
    <div class="parent-group">
      From parent {{ parent }}
      From root: {{counterGroupCount}}
    </div>
    <counter name="A. Counter" :count="count" @increase="click"></counter>
    <transition name="fade" class="arrow-container">
      <div v-if="arrowsVisible" >
        <div class="arrow a">⤸</div>
        <div class="arrow b">⤸</div>
        <div class="arrow c">⤸</div>
      </div>
    </transition>
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

  .parent-group {
    margin-bottom: 3px;
    border-bottom: 1px solid #ddd;
    text-align: center;
  }

  .arrow-container {
    position: absolute;
  }

  .arrow {
    position: absolute;
  }

  .arrow.a {
    right: -10px;
    top: 14px;
    transform: scaleY(-5) scaleX(2);
  }

  .arrow.b {
    right: -10px;
    top: 55px;
    transform: scaleY(2) scaleX(2);
  }

  .arrow.c {
    right: -14px;
    top: 71px;
    transform: scaleY(4.5) scaleX(2) rotate(15deg);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }

  /* Om transition så används dessa klasser */
  .fade-enter,        /* Initialvärde innan något kommer in i domen */
  .fade-leave-to {    /* Slutvärde när något lämnat domen */
    opacity: 0;
  }
</style>
