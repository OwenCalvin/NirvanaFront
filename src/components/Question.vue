<template>
  <b-row align-v="center" align-h="center" class="flex-column text-center">
    <b-col md="5">
      <span class="blue">{{ index }} / {{ total }}</span>
      <h3 class="blue">{{ item.question }}</h3>
      <Answer
      @click.native="answer(item, index)"
      class="answer-item"
      v-for="(item, index) in item.answers"
      :correct="item.correct"
      :notCorrect="item.notCorrect"
      :disabled="answered"
      :key="index">
        {{ item.text }}
      </Answer>
      <Button @click.native="next" v-show="answered" class="btn-next">
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
          console.log(answer)
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
  margin-top: 15px;
}
</style>
