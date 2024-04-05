<template>
  <div>
    <button :class="{ active: active === 'stored'}" @click="selectTab('stored')">Stored Resources</button>
    <button :class="{ active: active === 'add'}" @click="selectTab('add')">Add Resource</button>
  </div>
</template>

<script>

export default {
  props: ['active'],
  events: ['select-tab'],
  methods: {
    selectTab(option){
      if(option === this.active) return

      this.$emit('select-tab', option)
    }
  }
}
</script>

<style scoped>
  div{
    display: flex;
    align-items: center;
    height: 7vh;
    padding: 10px;
    box-shadow: 2px 2px 10px 5px lightgray;
    border-radius: 10px;
  }

  button {
    font-size: 20px;
    background-color: white;
    color: rgb(27, 27, 82);
    border-style: none;
    border-radius: 2px;
    padding: 10px;
  }

  button:not(.active):hover {
    background-color: rgb(207, 151, 198);
  }

  .active {
    background-color: rgb(27, 27, 82);
    color: white;
  }
</style>