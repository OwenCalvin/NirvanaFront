import store from "../store"

export default class Probs {
  static range = 15
  static tick = 0

  static getCurrentTimeRangeIndex() {
    const now = new Date()
    const midnight = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0, 0, 0
    )
    return Math.floor(
      ((new Date()).getTime() - midnight.getTime()) / 1000 / 60 / Probs.range
    )
  }

  static getTimeRangeByIndex(index) {
    const now = new Date()
    const indexTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0, Probs.range * index, 0
    ).getTime()
    return indexTime - now.getTime()
  }

  static getKw(ms) {
    const currentIndex = Probs.getCurrentTimeRangeIndex()
    const prob = store.getters.probs[currentIndex]
    return (prob.slope / (Probs.range * 60 * 1000)) * ms + prob.value
  }

  static async launch() {
    await store.dispatch('setProbs')
    setInterval(() => {
      const currentIndex = Probs.getCurrentTimeRangeIndex()
      const ms = Probs.getTimeRangeByIndex(currentIndex + 1)
      store.dispatch('setCurrentValue', Probs.getKw(ms))
    }, 100)
  }
}
