<template>
  <div>
    <b-row>
      <b-col class="landing">
        <b-row class="flex-column w-100 h-100" align-h="center" align-v="center">
          <h3 class="text-center">
            <p>
              Depuis le 08.09.2019
            </p>
            <p>
              le datacenter du CPLN a consomé
            </p>
          </h3>
          <h1>{{ currentValue.toFixed(2) }}</h1>
          <span class="kw-badge">Kilowatt-heure</span>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <svg class="wave-header" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1920 47.962">
        <path d="M0,0H1920V44s-296.2,8.914-563.647,0C1059.126,34.093,775.725,6.249,522.764,6.249,42.764,6.249,0,44,0,44Z" fill="#2b5dff"/>
      </svg>
    </b-row>


    <b-row class="values" align-h="center" align-v="center">
      <b-col class="text-center" md="4" xs="12" v-for="(item, index) in equals" :key="index">
        <a href="#creation"><i class="fas fa-tree"></i></a>
        <h2 v-html="item.name"/>
        <h3>{{ item.value() }}</h3>
        <h4 v-html="item.unit"/>
      </b-col>
    </b-row>

    <b-row>
      <b-col v-if="questionIndex < questions.length">
        <Question
        v-if="question"
        :item="question"
        :index="questionIndex + 1"
        :total="questions.length"
        :last="questionIndex + 1 === questions.length"
        @answered="answer"
        @next="nextQuestion"/>
      </b-col>
      <b-col v-else>
        finito
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Button from '../components/Button'
import Answer from '../components/Answer'
import Question from '../components/Question'
import Api from '../class/Api'
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    questionIndex: Number(localStorage.getItem('questionIndex')) || 0,
    questions: []
  }),
  async created() {
    try {
      this.questions = (await Api.getQuestions()).data
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    nextQuestion() {
      this.questionIndex++;
      localStorage.setItem('questionIndex', this.questionIndex)
    },
    async answer(answerIndex) {
      console.log(this.questionIndex, answerIndex)
      await Api.postAnswer(this.questionIndex, answerIndex)
    },
    co2() {
      return (129 * this.currentValue / 100).toFixed(2)
    },
    trees() {
      return (this.co2() * (365 / 25)).toFixed(2)
    },
    batteries() {
      return (this.currentValue / 0.01).toFixed(2)
    },
    paris() {
      return (this.co2() / (180 * 58) * 100 ).toFixed(2)+ '%'
    },
    person() {
      return (this.currentValue / (7520 / 2) * 100).toFixed(2) + '%'
    }
  },
  computed: {
    ...mapGetters(['currentValue']),
    question() {
      return this.questions[this.questionIndex]
    },
    equals() {
      return [
        {
          name: 'Il aura fallu',
          unit: 'arbres pour élimer tout ce CO<sub>2</sub> en 1 jour',
          value: this.trees
        }, {
          name: 'Equivalent en CO<sub>2</sub> de',
          unit: 'pourcent d\'un aller-retour Paris/Geneve a été produit',
          value: this.paris
        }, {
          name: 'L\'équivalent en électricité de',
          unit: 'pourcent de la consommation semestriel d\'un suisse moyen',
          value: this.person
        }
      ]
    }
  },
  components: {
    Button,
    Answer,
    Question
  }
}
</script>

<style scoped lang="scss">
.kw-badge {
  background: rgba(255, 255, 255, 0.24);
  color: white;
  font-size: 1.3em;
  padding: 3px 15px;
  font-weight: bold;
  border-radius: 10px
}
.landing h3 {
  font-weight: normal;
  font-size: 1.3em;
  opacity: .9;
}
h1 {
  font-weight: bolder;
  font-size: 8vw;
}
.landing {
  z-index: 9999;
  color: white;
  height: 40vh;
  background: #2B5DFF;
}
.values {
  height: 60vh;
}
</style>
