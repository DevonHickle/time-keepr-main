// ToDo - // Add Event Listeners for the submit button and the user select
rangepicker so I can return the dates and the names in Upcoming and Currently
Offline // Take the selected User and the time they input before hitting submit,
and return this information

<template #username-dateselect>
  <form v-on:submit="addTimeOff">
    <div class="form-group">
      <label for="name">Name:</label><br />
      <ui-textfield
        type="text"
        class="form-control"
        id="name"
        placeholder="Enter Your Name"
        v-model="form.name"
      />
    </div>
    <div class="form-group">
      <label for="dates">Enter Your Time Off</label><br />
      <ui-rangepicker>
        type="date"
        class="form-control"
        id="dates"
        placeholder="Enter A Date"
        v-model="form.date"
      >
      <template #separator>-</template>
      </ui-rangepicker>
    </div>
    <ui-button v-on:click="addTimeOff" raised>Submit</ui-button>
  </form>
</template>

<style scoped>
.ui-select {
  padding-bottom: 15px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import UserService from "@/services/UserService"
import type ResponseData from "@/types/ResponseData"
import type Form from "@/types/Form"

export default defineComponent ({
  name: "namedateInput",
  data() {
    return {
      form: {
        name: "",
        date: "",
      },
    };
  },
  methods: {
    addTimeOff() {
      let data = {
        name: this.form.name,
        date: this.form.date,
      }
      UserService.create(data)
      .then((response: ResponseData) => {
        this.form = response.data.id
        console.log(response.data);
      })
      }
    },
  })
</script>
