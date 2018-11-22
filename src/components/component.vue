<template>
  <div>
    <h1 class="h1">My first vue component</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, natus.</p>
    <li v-for="item in obj" v-bind:key="item.name" class="list-group-item"> 
      <span>{{ item.name }}</span>
      <i :class="item.icon"> </i>
    </li>
    <h1>{{ idiot }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    idiot: String
  },
  data() {
    return {
      obj: [
        { name: "1", icon: 'fas fa-anchor' }, 
        { name: "1a", icon: 'fab fa-android' }, 
        { name: "1v", icon: 'fas fa-arrow-right' }, 
        { name: "1xa", icon: 'fas fa-arrow-right' }],
    }
  }
};
</script>

<style scoped>
.h1 {
  font-size: 4rem;
}
</style>