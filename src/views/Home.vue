<template>
  <div class="home my-9 p-[2rem]">
    <h1 class="font-black text-2xl mb-[1.5rem]">Send money from USA to Africa the faster, cheaper way</h1>
    <SearchForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchForm from '@/components/SearchForm.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SearchForm,
  },
});
</script>
