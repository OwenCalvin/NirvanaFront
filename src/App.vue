<template>
<!-- HTML -->
  <div id="app">
    <!-- Affichage des watts -->
    <Datacenter></Datacenter>

    <br><br><br>

    <!--- Three Column Section -->
    <Element></Element>
  </div>


</template>

<script>
import Datacenter from './components/Datacenter'
import Element from './components/Element'

export default {
  name: 'app',
  components: {
    Datacenter,
    Element
  }
}
</script>

<style></style>