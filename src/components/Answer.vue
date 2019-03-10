<template>
  <div>
    <div class="answer" :class="{ correct, notCorrect, disabled }">
      <slot/>
      <div class="votes">
        <div class="vote-bar">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['correct', 'notCorrect', 'disabled'],
  data: () => ({

  })
}
</script>

<style scoped lang="scss">
.answer {
  max-width: 15em;
  display: inline-block;
  cursor: pointer;
  width: auto;
  background: #2b5dff1e;
  color: #2b5dffe3;
  border: none;
  padding: 5px 15px;
  border-radius: 8px !important;
  font-weight: bold;
  font-size: 1.5em !important;
  transition: all .2s;
  user-select: none;
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
}
.notCorrect {
  color: #FF2B2B;
  background: #ff2b2b1c;
}
.disabled {
  cursor: default;
  &:hover {
    transform: scale(1);
  }
  &:active {
    transform: scale(1);
  }
}
</style>
