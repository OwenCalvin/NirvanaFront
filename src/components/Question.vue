<template>
  <b-row id="answer" align-v="center" align-h="center" class="flex-column text-center">
    <b-col md="6" xs="11">
      <span class="n-blue">{{ index }} / {{ total }}</span>
      <h3 class="question n-blue">{{ item.question }}</h3>
      <h3 v-if="answered" class="n-blue explanation">{{ item.explanation }}</h3>
      <Answer
      v-scroll-to="'#answer'"
      @click="answer(item, index)"
      class="answer-item"
      v-for="(item, index) in item.answers"
      :correct="item.correct"
      :notCorrect="item.notCorrect"
      :disabled="answered"
      :portion="item.portion"
      :key="index">
        {{ item.text }}
      </Answer>
      <Button v-scroll-to="'#answer'" @click="next" v-if="answered" class="btn-next">
        {{ last ? 'Terminer' : 'Question suivante' }}
      </Button>
    </b-col>
  </b-row>
</template>

<script>
import Button from './Button';
import Answer from './Answer';

export default {
  props: ['item', 'total', 'index', 'last'],
  data: () => ({
    answered: false
  }),
  methods: {
    answer(item, index) {
      if (!this.answered) {
        this.item.answers.map((answer, index) => {
          if (answer.good) {
            this.$set(answer, 'correct', true)
          }
          if (!answer.good && this.item.answers.indexOf(item) === index) {
            this.$set(answer, 'notCorrect', true)
          }
        })
        this.answered = true
        this.$emit('answered', index)
      }
    },
    next() {
      this.answered = false
      this.$emit('next')
    }
  },
  components: {
    Answer,
    Button
  }
}
</script>

<style scoped lang="scss">
span {
  font-size: 1.2em
}

h3 {
  font-size: 1.7em;
  font-weight: bold;
}

.answer-item {
  margin-top: 20px;
  margin-bottom: 20px;
}

.btn-next {
  margin-bottom: 15px;
  margin-top: 15px;
}

.explanation {
  font-weight: normal
}

.question,
.explanation {
  font-size: 2em;
}
</style>
