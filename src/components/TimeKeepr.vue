<script setup lang="ts">
import { ref } from "vue";
import TimeKeeprItem from "./TimeKeeprItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import DatePicker from "./DatePicker.vue";
import UsersInput from "./UsersInput.vue";
const picked = ref(new Date());
</script>

<template>
  <TimeKeeprItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Time Off?</template>
    Enter your name and input your days off here. We will keep a log of who is currently out, and any upcoming time off.
  </TimeKeeprItem>

    <TimeKeeprItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Your Name</template>

    Please enter your name so we can track your upcoming time off
    <br />
    <br />
      <UsersInput />
  </TimeKeeprItem>

  <TimeKeeprItem>
    <template #icon>
      <ToolingIcon />
    </template>
      <DatePicker />
  </TimeKeeprItem>

  <TimeKeeprItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Currently Offline</template>

    See who is currently offline and their expected return date: 

  <br />
  <br />
  Name: Return Date
  <br />
  <br />

  </TimeKeeprItem>

  <TimeKeeprItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Upcoming Timeoff</template>

   Here is the current list of upcoming time off requests
  </TimeKeeprItem>
</template>
