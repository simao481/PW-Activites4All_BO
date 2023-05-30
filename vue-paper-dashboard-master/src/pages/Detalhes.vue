<template>
  <div>
    <h1>Detalhes da Atividade</h1>
    <card :title="atividadeDetalhes.title" :subTitle="atividadeDetalhes.subTitle">
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
              <td>{{ atividadeDetalhes.id }}</td>
              <td>{{ atividadeDetalhes.user }}</td>
              <td>{{ atividadeDetalhes.total }}</td>
              <td>{{ atividadeDetalhes.estado }}</td>
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
      atividadeDetalhes: {},
    };
  },
  mounted() {
    // Recupera os detalhes da atividade do localStorage
    const reservaSelecionada = JSON.parse(localStorage.getItem("reservaSelecionada"));
    if (reservaSelecionada) {
      this.atividadeDetalhes = reservaSelecionada;
    }
  },
};
</script>

<style></style>
