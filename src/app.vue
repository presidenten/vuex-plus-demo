<script>
  import itemList from './components/item-list/item-list.vue';

  export default {
    name: 'app',
    components: {
      itemList,
    },
    methods: {
      addCounter() {
        // Dispatch action in main instance of item-list-store
        this.$store.dispatch('itemList/addItem');
      },
    },
  };
</script>

<template>
  <div id="app">
    <header>
      <button @click="addCounter" id="add-new">Add new (mod 3)</button>
    </header>

    <itemList></itemList>
  </div>
</template>

<style scoped>
  #app {
    display: flex;
    flex-direction: column;
  }

  #app > header{
    background-color: #efffef;
    height: 40px;
    text-align: center;
  }

  button#add-new {
    box-sizing: border-box;
    height: 30px;
    margin: 5px;
    border-radius: 4px;
    width: 135px;
    color: #333;
  }
</style>
