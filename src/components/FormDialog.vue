<template>
  <dialog ref="errorDialog">
    <header>
      <h3>{{content.title}}</h3>
    </header>
    <main>
      <p>{{content.description}}</p>
      <div>
        <the-button active @click="closeModal">Okay</the-button>
      </div>
    </main>
  </dialog>
</template>

<script>

export default {
  props: ['content', 'teste'],
  inject: ['switchTab'],
  methods: {
    closeModal(){
      this.$refs.errorDialog.close()
      if(this.content.title === 'Success !'){
        this.switchTab()
      }
    }
  },
  beforeUpdate(){
    this.$refs.errorDialog.showModal()
  }
}
</script>

<style scoped>
  dialog{
    width: 60vw;
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

  div{
    margin-top: 15px;
  }
</style>
