<template>
  <button :style="[{ background: color, color: textcolor }]">
    <slot></slot>
  </button>
</template>
<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "Button",
  props: {
    color: { type: String, required: true },
    textcolor: { type: String, required: false },
  },
});
</script>
