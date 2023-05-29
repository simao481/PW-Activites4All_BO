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

<!--
<template>
  <div>
    <table class="table" :class="tableClass">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in paginatedData" :key="index">
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

    <nav v-if="showPagination">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" @click="goToPage(currentPage - 1)">Anterior</a>
        </li>
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
          <a class="page-link" @click="goToPage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" @click="goToPage(currentPage + 1)">Próximo</a>
        </li>
      </ul>
    </nav>
  </div>
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
    totalPages() {
      return Math.ceil(this.data.length / 5);
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * 5;
      const endIndex = startIndex + 5;
      return this.data.slice(startIndex, endIndex);
    },
    showPagination() {
      return this.totalPages > 1;
    },
  },
  data() {
    return {
      managers: [], // Lista de gestores para seleção
      estados: ["Aceito", "Rejeitado"], // Lista de estados para seleção
      currentPage: 1,
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
    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
  },
};
</script>

<style></style>
-->

<template>
  <div>
    <table class="table" :class="tableClass">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column">{{ column }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in displayedData" :key="index">
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

    <nav v-if="showPagination" class="pagination-container">
      <ul class="pagination">
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
          <a class="page-link" @click="goToPage(page)" :style="{ background: currentPage === page ? '#005400' : 'none', border: 'none' }">{{ page }}</a>
        </li>
      </ul>
    </nav>
  </div>
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
    pageSize: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    },
    totalPages() {
      return Math.ceil(this.data.length / this.pageSize);
    },
    displayedData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.data.slice(startIndex, endIndex);
    },
    showPagination() {
      return this.totalPages > 1;
    },
  },
  data() {
    return {
      currentPage: 1,
      managers: [],
      estados: ["Aceito", "Rejeitado"],
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
    goToPage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style>
.pagination-container {
  display: flex;
  justify-content: flex-end;
  margin-right: 3%;
}
</style>

