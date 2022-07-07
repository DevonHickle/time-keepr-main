<template>
  <div class="users">
    <label for="full name">Select Name:</label>
    <select>
      <option value="test">
       Test
      </option>
    </select>
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

<script lang="ts">
export default {
  props: {
    Users: {
      type: Object,
      required: true
    }
  }
};
</script>
