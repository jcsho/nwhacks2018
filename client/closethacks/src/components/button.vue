<template>
  <v-btn class="filter-button" :class="{toggled: isToggled}" @click="highlight()">
    <slot></slot>
  </v-btn>
</template>

<script>

    export default {
        data() {
            return {
              isToggled: false
            };
        },
      methods: {
          highlight() {
            isToggled = !isToggled;
            if (isToggled) {
              $.color = black;
            }else {
              $.color = lightgrey;
            }
        }
      }
    }
</script>

<style>

</style>
