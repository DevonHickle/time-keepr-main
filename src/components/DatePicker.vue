<template #heading>
  Date From
  <Datepicker v-model="picked"></Datepicker>
  To
  <Datepicker v-model="picked"></Datepicker>
      <button type="submit">Submit</button>
</template>

<style scoped>
 /**/
</style>

<script lang="ts">
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css"
import { ref } from '@vue/reactivity';
const picked = ref(new Date());
    export default {
        components: { Datepicker },
        data() {
            return {
                date: null,
            };
        }
    }
</script>
