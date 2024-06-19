import { defineStore } from 'pinia';
import { useHomeStore } from './homeStore';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  const user = ref<UserData>();

  const setSignUpUser = (userData?: UserData) => {
    const homeStore = useHomeStore();
    if (userData) {
      // 获取菜单
      homeStore.getUserMenu().then(() => {
        user.value = { ...userData, menus: homeStore.sliderMenus };
        localStorage.setItem('user', JSON.stringify(user.value));
      });
    }
  };

  const setSignInUser = (userData?: UserData) => {
    if (userData) {
      user.value = userData;
      localStorage.setItem('user', JSON.stringify(user.value));
    }
  };

  return {
    user,
    setSignUpUser,
    setSignInUser
  };
});
