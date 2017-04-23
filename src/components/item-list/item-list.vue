<script>
  import { use, api } from 'vuex+';
  import counterGroup from '../counter-group/counter-group.vue';

  const { mapGetters, mapActions, mixins } = use('item-list-store');
  const itemList = api.itemList;

  export default {
    mixins: [mixins.addStore],
    computed: {
      ...mapGetters({
        items: itemList.get.items,
      }),
    },
    methods: {
      ...mapActions({
        removeItem: itemList.act.removeItem,
      }),
    },
    components: {
      counterGroup,
    },
  };
</script>

<template>
  <transition-group name="fade" appear tag="div" class="item-list">
    <div v-for="instance in items" :key="instance.id" class="group">
        <counterGroup :instance="instance.name"
                      @removeCounter="removeItem(instance.id)"></counterGroup>
    </div>
  </transition-group>
</template>

<style scoped>
  .item-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
  }

  .fade-enter-active, .fade-leave-active {
    transition: transform .75s ease-in-out, opacity 0.75s ease;
  }
  .fade-enter {
    transform: scale(0.9);
    opacity: 0;
  }
  .fade-enter-to {
    transform: scale(1);
    opacity: 1;
  }
  .fade-leave {
    transform: scale(1);
    opacity: 1;
  }
  .fade-leave-to {
    transform: scale(0.4);
    opacity: 0;
  }

  .group {
    position: relative;
    margin: 10px
  }

</style>
