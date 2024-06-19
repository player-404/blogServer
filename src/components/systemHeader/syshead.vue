<script setup lang="ts">
import ActiveTabs from './components/ActiveTabs.vue';
import EditorBtns from './components/EditorBtns.vue';
import MySearch from './components/MySearch.vue';
import { ref, watch } from 'vue';

const tabsType = ref<'onLine' | 'offLine'>('onLine');
const emit = defineEmits(['tabsChange', 'add', 'del']);
defineProps({
  showTabs: {
    type: Boolean,
    default: true
  },
  showAddBtn: {
    type: Boolean,
    default: true
  },
  showDelBtn: {
    type: Boolean,
    default: true
  },
  showImportBtn: {
    type: Boolean,
    default: true
  },
  showExportBtn: {
    type: Boolean,
    default: true
  },
  showSearch: {
    type: Boolean,
    default: true
  }
});

const add = () => {
  emit('add');
};

const del = () => {
  emit('del');
};
// 监听tabsType的变化，并触发父组件的tabsChange事件
watch(tabsType, (newv) => {
  emit('tabsChange', newv);
});
</script>
<template>
  <div class="sys-header">
    <div class="left">
      <ActiveTabs v-if="showTabs" v-model="tabsType" />
    </div>
    <div class="right">
      <EditorBtns
        :showAddBtn="showAddBtn"
        :showDelBtn="showDelBtn"
        :showImportBtn="showImportBtn"
        :showExportBtn="showExportBtn"
        @add="add"
        @del="del"
      />
      <MySearch v-if="showSearch" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.sys-header {
  padding: 20px 20px 0;
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
  }
  .right {
    display: flex;
    align-items: center;
  }
}
</style>
