<template>
  <div>
    <div class="n-bg-light n-blue answer py-2 px-3" :class="{ correct, notCorrect, disabled, selected }">
      <div @click="$emit('click')" class="content" v-html="content"/>
      <div v-if="disabled" class="portion" :style="{width: `${portion * 100}%`}">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['correct', 'notCorrect', 'disabled', 'selected', 'portion', 'content'],
  data: () => ({
  })
}
</script>

<style scoped lang="scss">
.portion {
  top: 0;
  left: 0;
  position: absolute;
  height: 100%;
}

.answer {
  width: 100%;
  position: relative;
  overflow: hidden;
  max-width: 15em;
  min-width: 5em;
  display: inline-block;
  cursor: pointer;
  border: none;
  border-radius: 10px !important;
  font-weight: bold;
  font-size: 1.6em !important;
  transition: all .2s;
  user-select: none;
  .portion {
    background: rgba(43, 93, 255, 0.123);
  }
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.98);
  }
}

.selected {
  border: 5px solid rgba(255, 43, 43, 0.342);
}

.disabled {
  color: #FF2B2B;
  opacity: 0.5;
  background: transparent;
  cursor: default;
  .portion {
    background: rgba(255, 43, 43, 0.123);
  }
  &:hover {
    transform: scale(1);
  }
  &:active {
    transform: scale(1);
  }
}

.disabled.correct {
  color: rgb(43, 93, 255);
  opacity: 1;
  .portion {
    background: rgba(43, 93, 255, 0.123);
  }
}

.disabled.correct.selected {
  border-color: rgba(43, 93, 255, 0.358);
  box-shadow: 0px 7px 30px 0px rgba(43, 93, 255, 0.11);
}
</style>
