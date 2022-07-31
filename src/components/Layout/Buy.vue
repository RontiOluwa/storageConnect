<template>
  <section class="buy_bg bg flex flex_row flex_middle">
    <div class="half_box">
      <img src="../../assets/img/p2.png" alt="" class="full_img pull_down" />
    </div>
    <div class="half_box flex flex_column">
      <span class="section_heading_title"
        >Do you want to buy a Self Storage?</span
      >
      <span class="section_heading_subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        <br class="remove_on_mobile" />
        tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
        <br class="remove_on_mobile" />
        diam amet proin scelerisque nunc.
      </span>
      <Button class="blue">Buy a Self Storage</Button>
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
