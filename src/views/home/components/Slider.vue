<script setup lang="ts"></script>
<template>
  <el-row>
    <el-col :span="24" class="menu-con">
      <h5 class="mb-2 slider-title">刘刘的后台</h5>
      <el-menu
        background-color="#E2EBE8"
        popper-effect="light"
        text-color="#717A77"
        active-text-color="#272727"
        :unique-opened="true"
        style="--el-menu-hover-bg-color: #edf1f0"
      >
        <el-sub-menu index="1">
          <template #title>
            <span>测试菜单</span>
          </template>
          <el-menu-item-group title="子菜单">
            <el-menu-item index="1-1">孙子菜单1</el-menu-item>
            <el-menu-item index="1-2">孙子菜单2</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="2">
          <span>测试菜单2</span>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title> 测试菜单3 </template>
          <el-menu-item index="3-1">孙子菜单1</el-menu-item>
          <el-menu-item index="3-2">孙子菜单2</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<style lang="scss" scoped>
.menu-con {
  font-family: ui-serif;
  .slider-title {
    color: #303030;
    text-align: center;
    font-size: 20px;
  }
}
:deep(.el-menu) {
  user-select: none;
  font: {
    weight: 600;
  }
}
:deep(.el-menu-item) {
  --el-menu-hover-bg-color: #edf1f0;
}
:deep(.el-menu--inline) {
  background-color: #edf1f0;
}
</style>
