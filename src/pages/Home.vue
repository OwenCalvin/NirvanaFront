<template>
  <div>
    <b-row>
      <b-col class="landing n-bg-blue">
        <b-row class="flex-column h-100" align-h="center" align-v="center">
          <h3 class="text-center">
            <p class="font-weight-medium">
              <UnderlineText color="#ffffff33" height="5">
                Depuis le 08.03.2019
                <p>
                  le datacenter du CPLN a consomé
                </p>
              </UnderlineText>
            </p>
            <p>
            </p>
          </h3>
          <h1>{{ currentValue.toFixed(2) }}</h1>
          <span class="kw-badge">kilowatt-heure</span>
        </b-row>
      </b-col>
    </b-row>
    <b-row>
      <svg class="wave-header n-fill-blue" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 47.962">
        <path d="M0,0H1920l-1.44,4.526s-282.222,49.9-572.71,39.819C1063.253,34.543,818.052,0,581.89,0,101.89,0,0,44.345,0,44.345Z"/>
      </svg>
    </b-row>

    <b-row class="n-blue" align-h="center" align-v="center">
      <b-col class="text-center values d-flex flex-column align-items-center justify-content-center py-5" lg="4" md="12" v-for="(item, index) in equals" :key="index">
        <div class="equivalent d-flex flex-column align-items-center justify-content-center">
          <!--<h2 class="pb-3" v-html="item.name"/>-->
          <img class="img-value pb-4" :src="`/img/${item.img}.svg`" :alt="item.name">
          <h3 class="font-weight-bold value">{{ item.value() }}</h3>
          <h5 class="badge-unit n-bg-light n-blue font-weight-bold py-1 px-3" v-html="item.unit">

          </h5>
          <h4 class="pt-3 n-light desc" v-html="item.desc"/>
        </div>
      </b-col>
    </b-row>

    <div class="questions">
      <b-row v-if="!began" class="mt-5" align-h="center" align-v="center">
        <b-col md="9">
          <div class="text-center">
            <h2 class="font-weight-black title n-light">
              <UnderlineText height="13" bottom="1">
                Questionnaire
              </UnderlineText>
            </h2>
            <p class="n-light sub-title">
              Nous vous proposons on petit questionnaire afin de remettre en question vos habitudes
            </p>
            <Button v-if="questions.length > 0" @click="nextQuestion">
              Commencer
            </Button>
            <div v-else class="n-bg-light n-blue font-weight-bold loading py-2">
              Chargement...
            </div>
          </div>
        </b-col>
      </b-row>

      <b-row v-else class="questions my-5" align-h="center" align-v="center">
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
          <b-row align-h="center" align-v="center">
            <h3 class="text-center font-weight-bold n-blue">
              Merci de votre participation !
            </h3>
          </b-row>
        </b-col>
      </b-row>
    </div>

    <b-row class="footer pt-5">
      <svg class="wave-footer n-fill-light" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1920 40.962">
        <path  d="M1920,45.69H0l1.44-4.526s282.222-49.9,572.71-39.82c282.6,9.8,527.8,44.346,763.96,44.346,480,0,581.89-44.346,581.89-44.346Z"/>
      </svg>
      <b-col class="footer-content text-center d-flex flex-column n-bg-light justify-content-center">
        <b-row class="flex-column " align-h="center" align-v="center">
          <h4 class="n-blue font-weight-bold sign">
            ecoblue.blue
          </h4>
        </b-row>
        <b-row class="flex-column py-2" align-h="center" align-v="center">
          <img src="/img/fish.svg" class="favorite-fish"/>
        </b-row>
        <b-row class="flex-column" align-h="center" align-v="center">
          <h4 class="about">
            <router-link to="/about">
              <UnderlineText>
                A propos du projet
              </UnderlineText>
            </router-link>
          </h4>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Button from '../components/Button'
import Answer from '../components/Answer'
import Question from '../components/Question'
import UnderlineText from '../components/UnderlineText'
import Api from '../class/Api'
import { mapGetters } from 'vuex'


