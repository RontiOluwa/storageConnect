<template>
  <section class="main_section bg flex flex_column">
    <span class="header_text">
      Sell Storage Business
      <br class="remove_on_mobile" />
      Buy.Sell.Learn
    </span>
    <span class="header_subtext">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit
      <br class="remove_on_mobile" />
      sagittis, aliquam non tortor blandit lobortis. blandit
    </span>
    <div class="header_button_container flex flex_row">
      <Button>Sell Your Self Storage</Button>
      <Button color="white">Active Self Storage Listings</Button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "../Base/Button.vue";

export default defineComponent({
  name: "Home",
  components: { Button },
});
</script>
