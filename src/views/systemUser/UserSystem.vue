<script setup lang="ts">
import MyTable from '@/components/myTable/Table.vue';
import SysHead from '@/components/systemHeader/syshead.vue';
</script>
<template>
  <div class="user">
    <SysHead />
    <MyTable />
  </div>
</template>
<style lang="scss" scoped>
.user {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 20px;
}
</style>
