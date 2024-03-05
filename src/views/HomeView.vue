<template>
  <div>
    <FirstInput
      v-model="inputValue"
      label="Nome:"
      placeholder="Digite..."
      background-color='white'
      color='black'
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FirstInput from '@/components/FirstInput.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    FirstInput,
  },
  data() {
    return {
      inputValue: '',
    };
  },
});
</script>

<style>
</style>
