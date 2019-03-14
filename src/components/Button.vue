<template>
  <div>
    <button @click="$emit('click')">
      <slot/>
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
  })
}
</script>

<style scoped lang="scss">
button {
  background: rgb(43, 93, 255);
  border: none;
  color: white;
  padding: 5px 15px;
  border-radius: 8px !important;
  font-weight: bold;
  font-size: 1.5em !important;
  box-shadow: 0px 7px 30px 0px rgba(43, 93, 255, 0.349);
  transition: all .2s;
  user-select: none;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 7px 40px 0px rgba(43, 93, 255, 0.349);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 0px 2px 10px 0px rgba(43, 93, 255, 0.349);
  }
}
</style>
