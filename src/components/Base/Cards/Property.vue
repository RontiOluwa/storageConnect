<template>
  <div class="card flex flex_column">
    <img :src="Listing.image" alt="" class="card_image" />
    <div class="card_description flex flex_column">
      <span class="card_title">{{ Listing.title }}</span>
      <div class="card_description_row flex flex_row">
        <div class="card_description_item flex flex_row">
          <img
            src="../../../assets/icons/pin.svg"
            alt=""
            class="card_description_icon"
          />
          <span class="card_description_text">{{ Listing.location }}</span>
        </div>
        <div class="card_description_item flex flex_row">
          <img
            src="../../../assets/icons/units.svg"
            alt=""
            class="card_description_icon"
          />
          <span class="card_description_text"
            >Total Units: <i>{{ Listing.occupancy }}</i></span
          >
        </div>
        <div class="card_description_item flex flex_row">
          <img
            src="../../../assets/icons/size.svg"
            alt=""
            class="card_description_icon"
          />
          <span class="card_description_text"
            >Size: <i>{{ Listing.size }} Sq Ft</i></span
          >
        </div>
        <div class="card_description_item flex flex_row">
          <img
            src="../../../assets/icons/occupancy.svg"
            alt=""
            class="card_description_icon"
          />
          <span class="card_description_text"
            >Occupancy: <i>{{ Listing.units }}%</i></span
          >
        </div>
      </div>
      <Button color="#1849c6" textcolor="#fff">View More Detail</Button>
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
