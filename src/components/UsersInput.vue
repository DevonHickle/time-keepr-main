<template>
      <v-select
        v-model="select"
        :hint="`${select.name}, ${select.position}`"
        :items="items"
        item-title="name"
        item-value="position"
        label="select"
        persistent-hint
        return-object
        single-line
      ></v-select>
</template>

<style scoped>
 /**/
</style>

<script lang="ts">
  export default {
    data () {
      return {
        select: { name: 'Devon Hickle', position: 'AE' },
        items: [
          { name: 'Devon Hickle', position: 'AE' },
          { name: 'Luther Huset', position: 'AE' },
          { name: 'Evan Long', position: 'Dev' },
          { name: 'Shruthi', positon: 'Dev' },
          { name: 'Nick Koss', position: 'Dev' },
          { name: 'Bill Tervola', position: 'Customer Experience Lead' },
          { name: 'Andre Denny', position: 'Business Analyst' },
          { name: 'Sele Agbator', position: 'Scrum Master' },
        ],
      }
    },
  }
</script>
