<script setup lang="ts">
import MyTable from '@/components/myTable/Table.vue';
import SysHead from '@/components/systemHeader/syshead.vue';
import DialogForm from './components/DialogForm.vue';
import { getAllUsers } from '@/api/user';
import { ref } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { addUser } from '@/api/user';
import { computed } from 'vue';

// 表单数据
const formData = ref({
  username: '',
  phone: '',
  password: '',
  confirmPassword: '',
  roles: [''],
  active: true
});
// Dialog 实例
const DialogRef = ref(null);
const loadStatus = ref(false);
// 用户数据
const allUsersData = ref([]);
const tabType = ref('onLine');
//弹出框
const showDialog = ref(false);
// 弹框标题
const DialogTitle = ref('添加用户');
// tab切换
const tabChange = (type: string) => {
  console.log('change');
  tabType.value = type;
};

// tab切换 失效/激活用户 数据
const userDatas = computed(() => {
  if (tabType.value === 'onLine') {
    return allUsersData.value.filter((item: User) => item.active == true);
  }
  return allUsersData.value.filter((item: User) => item.active == false);
});
// 添加用户
const add = () => {
  showDialog.value = true;
};
// 删除用户
const del = () => {
  showDialog.value = true;
};
// 提交表单
const submit = async () => {
  if (!DialogRef.value) return;

  const status = await (DialogRef.value as any).formCheckAll();
  console.log('status', status);
  if (!status) {
    ElMessage({
      message: '添加用户失败, 请检查你的数据后重试!',
      type: 'error'
    });
    return;
  }
  addUser(formData.value)
    .then((res) => {
      console.log('res', res);
      ElMessage({
        message: '用户添加成功！',
        type: 'success'
      });
      showDialog.value = false;
      // 重新获取用户数据
      getInitData();
    })
    .catch((err) => {
      console.log('err', err);
      showDialog.value = false;
      ElMessage({
        message: '添加用户失败, 请稍后重试!',
        type: 'error'
      });
    });
};
// 重置表单
const reset = () => {
  if (!DialogRef.value) return;
  (DialogRef.value as any).resetForm();
};
// 关闭弹框
const handleClose = (done: () => void) => {
  showDialog.value = false;
  done();
};

// 获取所有用户数据
const getInitData = () => {
  // 获取所有用户数据
  getAllUsers()
    .then((res) => {
      allUsersData.value = res.data.data;
      console.log('allusers', allUsersData.value);
    })
    .catch(() => {
      ElMessage({
        message: '数据获取失败，请稍后刷新页面',
        type: 'error'
      });
    });
};
// 删除表格数据
const itemDel = (row: any) => {
  ElMessageBox.confirm('确定要删除当前数据吗', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
    confirmButtonClass: 'confirm-button'
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: 'Delete completed'
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled'
      });
    });
};
getInitData();
</script>
<template>
  <div class="user">
    <!-- 头 -->
    <SysHead @tabsChange="tabChange" @add="add" @del="del" />
    <!-- 表格数据展示 -->
    <MyTable v-loading="loadStatus" :data="userDatas" @itemDel="itemDel" />
    <!-- 弹出框 -->
    <el-dialog
      v-model="showDialog"
      :title="DialogTitle"
      width="500"
      :before-close="handleClose"
      destroy-on-close
      center
    >
      <DialogForm ref="DialogRef" v-model="formData" />
      <template #footer>
        <el-button
          size="large"
          color="#e1e7e9"
          style="width: 100px"
          @click="submit"
          class="submitBtn"
          >确定</el-button
        >
        <el-button size="large" style="width: 100px" @click="reset" color="#f4f6f7">重置</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<style lang="scss">
.user {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
  .submitBtn {
    margin-right: 20px;
  }
  :deep(.el-message-box__btns > .el-button) {
    background-color: red;
  }
}
</style>
