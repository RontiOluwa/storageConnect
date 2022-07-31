<template>
  <div
    class="card small shaded flex flex_column"
    v-for="item in Listing"
    :key="item.title"
  >
    <img :src="item.image" alt="" class="card_image" />
    <div class="card_description flex flex_column">
      <span class="card_title">{{ item.title }}</span>
      <div class="card_description_row flex flex_row">
        <div class="card_description_item flex flex_row">
          <img
            src="../../../assets/icons/clock.svg"
            alt=""
            class="card_description_icon"
          />
          <span class="card_description_text">{{ item.time }}</span>
        </div>
        <div class="card_description_item flex flex_row">
          <img
            src="../../../assets/icons/tag.svg"
            alt=""
            class="card_description_icon"
          />
          <span class="card_description_text">{{ item.type }}</span>
        </div>
        <div class="card_description_item flex flex_row">
          <img
            src="../../../assets/img/user.png"
            alt=""
            class="card_description_icon"
          />
          <span class="card_description_text">{{ item.user }}</span>
        </div>
      </div>
      <Button color="#1849c6" textcolor="#fff">Read More</Button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Button from "../Button.vue";

export default defineComponent({
  props: {
    Listing: { type: Object, required: true },
  },
  components: { Button },
});
</script>
