import store from '../store'

export default class Probs {
  static range = 15
  static unitPerDay = 24 * 60 / this.range;
  static tick = 0
  static timer

  static getCurrentTimeRangeIndex () {
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

  static getTimeRangeByIndex (index) {
    const now = new Date()
    const indexTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      0, Probs.range * index, 0
    ).getTime()
    return indexTime - now.getTime()
  }

  static getKw (ms) {
    const currentIndex = Probs.getCurrentTimeRangeIndex()
    if (currentIndex >= this.unitPerDay) {
      clearInterval(this.timer)
      try {
        this.launch()
      } catch (err) {
        location.reload()
      }
    } else {
      const prob = store.getters.probs[currentIndex]
      console.log(prob.slope, prob.slope / (this.range * 60 * 1000), ms)
      return (prob.slope / this.convertToMs(this.range)) * ms + prob.value
    }
  }

  static async launch () {
    await store.dispatch('setProbs')
    this.timer = setInterval(async () => {
      const currentIndex = this.getCurrentTimeRangeIndex()
      const ms = this.convertToMs(Probs.range) - this.getTimeRangeByIndex(currentIndex + 1)
      const value = this.getKw(ms)
      if (value) {
        store.dispatch('setCurrentValue', value)
      }
    }, 100)
  }

  static convertToMs (minutes) {
    return minutes * 60 * 1000
  }
}
