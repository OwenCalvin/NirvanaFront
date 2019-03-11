import store from '../store'

export default class Probs {
  static range = 15
  static unitPerDay = 24 * 60 / this.range;
  static tick = 0
  static lastIndex
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
      0, this.range * index, 0
    ).getTime()
    return indexTime - now.getTime()
  }

  static getKw (ms) {
    const currentIndex = this.getCurrentTimeRangeIndex()
    if (currentIndex < this.lastIndex) {
      this.restart()
    } else {
      const prob = store.getters.probs[currentIndex]
      if (prob) {
        this.lastIndex = currentIndex
        return (prob.slope / this.convertToMs(this.range)) * ms + prob.value
      } else {
        this.restart()
      }
    }
  }

  static restart () {
    clearInterval(this.timer)
    try {
      this.launch()
    } catch (err) {
      location.reload()
    }
  }

  static async launch () {
    await store.dispatch('setProbs')
    this.lastIndex = 0
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
