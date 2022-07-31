<template>
  <section class="query_bg bg flex flex_column" id="Contact">
    <div class="query_box flex flex_row">
      <div class="query_text_group flex flex_column">
        <span class="section_heading_title">Any Queries? Reach Out to Us</span>
        <span class="section_heading_subtitle"
          >Feel free to write to us, we are happy to help you</span
        >
      </div>
      <Button class="blue flex flex_row">
        Write to Us
        <img src="../../assets/icons/send.svg" alt="" />
      </Button>
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
