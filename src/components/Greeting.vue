<script setup lang="ts">
// @ts-ignore
defineProps<{
  msg: string;
}>();
</script>

<template>
  <div class="greetings">
    <h1 class="hellothere">{{ msg }}</h1>
    <h3>
      This app was designed to help keep track of upcoming and current time off among the Marketing Team
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
