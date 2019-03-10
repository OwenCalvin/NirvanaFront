<template>
  <div id="app">
    <b-container fluid>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Probs from './class/Probs'

export default {
  name: 'app',
  async created() {
    await Probs.launch()
  }
}
</script>

<style lang="scss">
* {
  outline: none !important;
  font-family: 'Avenir', sans-serif;
}
html, body {
  padding: 0;
  margin: 0;
}
.blue {
  color: #2b5dff;
}
</style>