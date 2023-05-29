<template>
  <table class="table" :class="tableClass">
    <thead>
      <slot name="columns">
        <th v-for="column in columns" :key="column">{{ column }}</th>
      </slot>
    </thead>
    <tbody>
      <tr v-for="(item, index) in paginatedData" :key="index">
        <slot :row="item">
          <td
            v-for="(column, index) in columns"
            :key="index"
            v-if="hasValue(item, column)"
          >
            {{ itemValue(item, column) }}
          </td>
          <td>
            <router-link class="btn btn-link" :to="'/details/' + item.id">Ver detalhes</router-link>
          </td>
        </slot>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td :colspan="columns.length">
          <div class="pagination-container">
            <ul class="pagination">
              <li
                v-for="pageNumber in totalPages"
                :key="pageNumber"
                class="page-item"
                :class="{ active: currentPage === pageNumber }"
              >
                <a class="page-link" :class="{ 'active-link': currentPage === pageNumber }" @click="setCurrentPage(pageNumber)">{{ pageNumber }}</a>
              </li>
            </ul>
          </div>
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
export default {
  name: "paper-table2",
  props: {
    columns: Array,
    data: Array,
    type: {
      type: String, // striped | hover
      default: "striped",
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
    pageSize: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    tableClass() {
      return `table-${this.type}`;
    },
    totalPages() {
      return Math.ceil(this.data.length / this.pageSize);
    },
    paginatedData() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const endIndex = startIndex + this.pageSize;
      return this.data.slice(startIndex, endIndex);
    },
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== undefined;
    },
    itemValue(item, column) {
      return item[column.toLowerCase()];
    },
    setCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
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

.table-hover tbody tr:hover {
  background-color: #005400 !important;
  cursor: pointer;
}

.pagination .page-item .page-link.active-link {
  background-color: #005400 !important;
  border-color: #005400 !important;
  color: #fff !important;
}
</style>