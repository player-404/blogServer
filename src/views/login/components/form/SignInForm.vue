<script lang="ts" setup>
import FromCon from './FormCon.vue';
import { signInConfig } from '../config/formConfig';

const submit = () => {};
</script>
<template>
  <div class="cons">
    <FromCon :config="signInConfig" @click="submit" />
  </div>
</template>
<style lang="scss" scoped>
.cons {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}
</style>
