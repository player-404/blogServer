import { defineStore } from 'pinia';
import { ref } from 'vue';

// 点击输入框时为输入框添加动画
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
