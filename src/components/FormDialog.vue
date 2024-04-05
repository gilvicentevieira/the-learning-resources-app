<template>
  <dialog ref="errorDialog">
    <header>
      <h3>{{content.title}}</h3>
    </header>
    <main>
      <p>{{content.description}}</p>
      <button @click="closeModal">Okay</button>
    </main>
  </dialog>
</template>

<script>

export default {
  props: ['content', 'teste'],
  methods: {
    closeModal(){
      this.$refs.errorDialog.close()
    }
  },
  beforeUpdate(){
    this.$refs.errorDialog.showModal()
  }
}
</script>

<style scoped>
  dialog{
    margin: auto;
    padding: 0px;
    border: none;
    border-radius: 10px;
  }

  dialog::backdrop{
    background-color: rgba(0, 0, 0, 0.75);
  }

  header{
    background-color: rgb(114, 32, 81);
    height: 7vh;
    color: white;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  main {
    padding: 15px;
  }

  p{
    padding: 10px;
  }

  button {
    width: 10vw;
    margin-top: 10px;
    font-size: 20px;
    background: rgb(27, 27, 82);
    color: white;
    border-style: none;
    border-radius: 2px;
    padding: 10px;
  }
</style>
