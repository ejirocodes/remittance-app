<template>
  <div
    class="
      z-10
      -mt-1
      bg-white
      shadow-2xl
      inline-flex
      items-center
      justify-center
      -ml-20
    "
  >
    <ul class="flex flex-col">
      <li
        v-for="country in countries"
        :key="country.name"
        class="
          inline-flex
          items-center
          justify-between
          p-3
          w-[24rem]
          border-b border-solid border-gray-200
        "
      >
        <div class="flex items-center">
          <span class="inline-block mr-2 text-2xl">{{ country.flag }}</span>
          <span class="country-picker_option_text">
            <strong>{{ country.name }}</strong>
          </span>
        </div>
        <span
          class="bg-green-100 inline-block px-2 py-1 text-sm text-black"
          v-show="country.fastDelivery"
          >Fast delivery</span
        >
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  setup(props, { emit }) {
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

    watch(countries, () => {
      emit("update:updateSearch", countries);
    });

    const countryValue = ref<string>("");
    const getCountrySearch = () => {
      console.log("cc");
      emit("search", countryValue.value);
    };

    return { countries, getCountrySearch };
  },
});
</script>

<style scoped>
</style>