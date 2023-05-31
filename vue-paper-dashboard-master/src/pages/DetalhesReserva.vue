<!--
<template>
  <card class="card" :title="`Dados Pedido #${marcacoes.id_atividade}`">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <label>Atividade</label>
            <div class="dados">
              <p>{{ marcacoes.id_atividade }}</p>
            </div>
          </div>
          <div class="col-md-5">
            <label>Cliente</label>
            <div class="dados">
              <p>{{ marcacoes.id_cliente }}</p>
            </div>
          </div>
          <div class="col-md-2">
            <label>Nº Pessoas</label>
            <div class="dados">
              <p>{{ marcacoes.n_pessoas }}</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <label>Data</label>
            <div class="dados">
              <p>{{ marcacoes.dataReserva }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <label>Hora Inicio</label>
            <div class="dados">
              <p>{{ marcacoes.horaInicio }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <label>Hora Fim</label>
            <div class="dados">
              <p>{{ marcacoes.horaFim }}</p>
            </div>
          </div>
        </div>
        <h1 class="dados_cat">Dados do Responsável</h1>
        <div class="row">
          <div class="col-md-6">
            <label>Nome</label>
            <div class="dados">
              <p>{{ marcacoes.responsavel.nome }}</p>
            </div>
          </div>
          <div class="col-md-6">
            <label>Email</label>
            <div class="dados">
              <p>{{ marcacoes.responsavel.email }}</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <label>Telefone</label>
            <div class="dados">
              <p>{{ marcacoes.responsavel.telefone }}</p>
            </div>
          </div>
          <div class="col-md-6">
            <label>Data de Nascimento</label>
            <div class="dados">
              <p>{{ marcacoes.responsavel.dataNascimento }}</p>
            </div>
          </div>
        </div>
        <h1 class="dados_cat">Dados para Faturação</h1>
        <div class="row">
          <div class="col-md-6">
            <label>Morada</label>
            <div class="dados">
              <p>{{ marcacoes.dadosFaturacao.morada }}</p>
            </div>
          </div>
          <div class="col-md-6">
            <label>Nº Utente</label>
            <div class="dados">
              <p>{{ marcacoes.dadosFaturacao.numeroUtente }}</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <label>Nº Contribuinte</label>
            <div class="dados">
              <p>{{ marcacoes.dadosFaturacao.numeroContribuinte }}</p>
            </div>
          </div>
          <div class="col-md-6">
            <label>Código Postal</label>
            <div class="dados">
              <p>{{ marcacoes.dadosFaturacao.codigoPostal }}</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Atribua um funcionário responsável</label>
              <select class="custom-select" v-model="funcionarioSelecionado">
                <option disabled value="">Selecione uma opção</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div class="row">
            <div class="col-md-6">
              <p-button type="success" round @click.native.prevent="confirmarMarcacao">
                Confirmar Marcação
              </p-button>
            </div>
            <div class="col-md-6">
              <p-button type="danger" round @click.native.prevent="anularMarcacao">
                Anular Marcação
              </p-button>
            </div>
          </div>

        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
import MarcacaoSucesso from "../Notifications/MarcacaoSucesso.vue";
import MarcacaoErro from "../Notifications/MarcacaoErro.vue";
export default {
  data() {
    const idMarcacao = this.$route.params.id;
    let marcacoesData = JSON.parse(localStorage.getItem("pedidos")) || {};
    return {
      marcacoes: marcacoesData.find(objeto => objeto.id_marcacao === idMarcacao) || {},
      funcionarioSelecionado: null,
      type: ["", "info", "success", "warning", "danger"],
    };
  },
  methods: {
    confirmarMarcacao() {
      if (this.funcionarioSelecionado !== null) {
        const idMarcacao = this.$route.params.id;
        let marcacoesData = JSON.parse(localStorage.getItem("pedidos")) || [];
        let m = marcacoesData.find(objeto => objeto.id_marcacao === idMarcacao) || {}
        marcacoesData.splice(m, 1)
        localStorage.setItem("pedidos", JSON.stringify(marcacoesData))
        m.funcResponsavel = this.funcionarioSelecionado
        let reservasData = JSON.parse(localStorage.getItem("reservas")) || [];
        reservasData.push(m)
        localStorage.setItem("reservas", JSON.stringify(reservasData))
        this.$router.push('/pedidos');
        this.notifySucesso('top', 'center')
      } else {
        this.notifyErro('top', 'center')
      }

    },
    notifySucesso(verticalAlign, horizontalAlign) {
      this.$notify({
        component: MarcacaoSucesso,
        icon: "ti-check",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: "success",
      });
    },
    notifyErro(verticalAlign, horizontalAlign) {
      this.$notify({
        component: MarcacaoErro,
        icon: "ti-user",
        horizontalAlign: horizontalAlign,
        verticalAlign: verticalAlign,
        type: "warning",
      });
    },
  },
};
</script>
<style>
.dados {
  background-color: #F4F3EF;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.dados p {
  padding: 10px 0px 10px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #9A9A9A;
}

.dados_cat {
  font-size: 20px;
  color: #9A9A9A;
}
</style>
-->


<!--
<template>
  <card class="card" :title="`Dados Pedido #${reservas.id}`">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <label>Reserva</label>
            <div class="dados">
              <p>{{ reservas.id }}</p>
            </div>
          </div>
          <div class="col-md-5">
            <label>Cliente</label>
            <div class="dados">
              <p>{{ reservas.email }}</p>
            </div>
          </div>
        </div>
        <h1 class="dados_cat">Atividades</h1>
        <div class="row">  
          <div class="col-md-2">
            <label>Atividade</label>
            <div class="dados">
              <p>{{ reservas.atividades[0].id }}</p>
            </div>
          </div>
           <div class="col-md-2">
            <label>Participantes</label>
            <div class="dados">
              <p>{{ reservas.atividades[0].participantes }}</p>
            </div>
          </div>
            <div class="col-md-3">
            <label>Data</label>
            <div class="dados">
              <p>{{ reservas.atividades[0].data.data }}</p>
            </div>
          </div>
            <div class="col-md-3">
            <label>Hora</label>
            <div class="dados">
              <p>{{ reservas.atividades[0].data.hora }}</p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <label>Data</label>
            <div class="dados">
              <p>{{ reservas.data }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <label>Estado</label>
            <div class="dados">
              <p>{{ reservas.estado }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <label>Preço</label>
            <div class="dados">
              <p>{{ reservas.total }}</p>
            </div>
          </div>
        </div>
        <h1 class="dados_cat">Gestor atribuido</h1>
        <div class="row">  
          <div class="col-md-2">
            <label>Atividade</label>
            <div class="dados">
              <p>{{ reservas.gestor }}</p>
            </div>
          </div>
        </div>  
               
        <div class="row">
            <div class="col-md-12">
                <div class="form-group">
                <label>Atribua um funcionário responsável</label>
                <select class="custom-select" v-model="funcionarioSelecionado">
                    <option disabled value="">Selecione uma opção</option>
                    <option v-for="gestor in gestores" :key="gestor.id" :value="gestor.nome">{{ gestor.nome }}</option>
                </select>
                </div>
            </div>
        </div>
        <div class="text-center">
          <div class="row">
            <div class="col-md-6">
              <p-button type="success" round @click.native.prevent="confirmarReserva">
                Confirmar 
              </p-button>
            </div>
            <div class="col-md-6">
              <p-button type="danger" round @click.native.prevent="rejeitarReserva">
                Rejeitar
              </p-button>
            </div>
          </div>

        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>

<script>

export default {
  data() {
    const idMarcacao = this.$route.params.id;
    let marcacoesData = JSON.parse(localStorage.getItem("reservas")) || {};
    let gestoresData = JSON.parse(localStorage.getItem("gestores")) || [];
    return {
      reservas: marcacoesData.find(objeto => objeto.id === idMarcacao) || {},
      gestores: gestoresData,
      funcionarioSelecionado: null,
      type: ["", "info", "success", "warning", "danger"],
    };
  },
    methods: {
    confirmarReserva() {
      // Obtenha os dados da reserva atual do Local Storage
      let reservasData = JSON.parse(localStorage.getItem("reservas")) || [];

      // Atualize o estado da reserva para "aceite"
      this.reservas.estado = "Aceite";

      // Armazene o gestor selecionado na reserva
      this.reservas.gestor = this.funcionarioSelecionado;

      // Atualize os dados da reserva no Local Storage
      const index = reservasData.findIndex(item => item.id === this.reservas.id);
      if (index !== -1) {
        reservasData[index] = this.reservas;
      }

      localStorage.setItem("reservas", JSON.stringify(reservasData));

      // Redirecione o usuário para outra página, se necessário
      // Adicione o código de redirecionamento aqui, se necessário
    },
    rejeitarReserva() {
      // Obtenha os dados da reserva atual do Local Storage
      let reservasData = JSON.parse(localStorage.getItem("reservas")) || [];

      // Atualize o estado da reserva para "rejeitado"
      this.reservas.estado = "Rejeitado";

      // Atualize os dados da reserva no Local Storage
      const index = reservasData.findIndex(item => item.id === this.reservas.id);
      if (index !== -1) {
        reservasData[index] = this.reservas;
      }

      localStorage.setItem("reservas", JSON.stringify(reservasData));
    },
    
  }
}
</script>

<style>
.dados {
  background-color: #F4F3EF;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.dados p {
  padding: 10px 0px 10px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #9A9A9A;
}

.dados_cat {
  font-size: 20px;
  color: #9A9A9A;
}
</style>
-->

<template>
  <card class="card" :title="`Dados Pedido #${reservas.id}`">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <label>Reserva</label>
            <div class="dados">
              <p>{{ reservas.id }}</p>
            </div>
          </div>
          <div class="col-md-5">
            <label>Cliente</label>
            <div class="dados">
              <p>{{ reservas.email }}</p>
            </div>
          </div>
        </div>
        <h1 class="dados_cat">Atividades</h1>
        <div class="row" v-for="atividade in reservas.atividades" :key="atividade.id">
          <div class="col-md-2">
            <label>Atividade</label>
            <div class="dados">
              <p>{{ getAtividadeNome(atividade.id) }}</p>
            </div>
          </div>
          <div class="col-md-2">
            <label>Participantes</label>
            <div class="dados">
              <p>{{ atividade.participantes }}</p>
            </div>
          </div>
          <div class="col-md-3">
            <label>Data</label>
            <div class="dados">
              <p>{{ atividade.data.data }}</p>
            </div>
          </div>
          <div class="col-md-3">
            <label>Hora</label>
            <div class="dados">
              <p>{{ atividade.data.hora }}</p>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-4">
            <label>Data</label>
            <div class="dados">
              <p>{{ reservas.data }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <label>Estado</label>
            <div class="dados">
              <p>{{ reservas.estado }}</p>
            </div>
          </div>
          <div class="col-md-4">
            <label>Preço</label>
            <div class="dados">
              <p>{{ reservas.total }}</p>
            </div>
          </div>
        </div>
        <h1 class="dados_cat">Gestor atribuido</h1>
        <div class="row">  
          <div class="col-md-2">
            <label>Atividade</label>
            <div class="dados">
              <p>{{ reservas.gestor }}</p>
            </div>
          </div>
        </div>  
               
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>Atribua um funcionário responsável</label>
              <select class="custom-select" v-model="funcionarioSelecionado">
                <option disabled value="">Selecione uma opção</option>
                <option v-for="gestor in gestores" :key="gestor.id" :value="gestor.nome">{{ gestor.nome }}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="text-center">
          <div class="row">
            <div class="col-md-6">
              <p-button type="success" round @click.native.prevent="confirmarReserva">
                Confirmar 
              </p-button>
            </div>
            <div class="col-md-6">
              <p-button type="danger" round @click.native.prevent="rejeitarReserva">
                Rejeitar
              </p-button>
            </div>
          </div>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>

<script>
export default {
  data() {
    const idMarcacao = this.$route.params.id;
    let marcacoesData = JSON.parse(localStorage.getItem("reservas")) || {};
    let gestoresData = JSON.parse(localStorage.getItem("gestores")) || [];
    let atividadesData = JSON.parse(localStorage.getItem("atividades")) || [];
    return {
      reservas: marcacoesData.find(objeto => objeto.id === idMarcacao) || {},
      gestores: gestoresData,
      atividades: atividadesData,
      funcionarioSelecionado: null,
      type: ["", "info", "success", "warning", "danger"],
    };
  },
  methods: {
    getAtividadeNome(id) {
      const atividade = this.atividades.find(atividade => atividade.id === id);
      return atividade ? atividade.titulo : "";
    },
    confirmarReserva() {
      // Obtenha os dados da reserva atual do Local Storage
      let reservasData = JSON.parse(localStorage.getItem("reservas")) || [];

      // Atualize o estado da reserva para "aceite"
      this.reservas.estado = "Aceite";

      // Armazene o gestor selecionado na reserva
      this.reservas.gestor = this.funcionarioSelecionado;

      // Atualize os dados da reserva no Local Storage
      const index = reservasData.findIndex(item => item.id === this.reservas.id);
      if (index !== -1) {
        reservasData[index] = this.reservas;
      }

      localStorage.setItem("reservas", JSON.stringify(reservasData));

      // Redirecione o usuário para outra página, se necessário
      // Adicione o código de redirecionamento aqui, se necessário
    },
    rejeitarReserva() {
      // Obtenha os dados da reserva atual do Local Storage
      let reservasData = JSON.parse(localStorage.getItem("reservas")) || [];

      // Atualize o estado da reserva para "rejeitado"
      this.reservas.estado = "Rejeitado";

      // Atualize os dados da reserva no Local Storage
      const index = reservasData.findIndex(item => item.id === this.reservas.id);
      if (index !== -1) {
        reservasData[index] = this.reservas;
      }

      localStorage.setItem("reservas", JSON.stringify(reservasData));
    },
  },
};
</script>

<style>
.dados {
  background-color: #F4F3EF;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.dados p {
  padding: 10px 0px 10px 20px;
  font-size: 14px;
  font-weight: 400;
  color: #9A9A9A;
}

.dados_cat {
  font-size: 20px;
  color: #9A9A9A;
}
</style>

