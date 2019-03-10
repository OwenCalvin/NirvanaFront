import Axios from 'axios'

export default class Api {
  static api = Axios.create({
    baseURL: 'https://api.ecoblue.blue/rest',
    withCredentials: false
  });

  static getQuestions () {
    return this.api.get('/question')
  }

  static postAnswer (questionIndex, answerIndex) {
    return this.api.post('/question', {
      questionIndex,
      answerIndex
    })
  }

  static getProbs () {
    return this.api.get('/prob')
  }
}
