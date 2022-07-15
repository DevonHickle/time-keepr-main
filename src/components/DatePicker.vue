<template #heading>
  <ui-rangepicker :class="datepicker" v-model="date" :labels="['Start Date', 'End Date']">
  <template #separator>-</template>
</ui-rangepicker>
</template>

<style scoped>
 /***/
</style>

<script lang="ts">
  export default {
    data () {
      return {
        date: ['', '']
      };
    }
  };
</script>
