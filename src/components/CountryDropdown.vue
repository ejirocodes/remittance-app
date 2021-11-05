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
          cursor-pointer
          hover:bg-gray-100
        "
        @click="getRate(country)"
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
import { defineComponent, ref, getCurrentInstance } from "vue";
import ApiService from "@/services/api.service";

export default defineComponent({
  props: {
    countries: {
      type: Array,
      required: true,
    },
    // selectedCountry: {
    //   type: Object,
    //   required: true
    // }
  },
  setup(props, { emit }) {
    const internalInstance = getCurrentInstance();
    // @ts-ignore
    const axios = internalInstance.appContext.config.globalProperties.axios;

    const getRate = async (country: any) => {
      const { data } = await ApiService.getRates(axios);
      console.log(data.rates[country.code]);
    };
    return { getRate };
  },
});
</script>

<style scoped>
</style>