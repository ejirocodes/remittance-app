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
      sm:-ml-20
      ml-0
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
          sm:w-[24rem]
          w-[20rem]
          border-b border-solid border-gray-200
          cursor-pointer
          hover:bg-gray-100
        "
      >
        <router-link
          :to="`/send-money/${country.name.toLowerCase()}`"
          class="
            inline-flex
            p-3
            cursor-pointer
            items-center
            justify-between
            w-full
          "
        >
          <!-- @click="getRate(country)" -->
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
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="js">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    countries: {
      type: Array,
      required: true,
    },
  },
});
</script>

<style scoped>
</style>