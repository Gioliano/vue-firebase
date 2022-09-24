<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Titulo</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Descrição</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submeter</button>
    </div>

    <div v-else>
      <h4>Successo!</h4>
      <button class="btn btn-success" @click="newTutorial">Adicionar</button>
    </div>
  </div>
  </template>
  
  <script>
  import TutorialDataService from "../services/TutorialDataService";
  
  export default {
    name: "add-tutorial",
    data() {
      return {
        tutorial: {
          title: "",
          description: "",
          published: false
        },
        submitted: false
      };
    },
    methods: {
      saveTutorial() {
        var data = {
          title: this.tutorial.title,
          description: this.tutorial.description,
          published: false
        };
  
        TutorialDataService.create(data)
          .then(() => {
            console.log("Novo Item criado com sucesso");
            this.submitted = true;
          })
          .catch(e => {
            console.log(e);
          });
      },
      
      newTutorial() {
        this.submitted = false;
        this.tutorial = {
          title: "",
          description: "",
          published: false
        };
      }
    }
  };
  </script>