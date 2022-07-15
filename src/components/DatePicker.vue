// ToDo - 
// Add Event Listeners for the submit button and the user select rangepicker so I can return the dates and the names in Upcoming and Currently Offline
// Take the selected User and the time they input before hitting submit, and return this information

<template #username-dateselect>
  <v-form v-on:submit="addTimeOff">
    <ui-select
      class="ui-select"
      v-model="selected"
      :options="users"
      @selected="onSelected($addTimeOff)"
    ></ui-select>

    <ui-rangepicker
      :class="datepicker"
      v-model="date"
      :labels="['Start Date', 'End Date']"
    >
      <template #separator>-</template>
    </ui-rangepicker>
    <br />
    <br />
    <ui-button v-on:click="addTimeOff" raised>Submit</ui-button>
  </v-form>
</template>

<style scoped>
.ui-select {
  padding-bottom: 15px;
}
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
    };
  },
};
</script>
