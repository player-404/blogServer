<script lang="ts" setup>
import { useFormType } from '@/stores/formType';
import { useIptFocusStore } from '@/stores/iptFocus';

defineProps(['config', 'step']);
const emit = defineEmits(['pre', 'next', 'submit']);
const { status } = useFormType();
const { focus, blur } = useIptFocusStore();

// 按钮按下
const mouseDown = () => {
  blur();
};
// 按钮弹起
const mouseUp = () => {
  focus();
};
// 登录
const submit = () => {
  console.log(1);
  emit('submit');
};
// 注册上一步
const preStep = () => {
  emit('pre');
};
// 注册下一步
const nextStep = () => {
  emit('next');
};
</script>
<template>
  <div class="btn">
    <!--    登录按钮-->
    <el-button
      v-if="!status"
      class="sub-btn"
      color="#905ce0"
      @click="submit"
      @mousedown="mouseDown"
      @mouseup="mouseUp"
    >
      {{ config.title }}
    </el-button>
    <!--    注册按钮-->
    <div v-else class="sign-up-btn">
      <el-button
        v-if="step !== 0"
        clss="pre-step"
        color="#905ce0"
        style="width: 40%"
        @click="preStep"
        @mousedown="mouseDown"
        @mouseup="mouseUp"
        >上一步
      </el-button>
      <el-button
        class="next-step"
        color="#905ce0"
        style="width: 40%"
        @click="nextStep"
        @mousedown="mouseDown"
        @mouseup="mouseUp"
        >下一步
      </el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.btn {
  margin-top: 34px;

  .sub-btn {
    width: 100%;
  }

  .sign-up-btn {
    position: relative;
    width: 100%;
    height: 34px;

    .pre-step {
      position: absolute;
      left: 0;
      top: 0;
    }

    .next-step {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
</style>
