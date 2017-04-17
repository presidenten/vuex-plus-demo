<script>
  import { use, api } from 'vuex+';
  import counter from '../counter/counter-group.vue';

  const { mapGetters, mapActions, mixins } = use('item-list-store');

  export default {
    mixins: [mixins.addStore],
    computed: {
      ...mapGetters({
        items: api.itemList.get.items,
      }),
    },
    methods: {
      ...mapActions({
        removeItem: api.itemList.act.removeItem,
      }),
    },
    components: {
      counter,
    },
  };
</script>

<template>
  <div class="item-list">
    <div v-for="instance in items" :key="instance.id" class="group">
      <counter :instance="instance.name"
               @removeCounter="removeItem(instance.id)"></counter>
    </div>
  </div>
</template>

<style scoped>
  .item-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
  }

  .group {
    position: relative;
    margin: 10px
  }

</style>
