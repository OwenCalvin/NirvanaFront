<template>
  <div>
    <b-container class="bv-example-row">
      <!-- Centrer -->
      <b-row class="flex-column w-100 h-100" align-h="center">
        <b-col>
          <h1>L'équipe</h1>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="bv-example-row">
      <b-row align-h="center">
        <b-col cols="3" v-for="(item, index) in names" :key="index">
          {{ item.text }}
        </b-col>
      </b-row>
    </b-container>
    
    <!-- Le projet -->

    <!-- Pourquoi ?-->

    <!-- Pour qui ? -->

    <Button>
      Retour
    </Button>
  </div>
</template>

<script>
import Button from '../components/Button'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    names: [{
        text: 'owen'
      }, {
        text: 'david'
      }, {
        text: 'dany'
      }, {
        text: 'malo'
      }
    ]
  }),
  computed: {
    ...mapGetters(['currentValue'])
  },
  components: {
    Button
  }
}
</script>

<style scoped lang="scss">
h1 {
  color: #315ef9;
  height: 10vh;
}
</style>
