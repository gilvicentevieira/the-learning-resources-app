<template> 
  <form @submit.prevent="submitForm">
    <label>Title</label>
    <input type="text" v-model="formData['title']">
    <label>Description</label>
    <textarea rows="4" v-model="formData['description']"></textarea>
    <label type="text">Link</label>
    <input type="text" v-model="formData['link']"/>
    <button>Add Resource</button>
    <teleport to="body">
      <form-dialog :content="dialogContent" :teste="teste"></form-dialog>
    </teleport>
  </form>
</template>

<script>
import FormDialog from './FormDialog.vue'

const errorTitle = 'Invalid Input'
const errorDescription = 'Unfortunately, at least one input value is invalid. \n Please check all inputs and make sure you enter at least a few characters into each input field'

const successTitle = 'Success !'
const successDescription = 'New resource added successfully !'

export default {
  components: {'form-dialog': FormDialog},
  emits: ['submit-res'],
  data(){
    return {
      formData: {},
      dialogContent: {},
    }
  },
  methods: {
    submitForm(){
      if(!this.formData.title || !this.formData.description || !this.formData.link){
        this.dialogContent = {title: errorTitle, description: errorDescription}
        return
      }
      this.dialogContent = {title: successTitle, description: successDescription}
      this.$emit('submit-res', this.formData)
      this.formData = {}
    },
    closeModal(){
      this.$refs.errorDialog.close()
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
</style>