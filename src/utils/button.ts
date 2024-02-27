import { ref, computed, type Ref } from 'vue';

// 获取验证码按钮
export function useGetVerifyCode() {
  // 计时器
  let timer: number;
  const initSec: number = 10;
  const second = ref(0);
  const text = computed(() => (btnActive.value ? '获取验证码' : `重新发送(${second.value})`));
  //   按钮激活状态
  const btnActive = computed(() => (second.value === 0 || second.value == initSec ? true : false));
  //   倒计时
  const cutDown = (second: Ref<number>) => {
    if (timer) {
      clearInterval(timer);
    }
    timer = setInterval(() => {
      second.value--;
      if (second.value <= 0) {
        second.value = initSec;
        clearInterval(timer);
        return;
      }
    }, 1000);
  };
  const click = () => {
    // 节流
    second.value = initSec;
    cutDown(second);
  };

  return {
    btnActive,
    click,
    text
  };
}
