export interface SignIn {
  title?: string;
  username?: boolean;
  pass?: boolean;
  confirmPass?: boolean;
  phone?: boolean;
  showHead?: boolean;
}

interface Ipt extends SignIn {
  type?: string;
  name?: string;
}

// 登录总表单配置
export const signInConfig: SignIn = {
  title: '登录',
  username: true,
  pass: true,
  showHead: true
};
// 注册表单基本信息配置
export const signUpInfoConfig: SignIn = {
  title: '注册',
  username: true,
  pass: true,
  confirmPass: true,
  showHead: false
};
// 注册表单手机号验证表单配置
export const signUpPhoneConfig: SignIn = {
  phone: true,
  showHead: false
};

//  下面是单个输入框的配置
// 用户名输入框配置
export const userIptConfig: Ipt = {
  name: 'username',
  title: '用户名'
};
// 密码输入框配置
export const passIptConfig: Ipt = {
  name: 'password',
  title: '密码',
  type: 'password'
};
// 确认密码输入框配置
export const confirmPassConfig: Ipt = {
  name: 'confirmPassword',
  title: '确认密码',
  type: 'password'
};
// 手机号码数据框配置
export const phoneConfig: Ipt = {
  name: 'phone',
  title: '手机号'
};
// 验证码输入框配置
export const verifyCodeConfig: Ipt = {
  name: 'verifyCode',
  title: '验证码'
};
