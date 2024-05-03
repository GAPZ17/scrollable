<template>
  <div class="sidebar" :class="{ 'is-open': isOpen }">
    <ul>
      <li>INICIO</li>
      <li>CALENDARIO</li>
      <li>MI DOCTOR</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isOpen: true
    }
  },
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  top: 80px;
  left: 0;
  bottom: 0;
  width: 300px;
  background-color: #FFDCE5;
  color: #000000;
  transition: transform 0.3s ease-in-out;
  z-index: 1001;
  font-size: 25px;
}
</style>