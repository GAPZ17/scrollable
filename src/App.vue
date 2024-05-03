<template>
  <div id="app">
    <Header @toggle-sidebar="toggleSidebar" />
    <Sidebar :is-open="isSidebarOpen" />
    <div class="content">
      <p>Bienvenid@ , {{ username }}. ¡Bienvenid@ a tu Portal de Oncontigo!</p>
      <Scrollable :items="consultasData" title="Consultas" />
      <Scrollable :items="medicamentosData" title="Medicamentos" />
      <Scrollable :items="tratamientosData" title="Tratamientos" />
    </div>
  </div>
</template>

<script>
import Header from './components/Public/Header.vue'
import Sidebar from './components/c-sidebar/sidebar.vue'
import Scrollable from './components/Scrollable.vue';


export default {
  name: 'App',
  components: {
    Scrollable,
    Header,
    Sidebar
  },
  data() {
    return {
      username: 'Nombre del usuario',
      isSidebarOpen: false,
      consultasData: [
        { consulta: 'Consulta 1', fecha: '2021-09-01', hora: '10:00' },
      ],
      medicamentosData: [
        { medicamento: 'Medicamento 1', dosis: '2 pastillas', hora: '10:00' },
      ],
      tratamientosData: [
        { tratamiento: 'Tratamiento 1', duracion: '3 meses', hora: '10:00' },
      ]
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 220px;
  margin-top: 250px;
}
</style>