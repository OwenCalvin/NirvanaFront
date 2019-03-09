<template>
  <div>
    <b-row>
      <b-col class="landing">
        <b-row class="flex-column w-100 h-100" align-h="center" align-v="center">
          <h3>Datacenter Watt</h3>
          <h1>{{ currentValue.toFixed(2) }}</h1>
        </b-row>
      </b-col>
    </b-row>

    <b-row align-h="center">
      <b-col class="text-center" md="4" xs="12" v-for="(item, index) in equals" :key="index">
        <a href="#creation"><i class="fas fa-tree"></i></a>
        <h1></h1>
        <h4>{{ item.unit }}</h4>
      </b-col>
    </b-row>
    
    <Button>
      Tsdest
    </Button>
  </div>
</template>

<script>
import Button from '../components/Button'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    equals: [{
        unit: 'trees'
      }, {
        unit: 'g'
      }, {
        unit: 'battery'
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
  font-weight: bolder;
  font-size: 15vw;
}
.landing {
  color: white;
  height: 50vh;
  background: #2B5DFF;
}
</style>
