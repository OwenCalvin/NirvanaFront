<template>
  <div>
    <div class="n-bg-light n-blue answer" :class="{ correct, notCorrect, disabled }">
      <div @click="$emit('click')" class="content">
        <slot/>
      </div>
      <div v-if="disabled" class="portion">
        <div class="portion-bar" :style="{width: `${portion * 100}%`}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['correct', 'notCorrect', 'disabled', 'portion'],
  data: () => ({

  })
}
</script>

<style scoped lang="scss">
.portion {
  height: 6px;
  z-index: 99;
  overflow: hidden;
}

.portion-bar {
  border-radius: 10px;
  height: 100%;
}

.content {
  padding: 5px 15px;
}

.answer {
  overflow: hidden;
  max-width: 15em;
  min-width: 5em;
  display: inline-block;
  cursor: pointer;
  width: auto;
  border: none;
  border-radius: 8px !important;
  font-weight: bold;
  font-size: 1.6em !important;
  transition: all .2s;
  user-select: none;
  .portion {
    background: #2b5dff2a;
  }
  .portion-bar {
    background: #2b5dff44;
  }
  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: scale(0.98);
  }
}

.correct {
  background: #2b5dff;
  color: white;
  .portion {
    background: #ffffff4d;
  }
  .portion-bar {
    background: #ffffff85;
  }
}

.notCorrect {
  color: #FF2B2B;
  background: #ff2b2b1c;
  .portion {
    background: #ff2b2b27;
  }
  .portion-bar {
    background: #ff2b2b54;
  }
}

.disabled {
  width: 100%;
  cursor: default;
  &:hover {
    transform: scale(1);
  }
  &:active {
    transform: scale(1);
  }
}
</style>
