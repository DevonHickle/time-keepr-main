<template>
  <v-container fluid>
    <v-col class="d-flex" cols="12" sm="6">
      <v-select
        v-model="select"
        :hint="`${select.name}, ${select.position}`"
        :items="items"
        item-title="name"
        item-value="position"
        label="Select"
        persistent-hint
        return-object
        single-line
      ></v-select>
    </v-col>
  </v-container>
</template>

<style scoped>
.details {
  flex: 1;
}

@media (min-width: 1024px) {
  .d-flex:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .d-flex:after {
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
    data () {
      return {
        select: { state: 'Florida', abbr: 'FL' },
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
