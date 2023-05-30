<!--
<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <paper-table2 :columns="table1.columns" :data="table1.data" @row-click="handleRowClick">
            <template v-slot:cell(User)="props">
              <router-link :to="'/atividade/' + props.row.id">
                {{ props.row.user }}
              </router-link>
            </template>
            <template v-slot:cell(Estado)="props">
              <router-link :to="'/atividade/' + props.row.id">
                {{ props.row.estado }}
              </router-link>
            </template>
          </paper-table2>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { Card, PaperTable2 } from "@/components";

export default {
  components: {
    Card,
    PaperTable2,
  },
  data() {
    return {
      table1: {
        title: "Reservas",
        subTitle: "",
        columns: ["Id", "User", "Total", "Estado"],
        data: [],
      },
    };
  },
  mounted() {
    const localStorageData = JSON.parse(localStorage.getItem("reservas"));
    if (localStorageData) {
      this.table1.data = localStorageData;
    }
  },
  methods: {
    handleRowClick(row) {
      // Set reservaSelecionada no localStorage
      localStorage.setItem("reservaSelecionada", JSON.stringify(row));
      
      // Navegar para a página Typography.vue
      this.$router.push("");
    },
  },
};
</script>

<style></style>
-->

<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <paper-table :columns="table1.columns" :data="table1.data" @row-click="handleRowClick">
            <template v-slot:cell(User)="props">
              <router-link :to="'/atividade/' + props.row.id">
                {{ props.row.user }}
              </router-link>
            </template>
            <template v-slot:cell(Estado)="props">
              <router-link :to="'/atividade/' + props.row.id">
                {{ props.row.estado }}
              </router-link>
            </template>
            <template v-slot:cell-actions="{ row }">
              <button class="btn btn-link" @click.stop="handleRowClick(row)">Ver detalhes</button>
            </template>
          </paper-table>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { Card, PaperTable } from "@/components";
import { routerLink } from 'vue-router'


export default {
  components: {
    Card,
    PaperTable,
  },
  data() {
    return {
      table1: {
        title: "Reservas",
        subTitle: "",
        columns: ["Id", "User", "Total", "Estado"],
        data: [],
      },
    };
  },
  mounted() {
    const localStorageData = JSON.parse(localStorage.getItem("reservas"));
    if (localStorageData) {
      this.table1.data = localStorageData;
    }
  },
  methods: {
    handleRowClick(row) {
      // Set reservaSelecionada in localStorage
      localStorage.setItem("reservaSelecionada", JSON.stringify(row));

      // Navigate to the "Perfil" page
      this.$router.push("src/pages/Maps.vue");
    },
  },
};
</script>

<style></style>

