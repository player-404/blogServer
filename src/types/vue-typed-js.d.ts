declare module 'vue-typed-js';

declare interface Menus {
  _id: string;
  level?: number;
  name?: string;
  path?: string;
  parent?: string;
  children?: Menus[];
}

declare interface dataMenus {
  menus: Menus[];
}
