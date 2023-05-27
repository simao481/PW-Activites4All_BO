<template>
  <table class="table" :class="tableClass">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="(column, columnIndex) in columns" :key="columnIndex">
          <template v-if="column === 'Estado'">
            <select v-model="item.estado" @change="handleEstadoSelection(item, item.estado)">
              <option value="">Escolher</option>
              <option v-for="estado in estados" :value="estado" :key="estado">{{ estado }}</option>
            </select>
          </template>
          <template v-if="column === 'Gestor' && item.estado === 'Aceito'">
            <select v-model="item.gestor" @change="handleManagerSelection(item, item.gestor)">
              <option value="">Escolher</option>
              <option v-for="manager in managers" :value="manager" :key="manager">{{ manager.nome }}</option>
            </select>
          </template>
          <template v-if="column !== 'Estado' && column !== 'Gestor'">
            {{ item[column.toLowerCase()] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "paper-table",
  props: {
    columns: Array,
    data: Array,
    type: {
      type: String,
      default: "striped",
    },
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    },
  },
  data() {
    return {
      managers: [], // Lista de gestores para seleção
      estados: ["Aceito", "Rejeitado"], // Lista de estados para seleção
    };
  },
  created() {
    this.managers = JSON.parse(localStorage.getItem("gestores")) || [];
  },
  methods: {
    handleEstadoSelection(row, estado) {
      row.estado = estado;
      if (estado !== "Aceito") {
        row.gestor = "";
      }
    },
    handleManagerSelection(row, manager) {
      row.gestor = manager;
    },
  },
};
</script>

<style></style>



<!--
<template>
  <table class="table" :class="tableClass">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="(column, columnIndex) in columns" :key="columnIndex">
          <template v-if="column === 'Estado'">
            <select v-model="item.estado" @change="handleEstadoSelection(item, item.estado)">
              <option value="">Escolher</option>
              <option v-for="estado in estados" :value="estado" :key="estado">{{ estado }}</option>
            </select>
          </template>
          <template v-if="column === 'Gestor' && item.estado === 'Aceito'">
            <select v-model="item.gestor" @change="handleManagerSelection(item, item.gestor)">
              <option value="">Escolher</option>
              <option v-for="manager in managers" :value="manager" :key="manager">{{ manager }}</option>
            </select>
          </template>
          <template v-if="column !== 'Estado' && column !== 'Gestor'">
            {{ item[column.toLowerCase()] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "paper-table",
  props: {
    columns: Array,
    data: Array,
    type: {
      type: String,
      default: "striped",
    },
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    },
  },
  data() {
    return {
      managers: ["Manager 1", "Manager 2", "Manager 3"], // Lista de gestores para seleção
      estados: ["Aceito", "Rejeitado"], // Lista de estados para seleção
    };
  },
  methods: {
    handleEstadoSelection(row, estado) {
      row.estado = estado;
      if (estado !== "Aceito") {
        row.gestor = "";
      }
    },
    handleManagerSelection(row, manager) {
      row.gestor = manager;
    },
  },
};
</script>

<style></style>


<!--
<template>
  <table class="table" :class="tableClass">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column">{{ column }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="(column, columnIndex) in columns" :key="columnIndex">
          <template v-if="column === 'Estado'">
            <select v-model="item.estado" @change="handleEstadoSelection(item, item.estado)">
              <option value="">Escolher</option>
              <option v-for="estado in estados" :value="estado" :key="estado">{{ estado }}</option>
            </select>
          </template>
          <template v-else-if="column === 'Gestor' && item.estado === 'Aceito'">
            <select v-model="item.gestor" @change="handleManagerSelection(item, item.gestor)">
              <option value="">Escolher</option>
              <option v-for="manager in managers" :value="manager" :key="manager">{{ manager }}</option>
            </select>
          </template>
          <template v-else>
            {{ item[column.toLowerCase()] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "paper-table",
  props: {
    columns: Array,
    data: Array,
    type: {
      type: String,
      default: "striped",
    },
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    },
  },
  data() {
    return {
      managers: ["", "Manager 1", "Manager 2", "Manager 3"], // Lista de gestores para seleção
      estados: ["", "Aceito", "Rejeitado"], // Lista de estados para seleção
    };
  },
  methods: {
    handleEstadoSelection(row, estado) {
      row.estado = estado;
    },
    handleManagerSelection(row, manager) {
      row.gestor = manager;
    },

  },
};
</script>

<style></style>
-->