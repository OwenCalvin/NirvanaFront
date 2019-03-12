<template>
  <div>
    <!-- Intro -->
    <b-row>
      <b-col>
        <b-row class="flex-column pt-2" align-h="center" align-v="center">
          <h4 class="n-light font-weight-bold sign">
            A propos
          </h4>
        </b-row>
        <b-row class="flex-column pb-4" align-h="center" align-v="center">
          <img src="/img/fish.svg" class="favorite-fish"/>
        </b-row>
        <b-row class="flex-column pb-2" align-h="center" align-v="center">
          <h1 class="n-blue font-weight-bold">
            <UnderlineText>
              L'équipe
            </UnderlineText>
          </h1>
        </b-row>
      </b-col>
    </b-row>

    <!-- Team -->
    <b-container fluid>
      <b-row class="text-center">
        <b-col md="3" class="py-3" v-for="(item, index) in names" :key="index">
          <h3 class="n-blue font-weight-bold">
            {{ item.text }}
          </h3>
        </b-col>
      </b-row>
    </b-container>
    
    <!-- Le projet -->
    <b-row class="section projet-section">
      <b-col>
        <b-row class="flex-column pt-2" align-h="center" align-v="center">
          <h1 class="n-blue font-weight-bold">
              L'équipe
          </h1>
        </b-row>
        <b-row class="flex-column pb-2 " align-h="center" align-v="center">
          <p>Ce projet constitue le produit final du projet de TIP "Comment sensibiliser les usagers du CPLN à la pollution numérique ?". Réalisé dans une démarche de sensibilisation, il montre la
          consommation des serveurs informatiques du CPLN en kWh. Les données sont une estimation du temps réel calculée à l'aide de techniques d'apprentissage par statistique (machine learning). Des
          comparaisons parlantes d'éléments de la vie réelle sont également calculées depuis le nombre de kWh. Pour ces conversions, nous nous sommes basés sur plusieurs sources, qui peuvent être
          retrouvées dans notre rapport disponible par ce lien. Le compteur est également accompagné d'un questionnaire de 8 questions visant à changer vos mauvaises habitudes et à terme à réduire votre
          pollution numérique.</p>
        </b-row>
      </b-col>
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
        <b-row class="flex-column pb-2 " align-h="center" align-v="center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices accumsan dui, ultrices rutrum purus mattis ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
            Aliquam aliquam tellus massa, sed ornare leo blandit ornare. In posuere mollis tincidunt. Donec sollicitudin nulla lacus, vestibulum eleifend elit vehicula vel. Praesent sed nibh rhoncus,
             ultricies quam sit amet, venenatis tortor. Pellentesque sodales non augue ac pulvinar. Sed vehicula justo sit amet ligula hendrerit, ac ultricies sapien interdum. Donec maximus justo nunc, 
             quis semper dolor fringilla non. Duis vitae leo felis. Nunc sed dolor et dui posuere placerat id in erat.</p>
        </b-row>
      </b-col>
    </b-row>

    <!-- Pour qui ? -->
    <b-row class="section">
      <b-col>
        <b-row class="flex-column pt-2" align-h="center" align-v="center">
          <h1 class="n-blue font-weight-bold">
            <UnderlineText>
                Pour qui ?
            </UnderlineText>
          </h1>
        </b-row>
        <b-row class="flex-column pb-2 " align-h="center" align-v="center">
          <p>Donec semper condimentum dolor eget rutrum. Praesent nisl mauris, aliquet eget arcu sit amet, tincidunt iaculis nisi. Fusce vitae est molestie, fringilla nisi quis, dignissim dui. 
            Suspendisse felis turpis, vestibulum id mattis id, tempor at purus. Vestibulum posuere tincidunt scelerisque. Donec eu dui leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
            Sed eu dolor lacinia, feugiat quam id, auctor arcu.</p>
        </b-row>
      </b-col>
    </b-row>

    <!-- Bye Bye -->
    <b-row class="section">
      <b-col>
        <b-row class="flex-column pb-2" align-h="center" align-v="center">
          <Button>
            Retour
          </Button>
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
    Button,
    UnderlineText
  }
}
</script>

<style scoped lang="scss">
h1 {
  color: #315ef9;
  height: 10vh;
}
.favorite-fish{
  height: 1.5em;
}
.projet-section{
  background-color: rgb(239, 242, 255);
}
.section{
  margin-top: 100px;
  padding: 15px;
}
p{
  width: 55%;
}
</style>
