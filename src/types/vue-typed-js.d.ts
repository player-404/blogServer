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
  [x: string]: any;
  menus: Menus[];
}

declare interface Tab {
  title?: string;
  name?: string;
  path?: string;
}

declare interface UserData {
  _id: string;
  username: string;
  password: string;
  confirmpassword: string;
  email?: string;
  phone: string;
  create?: Date;
  menus: Menus[];
  roles: [];
}

declare interface Role {
  active?: boolean;
  code: string;
  name: string;
  menu: Menus[];
  permission?: [];
  _id: string;
}

declare interface User {
  _id?: string;
  username?: string;
  password?: string;
  passwordConfirm?: string;
  email?: string;
  phone?: string;
  roles?: string[];
  createAt?: string;
  active?: boolean;
}

declare interface SignIn {
  title?: string;
  username?: boolean;
  pass?: boolean;
  confirmPass?: boolean;
  phone?: boolean;
  showHead?: boolean;
}

declare interface Ipt extends SignIn {
  type?: string;
  name?: string;
}

declare interface Role {
  active?: boolean;
  code: string;
  menu: [];
  name: string;
  permissions: [];
  _id?: string;
}
