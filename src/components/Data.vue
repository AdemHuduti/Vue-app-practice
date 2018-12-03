<template>
  <div class="container">
    <h1>This is Data component</h1>
    <button @click="getData" class="btn btn-outline-dark mb-3">Fetch data</button>
    <li v-for="i in info" v-bind:key="i.name" class="list-group-item">
      {{ i.name }} <span class="float-right"> {{ i.username }} </span>
    </li>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: null
    }
  },
  methods: {
    getData() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(res => (this.info = res))
    }
  }
}
</script>

<style scoped>
  li:nth-child(odd) {
    color: rgb(255, 166, 0);
    background-color: #000;
  }
</style>
