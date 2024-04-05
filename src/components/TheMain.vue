<template>
  <main>
    <section>
      <tabs :active="activeTab" @select-tab="selectTab"></tabs>
    </section>
    <section v-if="activeTab === 'stored'">
      <resource v-for="res in resources" .key="res.link" :res="res" @delete-res="deleteResource"></resource>
    </section>
    <section v-if="activeTab === 'add'">
      <add-resource @submit-res="addResource"/>
    </section>
  </main>
</template>

<script>
import Tabs from './Tabs'
import Resource from './Resource.vue'
import AddResource from './AddResource.vue'

export default {
  components: {
    'tabs': Tabs,
    'resource': Resource,
    'add-resource': AddResource
  },
  data(){
    return {
      activeTab: 'add',
      resources: [
        {title: 'Official Vue guide', description: 'The official Vue.js documentation.', link: 'https://vuejs.org/'},
        {title: 'Official Angular guide', description: 'The official Angular documentation.', link: 'https://angular.io/'}
      ]
    }
  },
  methods: {
    selectTab(tab){
      this.activeTab = tab
    },
    deleteResource(id){
      this.resources = this.resources.filter((res)=> res.link !== id)
    },
    addResource(res){
      this.resources.push({title: res.title, description: res.description, link: res.link})
    }
  }
}
</script>

<style scoped>

 main {
  width: 70vw;
  margin: auto;
  padding: 4%;
 }

</style>