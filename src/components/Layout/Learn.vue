<template>
  <section class="learn_bg bg" id="Learn">
    <Title
      title="Learn Everything About Buying, Selling, and
Operating a Self Storage"
      desc="Learn about literally anything to know about Selling or
Buying a Self Storage"
    />

    <div class="cards_holder flex flex_row">
      <Card :Listing="Listing" />
    </div>

    <div class="flex flex_column">
      <Button class="large">Explore the Learning Section</Button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Title from "../Base/Title.vue";
import Card from "../Base/Cards/Learn.vue";
import Button from "../Base/Button.vue";

export default defineComponent({
  name: "Home",
  components: { Title, Card, Button },
  setup() {
    const Listing = [
      {
        title: "Everything you need to know about how to buy a Self Storage",
        time: "5hrs ago",
        image: "./img/l1.png",
        user: "Raza",
        type: "Buy",
      },
      {
        title: "Everything you need to know about how to buy a Self Storage",
        time: "5hrs ago",
        image: "./img/l2.png",
        user: "Raza",
        type: "Buy",
      },
      {
        title: "Everything you need to know about how to buy a Self Storage",
        image: "./img/l2.png",
        user: "Raza",
        time: "5hrs ago",
        type: "Buy",
      },
      {
        title: "Everything you need to know about how to buy a Self Storage",
        image: "./img/l4.png",
        user: "Raza",
        time: "5hrs ago",
        type: "Buy",
      },
    ];

    return { Listing };
  },
});
</script>
