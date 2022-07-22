<script setup lang="ts">
import TimeKeeprItem from "./TimeKeeprItem.vue";
import DatePicker from "./DatePicker.vue";
import CurrentlyOffline from "./CurrentlyOffline.vue";
import UpcomingOffline from "./UpcomingOffline.vue";
</script>


<template>
  <TimeKeeprItem>
    <template #icon>
    </template>
    <template #heading>Time Off?</template>
    Enter your name and input your days off here. We will keep a log of who is
    currently out, and any upcoming time off.
  </TimeKeeprItem>

  <TimeKeeprItem>
    <template #icon>
    </template>
    <template #heading>Input Your Time Off</template>
    <DatePicker />
  </TimeKeeprItem>

  <TimeKeeprItem>
    <template #icon>
    </template>
    <template #heading>Currently Offline</template>
    <CurrentlyOffline />
  </TimeKeeprItem>

  <TimeKeeprItem>
    <template #icon>
    </template>
    <template #heading>Upcoming Timeoff</template>
    <UpcomingOffline />
  </TimeKeeprItem>
</template>
