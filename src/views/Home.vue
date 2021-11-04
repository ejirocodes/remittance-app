<template>
  <div class="home">
    <h1>Send money to Africa the faster, cheaper way</h1>
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
