import { computed, ref, type Ref } from 'vue';

// 获取验证码按钮
export function useGetVerifyCode() {
  // 计时器
  let timer: number;
  const initSec: number = 60;
  const second = ref(0);
  const text = computed(() => (btnActive.value ? '获取验证码' : `重新发送(${second.value})`));
  const code = ref('');
  //   按钮激活状态
  const btnActive = computed(() => second.value === 0 || second.value == initSec);
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
  // 请求验证码
  const getCode = () => {
    code.value = '';
  };
  // 发送验证码 （发送请求 => 验证码）
  const click = () => {
    // 节流
    second.value = initSec;
    cutDown(second);
  };

  return {
    btnActive,
    click,
    text,
    code
  };
}
