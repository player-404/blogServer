<script setup lang="ts">
const emit = defineEmits(['add', 'del']);
defineProps({
  showAddBtn: {
    type: Boolean
  },
  showDelBtn: {
    type: Boolean
  },
  showImportBtn: {
    type: Boolean
  },
  showExportBtn: {
    type: Boolean
  }
});

// 添加
const add = () => {
  emit('add');
};

// 删除
const del = () => {
  emit('del');
};
</script>
<template>
  <div class="editor-btns">
    <el-button color="#3868ca" plain v-if="showAddBtn" @click="add">
      添加
      <template #icon>
        <font-awesome-icon :icon="['fas', 'plus']" />
      </template>
    </el-button>

    <el-button color="#fe8383" plain v-if="showDelBtn" @click="del">
      删除
      <template #icon>
        <font-awesome-icon :icon="['fas', 'trash']" />
      </template>
    </el-button>

    <el-button color="#909399" plain v-if="showImportBtn">
      导入
      <template #icon>
        <font-awesome-icon :icon="['fas', 'file-import']" />
      </template>
    </el-button>

    <el-button color="#ffba00" plain v-if="showExportBtn">
      导出
      <template #icon>
        <font-awesome-icon :icon="['fas', 'file-export']" />
      </template>
    </el-button>
  </div>
</template>
<style lang="scss" scoped>
.editor-btns {
  margin: 0 30px;
}
</style>
