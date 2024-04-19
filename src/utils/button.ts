import { computed, ref, type Ref } from 'vue';
import { getCodes } from '../api/loginApi';
import { useFormDataStore } from '../stores/formData';
import { storeToRefs } from 'pinia';
import { ElNotification } from 'element-plus';

// 获取验证码按钮
export function useGetVerifyCode() {
  // 计时器
  let timer: number;
  const initSec: number = 60;
  const second = ref(0);
  const { signUpFormData } = storeToRefs(useFormDataStore());
  const { updateSignUpData } = useFormDataStore();
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
  const getCode = (phone: string) => {
    code.value = '';

    getCodes(phone)
      .then((data) => {
        code.value = data.data.code;
        // 更新验证码到store
        updateSignUpData(data.data.code, 'code');
        // 发送成功通知
        ElNotification({
          title: '验证码发送成功',
          message: `验证码已发送至您的手机,五分钟有效`,
          type: 'success'
        });
      })
      .catch((err) => {
        console.log('err', err);
        // 发送失败通知
        ElNotification({
          title: '验证码发送失败',
          message: '请稍后重试',
          type: 'error'
        });
      });
  };
  // 发送验证码 （发送请求 => 验证码）
  const click = () => {
    // 没有输入手机号不请求验证码
    if (!signUpFormData.value.phone) {
      ElNotification({
        title: '手机号不能为空',
        message: '请输入手机号',
        type: 'error'
      });
      return;
    }
    // 倒计时
    second.value = initSec;
    cutDown(second);
    getCode(signUpFormData.value.phone);
  };

  return {
    btnActive,
    click,
    text,
    code
  };
}
