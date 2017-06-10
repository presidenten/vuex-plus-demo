<script>
  export default {
    props: [
      'name',
      'count',
    ],
    methods: {
      increase() {
        this.$emit('increase');
      },
    },
  };
</script>

<template>
  <div class="counter">
    <div class="count"><p>{{name}}:</p> <p>{{count}}</p></div>
    <button @click="increase">+</button>
  </div>
</template>

<style scoped>
  .counter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;
  }

  .count {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 5px;
  }

</style>
