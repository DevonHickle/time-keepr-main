<template>
  <ui-select
    id="team-member-name-select"
    v-model="selected"
    :options="users"
    @selected="onSelected($event)"
  ></ui-select>
</template>

<style scoped>
/**/
</style>

<script lang="ts">
const users = [
  { label: "Devon Hickle" },
  { label: "Luther Huset" },
  { label: "Evan Long" },
  { label: "Shruthi" },
  { label: "Nick Koss" },
  { label: "Bill Tervola" },
  { label: "Andre Denny" },
  { label: "Sele Agbator" },
];

export default {
  data() {
    return {
      users,
      selected: "",
    };
  },
};
</script>
