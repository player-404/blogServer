<script setup lang="ts">
import { formatISODate } from '@/utils/dataFormat';
import { ref } from 'vue';

const selection = ref<User[]>([]);
defineProps<{
  data: any[];
}>();
const emit = defineEmits(['itemDel']);
const formatter = (row: any) => {
  return row.roles[0].name;
};
const formatterCode = (row: any) => {
  return row.roles[0].code;
};
// 时间格式化
const formatterDate = (row: any) => {
  return formatISODate(row.createAt);
};
// 多选
const handleSelectionChange = (rows: User[]) => {
  console.log('rows', rows);
  selection.value = rows;
};
// item数据删除
const itemDel = (user: User[]) => {
  console.log('user', user);
  emit('itemDel', user);
};
</script>
<template>
  <div class="table-con">
    <el-table :data="data" border highlight-current-row @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column type="index" width="55" label="序号" />
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="" label="角色" :formatter="formatter"></el-table-column>
      <el-table-column prop="" label="权限标识" :formatter="formatterCode"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column label="状态">
        <template #default="scope">
          <el-tag v-if="scope.row.active">{{ '启用' }}</el-tag>
          <el-tag v-else type="danger">{{ '禁用' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="createAt"
        label="创建时间"
        :formatter="formatterDate"
      ></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" size="small" text>
            修改
            <template #icon>
              <font-awesome-icon :icon="['far', 'pen-to-square']" />
            </template>
          </el-button>
          <el-button type="danger" size="small" text @click="itemDel(scope.row)"
            >删除
            <template #icon>
              <font-awesome-icon :icon="['fas', 'trash']" />
            </template>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<style lang="scss" scoped>
.table-con {
  padding: 20px 20px 0;
}
</style>
