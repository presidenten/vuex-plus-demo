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
  <div class="item-list">
    <div v-for="instance in items" :key="instance.id" class="group">
      <counterGroup :instance="instance.name"
               @removeCounter="removeItem(instance.id)"></counterGroup>
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
