<template>
  <div>
    <div >
      <div class="bg-white rounded-full inline-flex items-center justify-between w-2/6 py-[0.8rem] px-[1.5rem] shadow-2xl">
        <input
          type="text"
          placeholder="Where are you sending money to?"
          class="bg-transparent w-full outline-none border-0"
        />
        <button class="bg-pri text-dark w-2/5 rounded-full font-bold px-5 py-2">Check rate</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>