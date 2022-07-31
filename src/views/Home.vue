<template>
  <div>
    <Header />
    <Features />
    <Listing />
    <Sell />
    <Buy />
    <Learn />
    <Contact />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "../components/Layout/Header.vue";
import Features from "../components/Layout/Features.vue";
import Listing from "../components/Layout/Listing.vue";
import Sell from "../components/Layout/Sell.vue";
import Buy from "../components/Layout/Buy.vue";
import Learn from "../components/Layout/Learn.vue";
import Contact from "../components/Layout/Contact.vue";
import Footer from "../components/Layout/Footer.vue";

export default defineComponent({
  name: "Home",
  components: { Header, Features, Listing, Sell, Buy, Learn, Contact, Footer },
});
</script>
