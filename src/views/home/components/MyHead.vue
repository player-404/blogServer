<script lang="ts" setup></script>
<template>
  <div class="head-con">
    <div class="left">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="right">
      <!-- 搜索框 -->
      <el-input placeholder="搜索" class="search">
        <template #prefix>
          <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </template>
      </el-input>
      <!-- 通知 -->
      <el-button class="btn">
        <template #icon>
          <font-awesome-icon :icon="['far', 'bell']" size="lg" />
        </template>
      </el-button>
      <!-- 头像 -->
      <el-dropdown trigger="hover" class="drop">
        <el-avatar :size="40" shape="square" :src="undefined" class="av">
          <img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        /></el-avatar>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.head-con {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .right {
    display: flex;
    align-items: center;
    .search {
      width: 300px;
      height: 40px;
      border-radius: 10px;
    }
    .btn {
      width: 40px;
      height: 40px;
      margin: 0 20px;
      border-radius: 10px;
    }
    .drop {
      outline: none;
      border: none;
      .av {
        border-radius: 10px;
        cursor: pointer;
        border: none;
      }
    }
  }
}
</style>
