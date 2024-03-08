<script lang="ts" setup>
import { signUpInfoConfig, signUpPhoneConfig } from '../config/formConfig';
import FormCon from './FormCon.vue';
import { useFormDataStore } from '@/stores/formData';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const { step } = storeToRefs(useFormDataStore());
// 注册完成后自动登录状态
const signInStatus = ref(false);
</script>
<template>
  <div class="con">
    <div class="header">
      <div class="title">注册</div>
      <el-steps :active="step" align-center finish-status="success" style="max-width: 600px">
        <el-step title="基本信息" />
        <el-step title="手机验证" />
        <el-step title="完成" />
      </el-steps>
    </div>
    <div class="form-con">
      <Transition
        enter-active-class="animate__animated animate__fadeIn animate__faster"
        leave-active-class="animate__animated animate__fadeOut animate__faster"
      >
        <!-- 基本信息 -->
        <FormCon v-if="step === 0" :config="signUpInfoConfig"></FormCon>
        <!-- 手机号码 -->
        <FormCon v-else-if="step === 1" :config="signUpPhoneConfig"></FormCon>
        <div v-else class="status">
          <Transition>
            <div
              v-if="!signInStatus"
              v-loading="!signInStatus"
              class="load"
              element-loading-text="登陆中..."
              style="width: 100%"
            ></div>
            <el-result v-else icon="success" sub-title="没有反应？点击登录" title="登录成功">
              <template #extra>
                <el-button color="#905ce0" type="primary">登录</el-button>
              </template>
            </el-result>
          </Transition>
        </div>
      </Transition>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.con {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  .header {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    width: 60%;

    .title {
      margin-bottom: 20px;
    }
  }

  .form-con {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;

    .status {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .load {
      }
    }
  }

  //::v-deep .is-process {
  //  color: #905ce0;
  //  border-color: #905ce0;
  //}
}
</style>
