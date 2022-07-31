<template>
  <section class="active_listing_bg bg" id="ActiveListings">
    <Title
      title="Active Listing Self Storages"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis
maecenas tincidunt. Quis pretium ornare"
    />

    <div class="cards_holder flex flex_row">
      <div v-for="item in Listing" :key="item.name">
        <Card :Listing="item" />
      </div>
    </div>
    <div class="flex flex_column">
      <Button class="large">View More Listings</Button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Title from "../Base/Title.vue";
import Card from "../Base/Cards/Property.vue";
import Button from "../Base/Button.vue";

export default defineComponent({
  name: "Home",
  components: { Title, Card, Button },
  setup() {
    const Listing = [
      {
        title: "Heading of this Self Storage",
        image: "./img/s1.png",
        location: "Jersey City, NJ",
        units: 89,
        size: 40233,
        Occupancy: 50,
      },
      {
        title: "Heading of this Self Storage",
        image: "./img/s2.png",
        location: "Jersey City, NJ",
        units: 89,
        size: 40233,
        Occupancy: 50,
      },
      {
        title: "Heading of this Self Storage",
        image: "./img/s3.png",
        location: "Jersey City, NJ",
        units: 89,
        size: 40233,
        Occupancy: 50,
      },
      {
        title: "Heading of this Self Storage",
        image: "./img/s1.png",
        location: "Jersey City, NJ",
        units: 89,
        size: 40233,
        Occupancy: 50,
      },
      {
        title: "Heading of this Self Storage",
        image: "./img/s2.png",
        location: "Jersey City, NJ",
        units: 89,
        size: 40233,
        Occupancy: 50,
      },
      {
        title: "Heading of this Self Storage",
        image: "./img/s3.png",
        location: "Jersey City, NJ",
        units: 89,
        size: 40233,
        Occupancy: 50,
      },
    ];

    return { Listing };
  },
});
</script>
