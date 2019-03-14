<template>
  <div id="app">
    <b-container fluid v-if="!ie">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </b-container>
    <b-container class="h-100 w-100 position-absolute" v-else fluid>
      <b-row class="h-100 w-100 text-center" align-h="center" align-v="center">
        <b-col class="no-browser" md="6" sm="11">
          <h1>
            Nous faisons partie du mouvement anti-InternetExplorer,
            veuillez s'il vous plaît utiliser un autre naviguateur (Chrome, Firefox, Edge, ...)
          </h1>
          <a href="https://www.google.com/intl/fr_ALL/chrome/">
            <Button class="mt-5">
              Télécharger chrome
            </Button>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Probs from './class/Probs'
import Button from './components/Button'
import { detect } from 'detect-browser'

export default {
  name: 'app',
  data: () => ({
    browser: detect().name
  }),
  async created() {
    await Probs.launch()
  },
  computed: {
    ie() {
      return this.browser === 'ie'
    }
  },
  components: {
    Button
  }
}
</script>

<style lang="scss">
* {
  outline: none !important;
  font-family: 'Metropolis', 'Helvetica Neue', 'Segoe Ui', 'Roboto', sans-serif;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.1s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.no-browser {
  color: rgb(43, 93, 255);
  background: white;
  h1 {
    font-size: 1.5em;
  }
}

html, body {
  padding: 0;
  margin: 0;
}
</style>