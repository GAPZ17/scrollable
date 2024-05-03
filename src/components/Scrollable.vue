<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <div class="scrollable-container">
      <div class="item-card" v-for="(item, index) in items" :key="index">
        <DataTable :value="item.customers" scrollable scrollHeight="400px" tableStyle="min-width: 50rem">
          <Column field="consulta" header="Consulta"></Column>
          <Column field="fecha" header="Fecha"></Column>
          <Column field="hora" header="Hora"></Column>
        </DataTable>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { CustomerService } from './CustomerService.js';

const items = ref();

onMounted(() => {
  CustomerService.getCustomersMedium().then((data) => {
    console.log(data);
    items.value = data.map(customer => ({ customers: [customer] }));
  });
});
</script>
<script>
export default {
  name: 'Scrollable',
  props: {
    items: {
      type: Array
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
.card {
  width: 400px;
  height: 580px;
  padding: 1em;
  margin: 2em;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #FFBBCD
}

.scrollable-container {
  width: 369px;
  height: 504px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 1em;
  border: 1px solid #ccc;
  background-color: #FFDCE5
}

.item-card {
  display: flex;
  width: 283px;
  height: 41px;
  padding: 1em;
  margin-bottom: 1em;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #FF94B0
}
</style>