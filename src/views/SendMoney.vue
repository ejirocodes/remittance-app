<template>
  <div>
    {{ route.params.name }}
    {{ selectedCountry }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "SendMoney",
  setup() {
    let route = useRoute();
    const countries = ref([
      {
        name: "Nigeria",
        code: "NGN",
        flag: "🇳🇬",
        url: "send-money-to-nigeria",
        fastDelivery: true,
      },
      {
        name: "Ghana",
        code: "GHS",
        flag: `🇬🇭`,
        url: "send-money-to-ghana",
        fastDelivery: false,
      },
      {
        name: "Kenya",
        code: "KES",
        flag: `🇰🇪`,
        url: "send-money-to-kenya",
        fastDelivery: true,
      },
    ]);

    const selectedCountry = computed(() => {
      return countries.value.find(
        (country) => country.name.toLowerCase() === route.params.name
      );
    });

    return { selectedCountry, route };
  },
});
</script>

<style scoped>
</style>