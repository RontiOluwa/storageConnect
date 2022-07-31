<template>
  <section id="featured">
    <Title
      title="Featured Self Storages"
      desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis 
maecenas tincidunt. Quis pretium ornare"
    />
    <div class="cards_holder flex flex_row">
      <Carousel :settings="settings">
        <Slide v-for="slide in Listing.length" :key="slide">
          <Card :Listing="Listing[slide - 1]" />
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";
import Title from "../Base/Title.vue";
import Card from "../Base/Cards/Property.vue";

export default defineComponent({
  name: "Home",
  components: { Title, Card, Carousel, Slide, Pagination },
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

    const settings = {
      itemsToShow: 3,
      snapAlign: "center",
    };

    return { Listing, settings };
  },
});
</script>
