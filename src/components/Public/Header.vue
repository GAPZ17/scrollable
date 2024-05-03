<template>
  <header class="header">
    <div class="header-icons">
      <img class="icon logo" src="" alt="Logo de la aplicación">
      <h1>OnContigo</h1>
      <img class="icon profile-icon" src="" alt="Perfil de usuario">
    </div>
  </header>
</template>

<script>
export default {
  name: 'header',

}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
  padding: 30px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.icon {
  border-radius: 50%;
  width: 50px;
  height: 50px;
}
.logo {
  height: 50px;
}

.profile-icon {
  height: 50px;
}
</style>