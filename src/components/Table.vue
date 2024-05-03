<template>
  <div class="table-container">
    <h2>Título de la tabla</h2>
    <div class="scroll-table">
      <table>
        <thead>
        <tr>
          <th>Columna 1</th>
          <th>Columna 2</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td>{{ item.column1 }}</td>
          <td>{{ item.column2 }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.table-container {
  width: 100%;
}

.scroll-table {
  overflow-y: auto;
  max-height: 300px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border: 1px solid #000;
}
</style>