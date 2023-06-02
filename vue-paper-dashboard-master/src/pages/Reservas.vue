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
<!--
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
-->
<!--
<template>
  <div>
    <h1>Detalhes da Atividade</h1>
    <card :title="pedido.title" :subTitle="pedido.subTitle">
      <div slot="raw-content" class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuário</th>
              <th>Total</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ pedido.id }}</td>
              <td>{{ pedido.user }}</td>
              <td>{{ pedido.total }}</td>
              <td>{{ pedido.estado }}</td>
               <td><router-link :to="'detalhes/'+ item.id">Ver Detalhes</router-link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </card>
  </div>
</template>

<script>
import { Card } from "@/components";

export default {
  components: {
    Card,
  },
  data() {
    return {
      pedido: {},
    };
  },
  mounted() {
    // Recupera os detalhes da atividade do localStorage
    const reservaSelecionada = JSON.parse(localStorage.getItem("reservaSelecionada"));
    if (reservaSelecionada) {
      this.pedido = reservaSelecionada;
    }
  },
};
</script>

<style></style>
-->
<template>
  <div class="row">
    <div class="col-12">
      <h4>Pedidos de Reserva</h4>
      <card>
        <div slot="raw-content" class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>Utilizador</th>
                <th>Total</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in tabelaDados" :key="index">
                <td>{{ item.id }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.total }}</td>
                <td>{{ item.estado }}</td>
                <td><router-link :to="'detalhes/'+ item.id">Ver Detalhes</router-link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </card>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      tabelaDados: []
    };
  },
  mounted() {
    let dadosLocalStorage = JSON.parse(localStorage.getItem('reservas'));
    console.log(dadosLocalStorage)
    if (dadosLocalStorage) {
      this.tabelaDados = dadosLocalStorage;
    }
  },
};
</script>
<style></style>
