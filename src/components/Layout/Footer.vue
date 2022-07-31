<template>
  <footer class="bg flex flex_row">
    <div class="footer_item flex flex_column">
      <div class="logo logo2"></div>
      <span class="footer_text">
        Nam posuere accumsan porta. Integer
        <br class="remove_on_mobile" />
        id orci sed ante tincidunt tincidunt sit
        <br class="remove_on_mobile" />
        amet sed libero.
      </span>
      <span class="footer_text"
        >&copy; StorageConnect 2022, All Rights Reserved</span
      >
    </div>
    <div class="footer_item flex flex_column">
      <span class="footer_title">QUICK LINKS</span>
      <div v-for="item in Links" :key="item.name">
        <router-link :to="item.route" class="footer_text">{{
          item.name
        }}</router-link>
      </div>
    </div>
    <div class="footer_item flex flex_column">
      <span class="footer_title">NEWSLETTER</span>
      <span href="#" class="footer_text"
        >Get latest updates right in your inbox</span
      >
      <input
        type="email"
        name=""
        id=""
        class="footer_input"
        placeholder="Enter your email"
      />
      <Button class="blue">Subscribe Now</Button>
    </div>
    <div class="footer_item flex flex_column">
      <span class="footer_title">LET'S GET SOCIAL</span>
      <div class="footer_icons flex flex_row">
        <a href=""><img src="../../assets/icons/fb.svg" alt="" /></a>
        <a href=""><img src="../../assets/icons/ln.svg" alt="" /></a>
        <a href=""><img src="../../assets/icons/tw.svg" alt="" /></a>
        <a href=""><img src="../../assets/icons/ig.svg" alt="" /></a>
      </div>
      <div class="footer_dropdown flex flex_row">
        <img src="../../assets/icons/globe.svg" alt="" />
        <select name="" id="">
          <option value="">English - En</option>
          <option value="">Français - Fr</option>
        </select>
        <img src="../../assets/icons/chevron-down.svg" alt="" />
      </div>
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Button from "../Base/Button.vue";

export default defineComponent({
  name: "Home",
  components: { Button },
  setup() {
    const Links = [
      {
        name: "Active Listings",
        route: "/#ActiveListings",
      },
      {
        name: "Sell your Self Storage",
        route: "/#featured",
      },
      {
        name: "Free Evaluation",
        route: "/#Sell",
      },
      {
        name: "Learn",
        route: "/#Learn",
      },
    ];

    return { Links };
  },
});
</script>
