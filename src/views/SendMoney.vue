<template>
  <div class="text-left">
    <button class="p-3 font-bold" @click="router.back()">Back</button>
    <section
      class="text-left lg:px-24 lg:py-16 flex items-center justify-between"
    >
      <div class="w-full">
        <h1 class="font-black text-4xl mb-[0.5rem]">
          Send money to {{ selectedCountry.name }} {{ selectedCountry.flag }}
        </h1>
        <p class="text-lg">
          Fast, cheap online money transfers to {{ selectedCountry.name }}. 
        </p>
      </div>
      <div class="w-3/5">
        <div
          class="
            text-center
            py-8
            bg-secdark
            text-white
            rounded-lg
            font-black
            text-2xl
            mb-4
          "
        >
          1 USD = {{ currentRate }} {{ selectedCountry.code }}
        </div>
        <div
          class="
            shadow-2xl
            px-4
            py-8
            rounded-lg
            border border-solid border-gray-300
            bg-white
          "
        >
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
                type="number"
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
            @click="processPayment()"
          >
            Send now
          </button>
        </div>
      </div>
      <PaymentSuccessModal :open="openModal"   @modalState="modalState($event)"/>
    </section>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  computed,
  onMounted,
  getCurrentInstance,
} from "vue";
import { useRoute } from "vue-router";
import ApiService from "@/services/api.service";
import { useRouter } from "vue-router";
import PaymentSuccessModal from '@/components/shared/PaymentSuccessModal.vue'
export default defineComponent({
  name: "SendMoney",
  components: {
      PaymentSuccessModal
  },
  setup() {
    let route = useRoute();
    let router = useRouter();
    const internalInstance = getCurrentInstance();
    const axios = internalInstance.appContext.config.globalProperties.axios;

    const sendAmouut = ref(500);
    const currentRate = ref(2);
    const openModal = ref(false);
    


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

    const receivedAmouut = computed(() => {
      return (Number(sendAmouut.value) * currentRate.value).toLocaleString(
        "en-US"
      );
    });

    const selectedCountry = computed(() => {
      return countries.value.find(
        (country) => country.name.toLowerCase() === route.params.name
      );
    });

     const modalState = (openState)  => {
      openModal.value = openState;
    }

    const getRate = async () => {
      const { data } = await ApiService.getRates(axios);
      currentRate.value = data.rates[selectedCountry.value.code];
    };

    const processPayment = async () => {
        openModal.value = true
        console.log(openModal.value);
    };

    onMounted(() => {
      getRate();
    });

    return {
      selectedCountry,
      processPayment,
      openModal,
      route,
      sendAmouut,
      receivedAmouut,
      currentRate,
      modalState,
      router,
    };
  },
});
</script>

<style scoped>
</style>