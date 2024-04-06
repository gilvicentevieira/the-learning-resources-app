<template>
  <the-header>RememberMe</the-header>
  <the-main></the-main>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheMain from './components/TheMain.vue'

export default {
  components: {
    'the-header': TheHeader,
    'the-main': TheMain
  }
}

</script>

<style>
* {
  margin: 0;
}

</style>