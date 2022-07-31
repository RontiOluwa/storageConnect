<template>
  <Nav />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Nav from "./components/Layout/Nav.vue";
import Toggle from "./utils/toggleNav";

export default defineComponent({
  name: "Home",
  components: { Nav },
  setup() {
    // const { openMenu } = Toggle.openNavigation();
    // const { closeMenu } = Toggle.closeNavigation();
    // // Set Navigatio base on Screen Size
    const { toggle } = Toggle.toggleNavigation();

    const checkScreen = () => {
      if (screen.width < 1211) {
        toggle();
      }
    };
    checkScreen();
  },
});
</script>
