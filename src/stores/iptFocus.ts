import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useIptFocusStore = defineStore('iptFocus', () => {
  const status = ref(false);

  function focus() {
    status.value = true;
  }

  function blur() {
    status.value = false;
  }

  return {
    status,
    focus,
    blur
  };
});
