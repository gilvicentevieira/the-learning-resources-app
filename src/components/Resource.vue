<template>
  <div class="container">
    <div class="first-row">
      <h1>{{res.title}}</h1>
      <the-button @click="$emit('delete-res', res.link)">Delete</the-button>
    </div>
    <p>{{ res.description }}</p>
    <a :href="res.link" target="_blank">View Resource</a>
  </div>
</template>

<script>
export default {
  props: ['res'],
  emits: ['delete-res']
}

</script>

<style scoped>
 
  .container{
    position: relative;
    padding: 10px;
    height: 12vh;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 10px 5px lightgray;
    border-radius: 10px;
  }

  .container:hover {
    background: rgb(235, 235, 235);
  }

  .first-row{
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  h1 {
    font-weight: bolder;
    margin-top: 5px;
    margin-bottom: 15px;
  }

  a{
    text-decoration: none;
    color: orange;
    margin-top: 5px;
  }

</style>
