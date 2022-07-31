<template>
  <div class="section_heading_texts flex flex_column">
    <span class="section_heading_title">{{ title }}</span>
    <span class="section_heading_subtitle">
      {{ desc }}
    </span>
  </div>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
});
</script>
