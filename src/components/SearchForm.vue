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
          w-2/6
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
            w-2/5
            rounded-full
            font-bold
            px-5
            py-2
            hover:bg-sec
            transition-all
          "
          @click="checkRate('l')"
        >
          Check rate
        </button>
      </div>
    </div>
    <div @click.self="openCountryDropdown = false" class="h-screen w-screen">
      <!-- <CountryDropdown
        v-if="openCountryDropdown"
       @updateSearch="updateSearch($event)"
      /> -->
      <div
        v-if="openCountryDropdown"
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
            v-for="country in searchCountry"
            :key="country.name"
            class="
              inline-flex
              items-center
              justify-between
              p-3
              w-[24rem]
              border-b border-solid border-gray-200
            "
            @click="checkRate(country)"
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, getCurrentInstance } from "vue";
import CountryDropdown from "@/components/CountryDropdown.vue";
import ApiService from "@/services/api.service";

export default defineComponent({
  components: {
    CountryDropdown,
  },
  setup() {
    const internalInstance = getCurrentInstance();
    // @ts-ignore
    const axios = internalInstance.appContext.config.globalProperties.axios;

    const openCountryDropdown = ref<boolean>(false);
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
    const checkRate = async (country: any) => {

      const { data } = await ApiService.getRates(axios);
      console.log(data.rates[country.code]);

      // openCountryDropdown.value = true;
    };

    const searchCountry = computed(() => {
      return countries.value.filter((country) => {
        return country.name.match(new RegExp(countryValue.value, "i"));
      });
    });

    const updateSearch = (e: CustomEvent) => {
      countryValue.value = e.detail;
      console.log(e);
    };

    return {
      openCountryDropdown,
      countryValue,
      countries,
      searchCountry,
      checkRate,
      toggleCountryDropdown,
      updateSearch,
    };
  },
});
</script>

<style scoped>
</style>