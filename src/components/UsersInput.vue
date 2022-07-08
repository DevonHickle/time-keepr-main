<template>
  <v-card class="mx-auto" max-width="300">
    <v-list dense>
      <v-subheader>Select Your Name</v-subheader>
      <v-list-item-group v-model="model" mandatory color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<style scoped>
.details {
  flex: 1;
}

@media (min-width: 1024px) {
  .details:before {
    content: " ";
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .details:after {
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
  data: () => ({
    selectedItem: 1,
    items: [
      {
        name: "Devon Hickle",
        position: "Automation Engineer",
      },
      {
        name: "Evan Long",
        position: "Developer",
      },
      {
        name: "Shruthi Mekarthi",
        position: "Developer",
      },
      {
        name: "Nick Koss",
        position: "Developer",
      },
      {
        name: "Luther Huset",
        position: "Automation Engineer",
      },
      {
        name: "Bill Tervola",
        position: "Customer Experience Lead",
      },
      {
        name: "Andre Denney",
        position: "Business Analyst",
      },
      {
        name: "Sele Agbator",
        position: "Scrum Master",
      },
    ],
  }),
};
</script>
