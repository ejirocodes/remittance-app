<template>
  <div>
    <div>
      <div
        class="
          bg-white
          rounded-full
          inline-flex
          items-center
          justify-between
          lg:w-2/6
          w-full
          py-[0.8rem]
          px-[1.5rem]
          shadow-2xl
        "
      >
        <input
          type="text"
          placeholder="Where are you sending money to?"
          class="bg-transparent w-full outline-none border-0"
          @click="toggleCountryDropdown"
          v-model="countryValue"
        />
        <button
          class="
            bg-pri
            text-dark
            xl:w-2/5
            w-full
            rounded-full
            font-bold
            px-5
            py-2
            hover:bg-sec
            transition-all
          "
          @click="toggleCountryDropdown"
        >
          Check rate
        </button>
      </div>
    </div>
    <div @click.self="openCountryDropdown = false" class="sm:h-screen sm:w-screen h-full w-full">
      <CountryDropdown v-if="openCountryDropdown" :countries="searchCountry" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import CountryDropdown from "@/components/CountryDropdown.vue";

export default defineComponent({
  components: {
    CountryDropdown,
  },
  setup() {
    name: "SearchForm";
    const openCountryDropdown = ref<boolean>(true);
    const countryValue = ref<string>("");
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

    const toggleCountryDropdown = () => {
      openCountryDropdown.value = true;
    };

    const searchCountry = computed(() => {
      return countries.value.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(countryValue.value.toLowerCase());
      });
    });

    return {
      openCountryDropdown,
      countryValue,
      countries,
      searchCountry,
      toggleCountryDropdown,
    };
  },
});
</script>

<style scoped>
</style>