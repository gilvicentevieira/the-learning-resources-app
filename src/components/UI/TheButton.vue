<template>
  <button :class="{active: active}">
    <slot></slot>
  </button>
</template>

<script>

export default{
  props: {
    active: Boolean
  }
}

</script>

<style scoped>
  button {
    width: 12vw;
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

  button:not(.active):active {
    background-color: rgb(240, 176, 229);
  }

  .active {
    background-color: rgb(27, 27, 82);
    color: white;
  }

  button:is(.active):hover{
    background: rgb(21, 21, 67);
  }

  button:is(.active):active{
    background: rgb(12, 12, 35);
  }

</style>