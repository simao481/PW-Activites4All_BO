<template>
  <card class="card" title="Editar Perfil">
    <div>
      <form @submit.prevent>
        <div class="row">
          <div class="col-md-5">
            <fg-input
              type="text"
              label="Empresa"
              :disabled="true"
              placeholder="Activities4ALL"
              v-model="user.company"
            >
            </fg-input>
          </div>
          <div class="col-md-3">
            <fg-input
              type="text"
              label="Username"
              placeholder="Username"
              v-model="user.username"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="email"
              label="Email"
              placeholder="Email"
              v-model="user.email"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Primeiro Nome"
              placeholder="First Name"
              v-model="user.firstName"
            >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input
              type="text"
              label="Último Nome"
              placeholder="Last Name"
              v-model="user.lastName"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <fg-input
              type="text"
              label="Morada"
              placeholder="Home Address"
              v-model="user.address"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <fg-input
              type="text"
              label="Cidade"
              placeholder="City"
              v-model="user.city"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="text"
              label="País"
              placeholder="Country"
              v-model="user.country"
            >
            </fg-input>
          </div>
          <div class="col-md-4">
            <fg-input
              type="number"
              label="Postal Code"
              placeholder="ZIP Code"
              v-model="user.postalCode"
            >
            </fg-input>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label>About Me</label>
              <textarea
                rows="5"
                class="form-control border-input"
                placeholder="Here can be your description"
                v-model="user.aboutMe"
              >
              </textarea>
            </div>
          </div>
        </div>
        <div class="text-center">
          <p-button type="info" round @click.native.prevent="updateProfile">
            Update Profile
          </p-button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </card>
</template>
<script>
export default {
  data() {
    return {
      user: {
        company: "Activities4ALL",
        username: "michael23",
        email: "",
        firstName: "Chet",
        lastName: "Faker",
        address: "Melbourne, Australia",
        city: "Melbourne",
        postalCode: "",
        aboutMe: `We must accept finite disappointment, but hold on to infinite hope.`,
      },
    };
  },
  methods: {
    updateProfile() {
      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
<style></style>


<!--
<script>
export default {
  data() {
    return {
      user: {
        // Defina as propriedades do usuário com valores padrão ou valores do local storage, se disponíveis
        company: localStorage.getItem("userCompany") || "Activities4ALL",
        username: localStorage.getItem("userUsername") || "michael23",
        email: localStorage.getItem("userEmail") || "",
        firstName: localStorage.getItem("userFirstName") || "Chet",
        lastName: localStorage.getItem("userLastName") || "Faker",
        address: localStorage.getItem("userAddress") || "Melbourne, Australia",
        city: localStorage.getItem("userCity") || "Melbourne",
        postalCode: localStorage.getItem("userPostalCode") || "",
        aboutMe:
          localStorage.getItem("userAboutMe") ||
          "We must accept finite disappointment, but hold on to infinite hope.",
      },
    };
  },
  methods: {
    updateProfile() {
      // Salvar as propriedades do usuário no local storage antes de atualizar o perfil
      localStorage.setItem("userCompany", this.user.company);
      localStorage.setItem("userUsername", this.user.username);
      localStorage.setItem("userEmail", this.user.email);
      localStorage.setItem("userFirstName", this.user.firstName);
      localStorage.setItem("userLastName", this.user.lastName);
      localStorage.setItem("userAddress", this.user.address);
      localStorage.setItem("userCity", this.user.city);
      localStorage.setItem("userPostalCode", this.user.postalCode);
      localStorage.setItem("userAboutMe", this.user.aboutMe);

      alert("Your data: " + JSON.stringify(this.user));
    },
  },
};
</script>
*/
-->