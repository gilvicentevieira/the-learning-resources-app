<template>
  <div>
    <h1>{{res.title}}</h1>
    <p>{{ res.description }}</p>
    <a :href="res.link" target="_blank">View Resource</a>
    <label @click="$emit('delete-res', res.link)">Delete</label>
  </div>
</template>

<script>
export default {
  props: ['res'],
  emits: ['delete-res']
}

</script>

<style scoped>
 
  div{
    position: relative;
    padding: 10px;
    height: 12vh;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 10px 5px lightgray;
    border-radius: 10px;
  }

  div:hover {
    background: rgb(235, 235, 235);
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

  label {
    color: rgb(27, 27, 82);
    position: absolute;
    padding: 10px;
    top: 15px;
    left: 90%;
  }

  label:hover {
    background-color: rgb(207, 151, 198);
  }

</style>
