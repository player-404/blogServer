<script lang="ts" setup>
import { useFormType } from '@/stores/formType';

defineProps(['config', 'step']);
const emit = defineEmits(['pre', 'next']);
const { status } = useFormType();

// 登录
const submit = () => {};
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
    <el-button v-if="!status" class="sub-btn" color="#905ce0" @click="submit"
      >{{ config.title }}
    </el-button>
    <!--    注册按钮-->
    <div v-else class="sign-up-btn">
      <el-button
        v-if="step !== 0"
        clss="pre-step"
        color="#905ce0"
        style="width: 40%"
        @click="preStep"
        >上一步
      </el-button>
      <el-button class="next-step" color="#905ce0" style="width: 40%" @click="nextStep"
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
