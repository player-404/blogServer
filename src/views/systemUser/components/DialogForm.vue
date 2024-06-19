<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { FormRules, FormInstance, FormValidateCallback } from 'element-plus';
import { getAllRoles } from '@/api/role';

// 表单实例
const formRef = ref(null);
// form
const ruleForm = defineModel<{
  username: string;
  phone: string;
  password: string;
  confirmPassword: string;
  roles: string[];
  active: boolean;
}>({
  required: true
});

const roles = ref<Role[]>([]);
const rules = reactive<FormRules<typeof ruleForm>>({
  username: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (!value) {
          return callback(new Error('请输入用户名'));
        }
        callback();
      },
      trigger: 'blur'
    }
  ],
  phone: [
    {
      validator: (rule: any, value: any, callback: any) => {
        const reg = /^1[3456789]\d{9}$/;
        if (!value) {
          return callback(new Error('请输入手机号'));
        }

        if (!reg.test(value)) {
          return callback(new Error('请输入正确的手机号'));
        }

        callback();
      },
      trigger: 'blur'
    }
  ],
  password: [
    {
      validator: (rule: any, value: any, callback: any) => {
        const reg =
          /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/;
        if (!value) {
          return callback(new Error('请输入密码'));
        }
        if (!reg.test(value)) {
          return callback(new Error('密码格式不正确'));
        }
        callback();
      },
      trigger: 'blur'
    }
  ],
  confirmPassword: [
    {
      validator: (rule: any, value: any, callback: any) => {
        if (!value) {
          return callback(new Error('请输入确认密码'));
        }
        if (ruleForm.value && value !== ruleForm.value.password) {
          return callback(new Error('两次输入的密码不一致'));
        }
        callback();
      },
      trigger: 'blur'
    }
  ]
});

// 表单验证
const formCheckAll = async () => {
  if (!formRef.value) return false;

  return await (formRef.value as any).validate((valid: any, fields: any) => {
    if (valid) {
      console.log('表单验证成功');
      return true;
    } else {
      console.log('表单验证失败', fields);
      return false;
    }
  });
};
// 重置表单
const resetForm = () => {
  if (!formRef.value) return;
  (formRef.value as any).resetFields();
};
getAllRoles().then((res) => {
  console.log('roles data', res.data);
  roles.value = res.data.roles;
});

defineExpose({
  formCheckAll,
  resetForm
});
</script>
<template>
  <div class="Dialog-form">
    <div class="form-con">
      <el-form
        ref="formRef"
        style="max-width: 600px"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" autocomplete="off" type="password" />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="ruleForm.confirmPassword" autocomplete="off" type="password" />
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="角色" prop="roles">
          <el-select v-model="ruleForm.roles" placeholder="选择角色">
            <template v-for="(item, index) in roles" :key="index">
              <el-option :label="item.name" :value="item.code" />
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="状态">
          <el-radio-group v-model="ruleForm.active">
            <el-radio :value="true">启用</el-radio>
            <el-radio :value="false">停用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.Dialog-form {
  padding: 20px;
  display: flex;
  justify-content: center;
  .form-con {
    width: 80%;
  }
}
</style>
