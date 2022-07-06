<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css"
    export default {
        components: { Datepicker },
        data() {
            return {
                date: null,
            };
        }
    }
</script>

<template #heading>
  Date From
  <Datepicker v-model="picked"></Datepicker>
  To
  <Datepicker v-model="picked"></Datepicker>
</template>
