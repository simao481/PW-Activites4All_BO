<!--

<template>
  <div>
    <label for="selectedItem">Escolha um item:</label>
    <select v-model="selectedItem" id="selectedItem">
      <option v-for="item in itemList" :value="item">{{ item }}</option>
    </select>
    <p>Item selecionado: {{ selectedItem }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemList: ["Item 1", "Item 2", "Item 3", "Item 4"], // Lista de itens
      selectedItem: "", // Item selecionado
    };
  },
};
</script>
-->

<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" :subTitle="table1.subTitle">
        <div slot="raw-content" class="table-responsive">
          <paper-table :columns="table1.columns" :data="table1.data">
            <template v-slot:cell(Estado)="props">
              <select v-model="props.row.Estado" @change="handleEstadoSelection(props.row, props.row.Estado)">
                <option value="">Escolher</option>
                <option v-for="estado in estados" :value="estado" :key="estado">{{ estado }}</option>
              </select>
            </template>
            <template v-slot:cell(Gestor)="props">
              <select v-model="props.row.Gestor" @change="handleManagerSelection(props.row, props.row.Gestor)">
                <option value="">Escolher</option>
                <option v-for="manager in managers" :value="manager" :key="manager">{{ manager }}</option>
              </select>
            </template>
          </paper-table>
        </div>
      </card>
    </div>
  </div>
</template>

<script>
import { Card, PaperTable } from "@/components";

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
        columns: ["Id", "Nome", "Atividades", "Data", "Estado", "Gestor"],
        data: [
          {
            id: 1,
            nome: "Dakota Rice",
            atividades: "$36.738",
            data: "Niger",
            estado: "",
            gestor: "",
          },
        ],
      },
    };
  },
};
</script>
<style></style>
