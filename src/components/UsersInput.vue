<template>
  <div class="details">
    <form>
      <label for="full name">Full Name:</label>
      <input type="text" placeholder="Please input your full name..." required>
    </form>
  </div>
</template>

<style scoped>
.details {
  flex: 1;
}

@media (min-width: 1024px) {
  .details:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .details:after {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }
}
</style>

<script setup lang="ts">
  //
</script>
