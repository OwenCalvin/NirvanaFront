<template>
  <span class="underline-text">
    <span>
      <slot/>
    </span>
    <span
    class="underline"
    :style="{height: underlineHeight, bottom: underlineBottom, background: color || '#2b5dff1a'}"
    />
  </span>
</template>

<script>
export default {
  props: ['height', 'color', 'bottom'],
  data: () => ({
  }),
  created() {
    if (!this.height) {
      this.height = 8
    }
  },
  methods: {
    getPx(number) {
      return `${number}px`
    }
  },
  computed: {
    underlineHeight() {
      return this.getPx(this.height)
    },
    underlineBottom() {
      return this.bottom ? this.getPx(this.bottom) : this.getPx(-this.height / 3)
    }
  }
}
</script>

<style scoped lang="scss">
.underline-text {
  position: relative;
  width: auto;
  z-index: 9;
}
.underline {
  z-index: 0;
  position: absolute;
  left: 0;
  width: 100%;
}
</style>
