<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <div
        class="col-md-6 col-xl-3"
        v-for="stats in statsCards"
        :key="stats.title"
      >
        <stats-card>
          <div
            class="icon-big text-center"
            :class="`icon-${stats.type}`"
            slot="header"
          >
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{ stats.title }}</p>
            {{ stats.value }}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{ stats.footerText }}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row">
  
      <div class="col-md-6 col-12">
        <chart-card
          title="Atividades mais realizadas"
          :chart-data="preferencesChart.data"
          chart-type="Pie"
        >
          <span slot="footer">
            <i class="ti-timer"></i> Atividades mais realizadas</span
          >
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Corrida
            <i class="fa fa-circle text-danger"></i> Asa Delta
            <i class="fa fa-circle text-warning"></i> Canoagem
          </div>
        </chart-card>
      </div>

      <!--<div class="col-md-6 col-12">
        <chart-card
          title="2015 Sales"
          sub-title="All products including Taxes"
          :chart-data="activityChart.data"
          :chart-options="activityChart.options"
        >
          <span slot="footer">
            <i class="ti-check"></i> Data information certified
          </span>
          <div slot="legend">
            <i class="fa fa-circle text-info"></i> Tesla Model S
            <i class="fa fa-circle text-warning"></i> BMW 5 Series
          </div>
        </chart-card>
      </div>-->
    </div>
  </div>
</template>
<script>
import { StatsCard, ChartCard } from "@/components/index";
import Chartist from "chartist";
export default {
  components: {
    StatsCard,
    ChartCard,
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      statsCards: [
        {
          type: "warning",
          icon: "ti-check-box",
          title: "Nº de Atividades Aceites",
          value: "",
          footerText: "Updated now",
          footerIcon: "ti-reload",
        },
        {
          type: "danger",
          icon: "ti-close",
          title: "Nº Atividades Rejeitadas",
          value: "",
          footerText: "In the last hour",
          footerIcon: "ti-timer",
        },
        {
          type: "success",
          icon: "ti-wallet",
          title: "Ganhos",
          value: "",
          footerText: "Last day",
          footerIcon: "ti-calendar",
        },
        {
          type: "info",
          icon: "ti-user",
          title: "Nº de profissionais",
          value: "",
          footerText: "Updated now",
          footerIcon: "ti-reload",
        },
      ],

      activityChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mai",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          series: [
            [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
            [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795],
          ],
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false,
          },
          height: "245px",
        },
      },
      preferencesChart: {
        data: {
          labels: ["62%", "32%", "6%"],
          series: [62, 32, 6],
        },
        options: {},
      },
      ganhosEmpresa: 0, // Adicione a propriedade ganhosEmpresa
    };
  },
  created() {
    this.calcularAtividadesAceites(); // Chame a função para calcular o valor inicial
    this.calcularAtividadesRejeitadas(); // Chame a função para calcular o valor inicial
    this.calcularGanhos(); // Chame a função para calcular o valor inicial
    this.calcularNumeroGestores();
  //  this.calcularAtividadesMaisRealizadas();
  },

  methods: {
    calcularAtividadesAceites() {
      const reservasData = JSON.parse(localStorage.getItem("reservas")) || [];
      const atividadesAceites = reservasData.filter(reserva => reserva.estado === "Aceite");
      this.$set(this.statsCards[0], 'value', atividadesAceites.length); // Atualize o valor no objeto statsCards
    },

    calcularAtividadesRejeitadas() {
      const reservasData = JSON.parse(localStorage.getItem("reservas")) || [];
      const atividadesRejeitadas = reservasData.filter(reserva => reserva.estado === "rejeitado");
      this.$set(this.statsCards[1], 'value', atividadesRejeitadas.length); // Atualize o valor no objeto statsCards
    },

    calcularGanhos() {
      const reservasData = JSON.parse(localStorage.getItem("reservas")) || [];
      const ganhos = reservasData.reduce((total, reserva) => {
        if (reserva.estado === "Aceite") {
          const valorReserva = parseFloat(reserva.total);
          if (!isNaN(valorReserva)) {
            return total + valorReserva;
          }
        }
        return total;
      }, 0);
      this.$set(this.statsCards[2], 'value', ganhos.toFixed(2)); // Atualize o valor no objeto statsCards
    }, 
    calcularNumeroGestores() {
      const gestoresData = JSON.parse(localStorage.getItem("gestores")) || [];
      const numeroGestores = gestoresData.length;
      this.$set(this.statsCards[3], 'value', numeroGestores);
    },
  
  calcularAtividadesMaisRealizadas() {
      const reservasData = JSON.parse(localStorage.getItem("reservas")) || [];

      // Filtrar reservas com estado "aceite"
      const reservasAceites = reservasData.filter(
        (reserva) => reserva.estado === "aceite"
      );

      // Contar o número de ocorrências de cada atividade
      const atividadesCount = {};
      for (const reserva of reservasAceites) {
        const atividadeId = reserva.atividades.id;
        if (atividadesCount[atividadeId]) {
          atividadesCount[atividadeId]++;
        } else {
          atividadesCount[atividadeId] = 1;
        }
      }

      // Ordenar as atividades por quantidade decrescente
      const atividadesOrdenadas = Object.keys(atividadesCount).sort(
        (a, b) => atividadesCount[b] - atividadesCount[a]
      );

      // Limitar o número de atividades mostradas no gráfico (opcional)
      const maxAtividades = 5;
      const atividadesLabels = atividadesOrdenadas.slice(0, maxAtividades);
      const atividadesSeries = atividadesLabels.map(
        (label) => atividadesCount[label]
      );

      // Atualizar os dados do gráfico de pizza
      this.preferencesChart.data.labels = atividadesLabels;
      this.preferencesChart.data.series = atividadesSeries;
    },
  },
};
</script>

<style></style>
