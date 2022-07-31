<template>
  <nav class="flex flex_row">
    <div class="logo"></div>
    <div
      :class="[
        $store.state.visibile === true ? 'open_nav' : '',
        'nav_links flex flex_row',
      ]"
      id="nav_links"
    >
      <div v-for="item in Links" :key="item.name">
        <a
          :href="item.route"
          :class="item.type === 'button' ? 'as_button' : ''"
          >{{ item.name }}</a
        >
      </div>
    </div>
    <div class="menu bg" id="menu" @click="toggle()"></div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Toggle from "../../utils/toggleNav";

export default defineComponent({
  name: "App",
  setup() {
    const Links = [
      {
        name: "Active Listings",
        route: "/#ActiveListings",
      },
      {
        name: "Sell your Self Storage",
        route: "/#featured",
      },
      {
        name: "Free Evaluation",
        route: "/#Sell",
      },
      {
        name: "Learn",
        route: "/#Learn",
      },
      {
        name: "Contact",
        route: "/#Contact",
        type: "button",
      },
    ];

    const { toggle } = Toggle.toggleNavigation();

    return { Links, toggle };
  },
});
</script>
