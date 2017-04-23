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
    <p>{{name}}: {{count}}</p>
    <button @click="increase">+</button>
  </div>
</template>

<style scoped>
  .counter {
    display: flex;
    flex-direction: row;
    justify-content: space-between;;
    align-items: center;
    width: 100%;
    font-size: 12px;
  }
</style>
