<script setup lang="ts">
import { ref } from "vue";
import TimeKeeprItem from "./TimeKeeprItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
import UsersInput from "./UsersInput.vue";
import DatePicker from "./DatePicker.vue";
import CurrentlyOffline from "./CurrentlyOffline.vue";
</script>

<template>
  <TimeKeeprItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Time Off?</template>
    Enter your name and input your days off here. We will keep a log of who is
    currently out, and any upcoming time off.
  </TimeKeeprItem>

  <TimeKeeprItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Sign In Here</template>
    <UsersInput />
  </TimeKeeprItem>

  <TimeKeeprItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Select Your Dates</template>
    <DatePicker />
  </TimeKeeprItem>

  <TimeKeeprItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Currently Offline</template>
    <CurrentlyOffline />
  </TimeKeeprItem>

  <TimeKeeprItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Upcoming Timeoff</template>

    Here is the current list of upcoming time off requests
  </TimeKeeprItem>
</template>
