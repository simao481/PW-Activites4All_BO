
<template>
  <div class="container">
      <detalhes-reserva> </detalhes-reserva>
  </div>
</template>
<script>

import DetalhesReserva from "./DetalhesReserva.vue";
export default {
  components: {
    DetalhesReserva,
  },
};
</script>
<style></style>

<!--
<template>
  <div class="container">
    <detalhes-reserva :reservas="reservas"></detalhes-reserva>
  </div>
</template>

<script>
import DetalhesReserva from "./DetalhesReserva.vue";

export default {
  components: {
    DetalhesReserva,
  },
  data() {
    return {
      reservas: {},
    };
  },
};
</script>
-->