export default {
  data: () => {
    const value = localStorage.getItem('questionIndex')
    return {
      questionIndex: value !== null ? Number(value) : -1,
      questions: []
    }
  },
  async created() {
    try {
      this.questions = this.calculatePortion((await Api.getQuestions()).data)
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    calculatePortion(questions) {
      return questions.map((question) => {
        const total = question.answers.reduce((total, answer) => {
          return total + answer.votes
        }, 0)
        question.answers = question.answers.map((answer) => {
          answer.portion = answer.votes / total
          return answer
        })
        return question
      })
    },
    nextQuestion() {
      this.questionIndex++
      this.refreshLocalStorage()
    },
    async answer(answerIndex) {
      this.questions[this.questionIndex].answers[answerIndex].votes++
      this.questions = this.calculatePortion(this.questions)
      await Api.postAnswer(this.questionIndex, answerIndex)
    },
    refreshLocalStorage() {
      localStorage.setItem('questionIndex', this.questionIndex)
    },
    co2() {
      return (129 * this.currentValue / 1000).toFixed(2)
    },
    trees() {
      return (this.co2() * (365 / 25)).toFixed(0)
    },
    batteries() {
      return (this.currentValue / 0.01).toFixed(0)
    },
    paris() {
      return (this.co2() / (180 * 58)).toFixed(4)
    },
    person() {
      return (this.currentValue / (7520 / 2) * 100).toFixed(2) + '%'
    },
    gsearch() {
      return (this.co2() * 1000 / 7).toFixed(0)
    }
  },
  computed: {
    ...mapGetters(['currentValue']),
    question() {
      return this.questions[this.questionIndex]
    },
    began() {
      return this.questionIndex >= 0
    },
    equals() {
      return [
        {
          img: 'co2',
          name: 'CO<sub>2</sub>',
          unit: 'kg',
          desc: `${this.co2()} kg de CO<sub>2</sub> ont été rejeté dû à la consommation d\'électricité`,
          value: this.co2
        },
        {
          img: 'tree',
          name: 'Arbres',
          unit: 'arbres',
          desc: `Il aura fallu ${this.trees()} arbres pour éliminer tout ce CO<sub>2</sub> en 1 jour`,
          value: this.trees
        },
        {
          img: 'google',
          name: 'Google',
          unit: 'recherches',
          desc: `Vous auriez pu faire ${this.gsearch()} recherches google pour rejeter autant de CO<sub>2</sub>`,
          value: this.gsearch
        },
        {
          img: 'plane',
          name: 'Avion',
          unit: 'voyages Paris-Genève',
          desc: `Vous auriez pu faire ${this.paris()} voyages Paris-Genève en avion pour rejeter autant de CO<sub>2</sub>`,
          value: this.paris
        },
        {
          img: 'battery',
          name: 'Batteries',
          unit: 'batteries',
          desc: `Vous auriez pu charger ${this.batteries()} fois votre smartphone avec autant de kWh`,
          value: this.batteries
        },
        {
          img: 'light',
          name: 'Consommation',
          unit: 'consommation semestrielle',
          desc: `${this.currentValue.toFixed(2)} kWh équivaut à ${this.person()} de la consommation semestrielle d\'un suisse moyen`,
          value: this.person
        }
      ]
    }
  },
  components: {
    Button,
    Answer,
    Question,
    UnderlineText
  }
}
</script>

<style scoped lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.title {
  font-size: 3em;
}

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
  opacity: .98;
}

h1 {
  font-weight: 900;
  font-size: 9vw;
  text-shadow: 0.027em 0.027em 0px rgba(255, 255, 255, 0.204);
}

.landing {
  z-index: 9999;
  color: white;
  min-height: 325px;
  height: 45vh;
}

.values {
  height: 50vh;
  min-height: 400px;
  max-height: 500px;
}

.footer {
  margin-top: 8em;
}

.footer-content {
  height: 150px
}

.favorite-fish{
  height: 2em;
}

a {
  color: rgb(134, 159, 249);
  transition: all .3s;
}

.sign {
  font-size: 1.3em;
}

.about {
  font-size: 1.25em;
}

.value {
  font-size: 4em;
}

.questions {
  margin-top: 200px;
  margin-bottom: 200px;
}

.wave-header {
  margin-top: -1px;
  filter: drop-shadow(0px 2px 30px rgba(43, 93, 255, 0.247));
}

.wave-footer {
  filter: drop-shadow(0px 2px 30px rgba(239, 242, 255, 0.714));
}

@media (max-width: 700px) {
  h1 {
    font-size: 4em;
  }
}

.sub-title {
  font-size: 1.5em;
}

.badge-unit {
  border-radius: 0.3em;
}

.desc {
  max-width: 87%;
}

.loading {
  width: auto;
  border-radius: 0.3em;
}

.img-value {
  width: 4em;
  opacity: 0.8;
}
</style>
