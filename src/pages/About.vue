<template>
  <div>
    <!-- Intro -->
    <b-row class="team-section projet">
      <b-col>
        <b-row class="flex-column pt-2" align-h="center" align-v="center">
          <h4 class="n-light font-weight-bold sign">
            A propos
          </h4>
        </b-row>
        <b-row class="flex-column pb-4" align-h="center" align-v="center">
          <img src="/img/fish.svg" class="logos"/>
        </b-row>
        <b-row class="flex-column pb-2" align-h="center" align-v="center">
          <h1 class="n-blue font-weight-bold">
            <UnderlineText>
              L'équipe
            </UnderlineText>
          </h1>
        </b-row>
      </b-col>

      <!-- Team -->
      <b-container fluid >
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
      </b-container>
    </b-row>
    
    <!-- Le projet -->
    <b-row>
      <svg class="wave-footer n-fill-light mt-5" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 40.962">
        <path d="M1920,45.69H0l1.44-4.526s282.222-49.9,572.71-39.82c282.6,9.8,527.8,44.346,763.96,44.346,480,0,581.89-44.346,581.89-44.346Z"/>
      </svg>
      <b-col class="projet-section">
        <b-row class="flex-column pt-5" align-h="center" align-v="center">
          <h1 class="n-blue font-weight-bold">
              Le projet
          </h1>
        </b-row>
        <b-row class="flex-column pb-5 n-light" align-h="center" align-v="center">
          <p>Ce projet constitue le produit final du projet de TIP "Comment sensibiliser les usagers du CPLN à la pollution numérique ?". Réalisé dans une démarche de sensibilisation, il montre la
          consommation des serveurs informatiques du CPLN en kWh. Les données sont une estimation du temps réel calculée à l'aide de techniques d'apprentissage par statistique (machine learning). Des
          comparaisons parlantes d'éléments de la vie réelle sont également calculées depuis le nombre de kWh. Pour ces conversions, nous nous sommes basés sur plusieurs sources, qui peuvent être
          retrouvées dans notre rapport disponible par ce lien. Le compteur est également accompagné d'un questionnaire de 8 questions visant à changer vos mauvaises habitudes et à terme à réduire votre
          pollution numérique.</p>
        </b-row>
      </b-col>
      <svg class="wave-header n-fill-light" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 45.691">
        <path d="M0,0H1920l-1.44,4.526s-282.222,49.9-572.71,39.82C1063.25,34.545,818.05,0,581.89,0,101.89,0,0,44.345,0,44.345Z"/>
      </svg>
    </b-row>

    <!-- Pourquoi ?-->
    <b-row class="section">
      <b-col>
        <b-row class="flex-column pt-2" align-h="center" align-v="center">
          <h1 class="n-blue font-weight-bold">
            <UnderlineText>
                Pourquoi ?
            </UnderlineText>
          </h1>
        </b-row>
        <b-row class="flex-column n-light" align-h="center" align-v="center">
          <p>Étant nous-mêmes des consommateurs des services internet et sensibles à l’écologie, le choix de ce projet nous a tout de suite conquis. Nous savons que c’est une question qui ne parle pas à tout le monde au premier abord,
             même si elle nous concerne tous. C’est ce “flou” sur la question qui nous a motivé à tenter d’y répondre. L'utilisation des outils informatiques ne cesse de croître. 
             En tant qu’informaticiens, nous contribuons à l’essor des nouvelles technologies. De ce fait, nous participons encore plus directement à cette pollution.</p>
        </b-row>
      </b-col>
    </b-row>

    <!-- Bye Bye -->
    <b-row>
      <b-col>
        <b-row class="flex-column mt-5 mb-5" align-h="center" align-v="center">
          <router-link to="/" class="button">Retour</router-link>
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
      }
    ]
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
.favorite-fish{
  height: 1.5em;
}
.team-logos{
  transition: .3s;
  height: 14em;
}
.team-section{
    height: 100vh;
    min-height: 1200px;
}
.projet-section{
  background-color: rgb(239, 242, 255);
}
.section{
  padding: 25px;
  margin-top: 100px;
}
p{
  text-align: justify;
  width: 45%;
  font-size: 1.5em;
}
.wave-footer {
  margin-bottom: -1px;
  filter: drop-shadow(0px 2px 30px rgba(239, 242, 255, 0.714));
}
.button {
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
    text-decoration: none;
    transform: scale(1.03);
    box-shadow: 0px 7px 40px 0px rgba(43, 93, 255, 0.349);
  }
  &:active {
    transform: scale(0.98);
    box-shadow: 0px 2px 10px 0px rgba(43, 93, 255, 0.349);
  }
}
@media (max-width: 1200px) {
  p{
    width: 75%;
    font-size: 1.3em;
  }
  .team-logos{
    height: 8em;
  }
}
@media (max-width: 992px){
  .team-section{
    height: 100vh;
  }
  .projet{
    margin-bottom: 150px;
  }
}
</style>
