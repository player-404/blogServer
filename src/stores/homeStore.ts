import { defineStore } from 'pinia';
import { getMenus } from '@/api/homeApi';
import { ref } from 'vue';
import type { AxiosResponse } from 'axios';
import { arrayToTree } from '@/utils/dataFormat';

export const useHomeStore = defineStore('sliderMenus', () => {
  const sliderMenus = ref<Menus[]>([]);
  const getUserMenus = async () => {
    const data: AxiosResponse<dataMenus> = await getMenus();

    sliderMenus.value = data.data.menus ? arrayToTree(data.data.menus, undefined) : [];
  };

  return {
    sliderMenus,
    getUserMenus
  };
});
