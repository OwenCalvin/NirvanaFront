<template>
  <div>
    <!-- Intro -->
    <b-row class="team-section mb-3">
      <b-col>
        <b-row class="flex-column pt-5" align-h="center" align-v="center">
          <h4 class="n-light font-weight-bold sign">
            À propos
          </h4>
        </b-row>
        <b-row class="flex-column pb-5" align-h="center" align-v="center">
          <img src="/img/fish.svg" class="logos"/>
        </b-row>
        <b-row class="flex-column pt-5 pb-3" align-h="center" align-v="center">
          <h1 class="n-blue font-weight-black">
            <UnderlineText>
              L'équipe
            </UnderlineText>
          </h1>
        </b-row>
      </b-col>

      <!-- Team -->
      <!--<b-container fluid >
        <b-row class="text-center h-10 pb-1 d-flex align-items-center justify-content-center">
          <b-col class="text-center  d-flex flex-column align-items-center justify-content-center py-5" lg="3" md="12" v-for="(item, index) in names" :key="index">
            <div class="d-flex flex-column align-items-center justify-content-center">
              <img class="team-logos mb-4" :src="`/img/${item.img}.svg`">
              <h3 class="n-blue font-weight-bold">
                {{ item.text }}
              </h3>
            </div>
          </b-col>
        </b-row>
      </b-container>-->
    </b-row>

    <!-- Team -->
    <b-row class="mb-5">
      <b-container fluid>
        <b-row class="text-center pb-3 d-flex align-items-center justify-content-center">
          <b-col lg="3" md="6" class="py-4" v-for="(item, index) in names" :key="index">
            <img class="team-logos mb-4" :src="`/img/${item.img}.svg`">
            <h3 class="n-blue font-weight-medium">
              {{ item.text }}
            </h3>
          </b-col>
        </b-row>
      </b-container>
  </b-row>

    <!-- The project -->
    <b-row>
      <svg class="wave-footer n-fill-light mt-5" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 40.962">
        <path d="M1920,45.69H0l1.44-4.526s282.222-49.9,572.71-39.82c282.6,9.8,527.8,44.346,763.96,44.346,480,0,581.89-44.346,581.89-44.346Z"/>
      </svg>
      <b-col class="projet-section">
        <b-row class="flex-column pt-5 pb-4" align-h="center" align-v="center">
          <h1 class="n-blue font-weight-black">
            Le projet
          </h1>
        </b-row>
        <b-row class="flex-column pb-5 n-light" align-h="center" align-v="center">
          <b-col lg="7" md="9" sm="10" cols="11">
            <p>
              Ce projet constitue le produit final du projet interdisciplinaire centré sur un projet : "Comment sensibiliser les usagers du CPLN à la pollution numérique ?". Réalisé dans une démarche de sensibilisation, il montre la
              consommation des serveurs informatiques du CPLN en kWh. Les données sont une estimation du temps réel calculée à l'aide de techniques d'apprentissage par statistique (machine learning). Des
              comparaisons parlantes d'éléments de la vie réelle sont également calculées à partir du nombre de kWh. Pour ces conversions, nous nous sommes basés sur plusieurs sources, celles-ci sont disponible dans notre rapport, vous pouvez nous le demander par e-mail si cela vous intéresse.
              Le compteur est également accompagné d'un questionnaire de 8 questions visant à changer vos mauvaises habitudes et à terme à réduire votre
              pollution numérique.
            </p>
          </b-col>
        </b-row>
      </b-col>
      <svg class="wave-header n-fill-light" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 45.691">
        <path d="M0,0H1920l-1.44,4.526s-282.222,49.9-572.71,39.82C1063.25,34.545,818.05,0,581.89,0,101.89,0,0,44.345,0,44.345Z"/>
      </svg>
    </b-row>

    <!-- Why ?-->
    <b-row class="section pt-5">
      <b-col>
        <b-row class="flex-column pt-5 pb-4" align-h="center" align-v="center">
          <h1 class="n-blue font-weight-black">
            <UnderlineText>
              Pourquoi ?
            </UnderlineText>
          </h1>
        </b-row>
        <b-row class="flex-column n-light" align-h="center" align-v="center">
          <b-col lg="7" md="9" sm="10" cols="11">
            <p>
              Étant nous-mêmes des consommateurs des ces services et sensibles à l’écologie, le choix de ce projet nous a tout de suite conquis. Nous savons que c’est une question qui ne parle pas à tout le monde au premier abord,
              même si elle nous concerne tous. C’est ce “flou” sur la question qui nous a motivé à tenter d’y répondre. L'utilisation des outils informatiques ne cesse de croître.
              En tant qu’informaticiens, nous contribuons à l’essor des nouvelles technologies. De ce fait, nous participons encore plus directement à cette pollution.
            </p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <!-- Bye Bye -->
    <b-row>
      <b-col>
        <b-row class="flex-column mt-5 mb-5" align-h="center" align-v="center">
          <router-link to="/">
            <Button>
              Retour
            </Button>
          </router-link>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Button from '../components/Button'
import UnderlineText from '../components/UnderlineText'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    names: [{
      text: 'Owen Gombas',
      img: 'dolphin-jumping'
    }, {
      text: 'Malo Romano',
      img: 'fish-bone'
    }, {
      text: 'Dany da Costa ',
      img: 'shrimp'
    }, {
      text: 'David Darmanger',
      img: 'sea-horse'
    }]
  }),
  computed: {
    ...mapGetters(['currentValue'])
  },
  components: {
    Button,
    UnderlineText
  }
}
</script>

<style scoped lang="scss">
h1 {
  color: #315ef9;
  height: 6vh;
}

.favorite-fish {
  height: 1.5em;
}

.logos {
  height: 2.3em;
}

.team-logos {
  transition: .3s;
  opacity: 0.7;
  height: 6em;
}

.projet-section {
  background-color: rgb(239, 242, 255);
}

p {
  text-align: justify;
  font-size: 1.5em;
}

.wave-footer {
  margin-bottom: -1px;
  filter: drop-shadow(0px 2px 30px rgba(239, 242, 255, 0.714));
}

@media (max-width: 1200px) {
  p {
    font-size: 1.4em;
  }
}
</style>
