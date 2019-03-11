<template>
  <span class="text-center underline-text">
    <span>
      <slot/>
    </span>
    <!--
    <span
    class="underline"
    :style="{height: underlineHeight, bottom: underlineBottom, background: color || '#2b5dff1a'}"
    />
    -->
  </span>
</template>

<script>
export default {
  props: ['height', 'color', 'bottom'],
  data: () => ({
    realHeight: 8
  }),
  created() {
    if (this.height) {
      this.realHeight = this.height
    }
  },
  methods: {
    getPx(number) {
      return `${number}px`
    }
  },
  computed: {
    underlineHeight() {
      return this.getPx(this.realHeight)
    },
    underlineBottom() {
      return this.bottom ? this.getPx(this.bottom) : this.getPx(-this.realHeight / 3)
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
