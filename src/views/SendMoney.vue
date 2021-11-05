<template>
  <section
    class="text-left lg:px-24 lg:py-16 flex items-center justify-between"
  >
    <div class="w-full">
      <h1 class="font-black text-4xl mb-[0.5rem]">
        Send money to {{ selectedCountry.name }}
      </h1>
      <p class="text-lg">
        Fast, cheap online money transfers to {{ selectedCountry.name }}.
      </p>
    </div>
    <div class="w-3/5">
      <div class="shadow-2xl px-4 py-8">
        <div
          class="transaction-display mb-4"
          v-if="selectedCountry.fastDelivery"
        >
          <p class="text-sm text-gray-500">Delivery</p>
          <div>
            <div class="font-black text-xl">SWIFT</div>
          </div>
        </div>
        <div class="transaction-display mb-4">
          <p class="text-sm text-gray-500">You send (USD)</p>
          <div>
            <input
              type="text"
              class="
                font-black
                text-xl
                bg-transparent
                w-full
                outline-none
                border-0
              "
              v-model="sendAmouut"
            />
          </div>
        </div>
        <div class="transaction-display mb-8">
          <p class="text-sm text-gray-500">
            They get ({{ selectedCountry.code }})
          </p>
          <div>
            <input
              type="text"
              class="
                font-black
                text-xl
                bg-transparent
                w-full
                outline-none
                border-0
              "
              readonly
              v-model="receivedAmouut"
            />
          </div>
        </div>
        <button
          class="
            bg-pri
            text-dark
            w-full
            rounded-full
            font-bold
            px-5
            py-4
            hover:bg-sec
            transition-all
          "
        >
          Send now
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "SendMoney",
  setup() {
    let route = useRoute();
    const sendAmouut = ref<string>("300");
    const receivedAmouut = ref<string>("9000");
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

    return { selectedCountry, route, sendAmouut, receivedAmouut };
  },
});
</script>

<style scoped>
</style>