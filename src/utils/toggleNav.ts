/* eslint-disable */
import { useStore } from "vuex";
import { defineComponent, computed } from "vue";

const toggleNavigation = () => {
  const store = useStore();
  const visibility = computed(() => store.getters.Visibility);
  const toggle = () => {
    store.dispatch("changeVisibility", !visibility.value);
  };
  return {
    toggle,
  };
};

export default defineComponent({
  toggleNavigation,
});
