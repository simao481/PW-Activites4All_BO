

<!--
<template>
  <div class="row">
    <div class="col-md-12">
      <card>
        <template slot="header">
          <h4 class="card-title">Paper Dashboard Headings</h4>
          <p class="card-category">
            Created using
            <a href="https://www.google.com/fonts/specimen/Muli">Muli</a> Font
            Family
          </p>
        </template>
        <div class="content">
          <div class="typo-line">
            <h1>
              <p class="category">Header 1</p>
              Paper Dashboard Heading
            </h1>
          </div>
          <div class="typo-line">
            <h2>
              <p class="category">Header 2</p>
              Paper Dashboard Heading
            </h2>
          </div>
          <div class="typo-line">
            <h3>
              <p class="category">Header 3</p>
              Paper Dashboard Heading
            </h3>
          </div>
          <div class="typo-line">
            <h4>
              <p class="category">Header 4</p>
              Paper Dashboard Heading
            </h4>
          </div>
          <div class="typo-line">
            <h5>
              <p class="category">Header 5</p>
              Paper Dashboard Heading
            </h5>
          </div>
          <div class="typo-line">
            <h6>
              <p class="category">Header 6</p>
              Paper Dashboard Heading
            </h6>
          </div>
          <div class="typo-line">
            <p>
              <span class="category">Paragraph</span>Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
              enim ad minim veniam.
            </p>
          </div>
          <div class="typo-line">
            <p class="category">Quote</p>
            <blockquote>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam.
              </p>
              <small> Steve Jobs, CEO Apple </small>
            </blockquote>
          </div>
          <div class="typo-line">
            <p class="category">Muted Text</p>
            <p class="text-muted">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet.
            </p>
          </div>
          <div class="typo-line">

            <p class="category">Coloured Text</p>
            <p class="text-primary">
              Text Primary - Light Bootstrap Table Heading and complex bootstrap
              dashboard you've ever seen on the internet.
            </p>
            <p class="text-info">
              Text Info - Light Bootstrap Table Heading and complex bootstrap
              dashboard you've ever seen on the internet.
            </p>
            <p class="text-success">
              Text Success - Light Bootstrap Table Heading and complex bootstrap
              dashboard you've ever seen on the internet.
            </p>
            <p class="text-warning">
              Text Warning - Light Bootstrap Table Heading and complex bootstrap
              dashboard you've ever seen on the internet.
            </p>
            <p class="text-danger">
              Text Danger - Light Bootstrap Table Heading and complex bootstrap
              dashboard you've ever seen on the internet.
            </p>
          </div>
          <div class="typo-line">
            <h2>
              <p class="category">Small Tag</p>
              Header with small subtitle
              <br />
              <small>".small" is a tag for the headers</small>
            </h2>
          </div>
          <div class="typo-line">
            <p class="category">Lists</p>
            <div class="row">
              <div class="col-md-3">
                <h5>Unordered List</h5>
                <ul>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li class="list-unstyled">
                    <ul>
                      <li>List Item</li>
                      <li>List Item</li>
                      <li>List Item</li>
                    </ul>
                  </li>
                  <li>List Item</li>
                </ul>
              </div>
              <div class="col-md-3">
                <h5>Ordered List</h5>
                <ol>
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                </ol>
              </div>
              <div class="col-md-3">
                <h5>Unstyled List</h5>
                <ul class="list-unstyled">
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                </ul>
              </div>
              <div class="col-md-3">
                <h5>Inline List</h5>
                <ul class="list-inline">
                  <li>List Item</li>
                  <li>List Item</li>
                  <li>List Item</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="typo-line">
            <p class="category">Blockquotes</p>
            <div class="row">
              <div class="col-md-6">
                <h5>Default Blockquote</h5>
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                </blockquote>
              </div>
              <div class="col-md-6">
                <h5>Blockquote with Citation</h5>
                <blockquote>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer posuere erat a ante.
                  </p>
                  <small
                    >Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </small>
                </blockquote>
              </div>
            </div>
          </div>
          <div class="typo-line">
            <p class="category">Code</p>
            <p>
              This is
              <code>.css-class-as-code</code>, an example of an inline code
              element. Wrap inline code within a
              <code> &lt;code&gt;...&lt;/code&gt;</code>tag.
            </p>
            <pre>
1. #This is an example of preformatted text. 2. #Here is another line of code</pre
            >
          </div>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style></style>
-->

<template>
  <div>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title" :subTitle="table1.subTitle">
          <div slot="raw-content" class="table-responsive">
            <paper-table :data="table1.data" :columns="table1.columns"></paper-table>
          </div>
        </card>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-6">
        <div class="mb-3">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" v-model="novoProfissional.nome" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="funcao">Função:</label>
          <input type="text" id="funcao" v-model="novoProfissional.funcao" class="form-control" required>
        </div>
        <div class="d-grid">
          <button class="btn btn-primary" @click="adicionarProfissional" :disabled="!validarFormulario">
            Adicionar Profissional
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { PaperTable } from "@/components";

export default {
  components: {
    PaperTable,
  },
  data() {
    return {
      table1: {
        title: "Profissionais",
        subTitle: "",
        columns: ["Id", "Nome", "Funcao"],
        data: [],
      },
      novoProfissional: {
        nome: "",
        funcao: "",
      },
    };
  },
  created() {
    this.carregarDados();
  },
  methods: {
    carregarDados() {
      const data = localStorage.getItem("gestores");
      if (data) {
        this.table1.data = JSON.parse(data);
      }
    },
    salvarDados() {
      localStorage.setItem("gestores", JSON.stringify(this.table1.data));
    },
    adicionarProfissional() {
      if (this.validarFormulario()) {
        const novoId = this.table1.data.length + 1;
        const novoProfissional = {
          id: novoId,
          nome: this.novoProfissional.nome,
          funcao: this.novoProfissional.funcao,
        };

        this.table1.data.push(novoProfissional);
        this.salvarDados();

        this.resetarFormulario();
      }
    },
    resetarFormulario() {
      this.novoProfissional.nome = "";
      this.novoProfissional.funcao = "";
    },
    validarFormulario() {
      return this.novoProfissional.nome.trim() !== "" && this.novoProfissional.funcao.trim() !== "";
    },
  },
};
</script>

<style></style>

