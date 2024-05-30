<script setup lang="ts"></script>
<template>
  <div class="editor-btns">
    <el-button color="#3868ca" size="middle" plain>
      添加
      <template #icon>
        <font-awesome-icon :icon="['fas', 'plus']" />
      </template>
    </el-button>

    <el-button size="middle" color="#fe8383" plain>
      删除
      <template #icon>
        <font-awesome-icon :icon="['fas', 'trash']" />
      </template>
    </el-button>

    <el-button size="middle" color="#909399" plain>
      导入
      <template #icon>
        <font-awesome-icon :icon="['fas', 'file-import']" />
      </template>
    </el-button>

    <el-button size="middle" color="#ffba00" plain>
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
