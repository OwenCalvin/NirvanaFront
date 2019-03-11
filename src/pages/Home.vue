<template>
  <div>
    <b-row>
      <b-col class="landing n-bg-blue">
        <b-row class="flex-column h-100" align-h="center" align-v="center">
          <h3 class="text-center">
            <p>
              <UnderlineText color="#ffffff33" height="5">
                Depuis le 08.09.2019
              </UnderlineText>
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
      <svg class="wave-header n-fill-blue" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1920 47.962">
        <path d="M0,0H1920l-1.44,4.526s-282.222,49.9-572.71,39.819C1063.253,34.543,818.052,0,581.89,0,101.89,0,0,44.345,0,44.345Z"/>
      </svg>
    </b-row>

    <b-row class="n-blue values" align-h="center" align-v="center">
      <b-col class="text-center d-flex flex-column align-items-center py-5" md="4" xs="12" v-for="(item, index) in equals" :key="index">
        <div class="equivalent">
          <h2 class="pb-3" v-html="item.name"/>
          <h3 class="font-weight-bold value">{{ item.value() }}</h3>
          <h4 class="pt-3 n-light unit" v-html="item.unit"/>
        </div>
      </b-col>
    </b-row>

    <b-row align-h="center mt-5" align-v="center">
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
        </div>
      </b-col>
    </b-row>

    <b-row class="questions mt-4 mb-5" align-h="center" align-v="center">
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
          <h3 class="font-weight-bold n-blue">
            Merci de votre participation !
          </h3>
        </b-row>
      </b-col>
    </b-row>

    <b-row class="footer pt-5">
      <svg class="wave-footer n-fill-light" xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1920 40.962">
        <path  d="M1920,45.69H0l1.44-4.526s282.222-49.9,572.71-39.82c282.6,9.8,527.8,44.346,763.96,44.346,480,0,581.89-44.346,581.89-44.346Z"/>
      </svg>
      <b-col class="footer-content d-flex flex-column n-bg-light justify-content-center">
        <b-row class="flex-column " align-h="center" align-v="center">
          <h4 class="n-blue font-weight-bold sign">
            ecoblue.blue
          </h4>
        </b-row>
        <b-row class="flex-column py-2" align-h="center" align-v="center">
          <img src="../assets/img/fish.svg" class="favorite-fish"/>
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
  data: () => ({
    questionIndex: Number(localStorage.getItem('questionIndex')) || 0,
    questions: []
  }),
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
      this.questionIndex++;
      localStorage.setItem('questionIndex', this.questionIndex)
    },
    async answer(answerIndex) {
      this.questions[this.questionIndex].answers[answerIndex].votes++
      this.questions = this.calculatePortion(this.questions)
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
      return (this.co2() / (180 * 58)).toFixed(2)
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
          name: 'CO<sub>2</sub>',
          unit: 'Est les kg de CO<sub>2</sub> rejeté dû à la consommation d\'électricité',
          value: this.co2
        },
        {
          name: 'Arbres',
          unit: 'Est le nombre d\'arbres nécessaire pour élimer tout ce CO<sub>2</sub> en 1 jour',
          value: this.trees
        },
        {
          name: 'Consommation',
          unit: 'Est pourcentage de la consommation semestriel d\'un suisse',
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

.equivalent {
  max-width: 70%;
}

.landing h3 {
  font-weight: normal;
  font-size: 1.3em;
  opacity: .98;
}

h1 {
  font-weight: 900;
  font-size: 8vw;
  text-shadow: 4px 4px 0px #ffffff34;
}

.landing {
  z-index: 9999;
  color: white;
  min-height: 325px;
  height: 45vh;
}

.values {
  min-height: 55vh;
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
  color: #869ff9;
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

.wave-header {
  filter: drop-shadow(0px 2px 30px #2b5dff3f);
}

.wave-footer {
  filter: drop-shadow(0px 2px 30px #eff2ffb6);
}

@media (max-width: 640px) {
  h1 {
    font-size: 4em;
  }
}

.sub-title {
  font-size: 1.5em;
}
</style>
