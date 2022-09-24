<template>
    <div v-if="currentTutorial" class="edit-form">
      <h4>Tutorial</h4>
      <form>
        <div class="form-group">
          <label for="title">Título</label>
          <input
            type="text"
            class="form-control"
            id="title"
            v-model="currentTutorial.title"
          />
        </div>
  
        <div class="form-group">
          <label for="description">Descrição</label>
          <input
            type="text"
            class="form-control"
            id="description"
            v-model="currentTutorial.description"
          />
        </div>
  
        <div class="form-group">
          <label><strong>Status:</strong></label>
          {{ currentTutorial.published ? "Published" : "Pending" }}
        </div>
      </form>
  
      <button
        class="badge badge-primary mr-2"
        v-if="currentTutorial.published"
        @click="updatePublished(false)"
      >
        UnPublish
      </button>
      <button
        v-else
        class="badge badge-primary mr-2"
        @click="updatePublished(true)"
      >
        Publish
      </button>
  
      <button class="badge badge-danger mr-2" @click="deleteTutorial">
        Delete
      </button>
  
      <button type="submit" class="badge badge-success" @click="updateTutorial">
        Update
      </button>
      <p>{{ message }}</p>
    </div>
  
    <div v-else>
      <br />
      <p>Pressione um Tutorial para mais informações...</p>
    </div>
  </template>
  n  
  <script>
  import TutorialDataService from "../services/TutorialDataService";
  
  export default {
    name: "tutorial",
    props: ["tutorial"],
    data() {
      return {
        currentTutorial: null,
        message: "",
      };
    },
    watch: {
      tutorial: function(tutorial) {
        this.currentTutorial = { ...tutorial };
        this.message = "";
      },
    },
    methods: {
      updatePublished(status) {
        TutorialDataService.update(this.currentTutorial.key, {
          published: status,
        })
          .then(() => {
            this.currentTutorial.published = status;
            this.message = "Status atualizado com sucesso!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      updateTutorial() {
        const data = {
          title: this.currentTutorial.title,
          description: this.currentTutorial.description,
        };
  
        TutorialDataService.update(this.currentTutorial.key, data)
          .then(() => {
            this.message = "Tutorial atualizado com sucesso!";
          })
          .catch((e) => {
            console.log(e);
          });
      },
  
      deleteTutorial() {
        TutorialDataService.delete(this.currentTutorial.key)
          .then(() => {
            this.$emit("refreshList");
          })
          .catch((e) => {
            console.log(e);
          });
      },
    },
    mounted() {
      this.message = "";
      this.currentTutorial = { ...this.tutorial }
    },
  };
  </script>