<template> 
  <form @submit.prevent="submitForm">
    <label>Title</label>
    <input type="text" v-model="formData['title']" required>
    <label>Description</label>
    <textarea rows="4" v-model="formData['description']" required></textarea>
    <label type="text">Link</label>
    <input type="text" v-model="formData['link']" required/>
    <button>Add Resource</button>
    <teleport to="body">
      <dialog ref="error-dialog">
        <h1>This is a dialog</h1>
      </dialog>
    </teleport>
  </form>
</template>

<script>

export default {
  emits: ['submit-res'],
  data(){
    return {
      formData: {}
    }
  },
  methods: {
    submitForm(){
      console.log("submitForm method")
      this.$emit('submit-res', this.formData)
      this.formData = {}
    }
  }
}
</script>

<style scoped>
  form{
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
    padding: 15px;
    box-shadow: 2px 2px 10px 5px lightgray;
    border-radius: 10px;
  }

  label{
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  input{
    font-size: 17px;
    padding: 3px;
  }

  input:focus {
    background: rgb(207, 151, 198);
    border: 1px solid rgb(161, 84, 162);
    outline: none;
  }

  textarea{
    font-size: 17px;
    padding: 3px;
  }

  textarea:focus{
    background: rgb(207, 151, 198);
    border: 1px solid rgb(161, 84, 162);
    outline: none;
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

  button:hover{
    background: rgb(21, 21, 67);
  }

  button:active{
    background: rgb(12, 12, 35);
  }
</style>