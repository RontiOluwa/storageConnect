<template>
  <section class="sell_bg bg flex flex_row flex_middle" id="Sell">
    <div class="half_box flex flex_column">
      <span class="section_heading_title"
        >Do you have a Self Storage for Sale?</span
      >
      <span class="section_heading_subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
        <br class="remove_on_mobile" />
        tortor sapien sagittis maecenas tincidunt. Quis pretium ornare id
        <br class="remove_on_mobile" />
        diam amet proin scelerisque nunc.
      </span>
      <Button class="blue">Sell Your Self Storage</Button>
    </div>
    <div class="half_box">
      <img src="../../assets/img/p1.png" alt="" class="full_img" />
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
