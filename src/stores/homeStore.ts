import { defineStore } from 'pinia';
import { getMenus, getMenuByUser } from '@/api/homeApi';
import { ref } from 'vue';
import type { AxiosResponse } from 'axios';
import { arrayToTree } from '@/utils/dataFormat';

export const useHomeStore = defineStore('sliderMenus', () => {
  const sliderMenus = ref<Menus[]>([]);

  // 获取所有菜单
  const getUserMenus = async () => {
    const data: AxiosResponse<dataMenus> = await getMenus();
    console.log('all menu', data.data.menus);
    sliderMenus.value = data.data.menus ? arrayToTree(data.data.menus, undefined) : [];
  };

  // 获取用户菜单
  const getUserMenu = async () => {
    const data: AxiosResponse<dataMenus> = await getMenuByUser();
    console.log('user menu', data.data.data.menus);
    sliderMenus.value = data.data.data.menus ? arrayToTree(data.data.data.menus, undefined) : [];
  };
  return {
    sliderMenus,
    getUserMenus,
    getUserMenu
  };
});
