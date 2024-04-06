<template>
  <div>
    <the-button :active="active === 'stored'" @click="selectTab('stored')">Stored Resources</the-button>
    <the-button :active="active === 'add'" @click="selectTab('add')">Add Resource</the-button>
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
</style>