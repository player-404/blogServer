import { type Ref } from 'vue';

// 验证表单
export const verifyForm = (ElementRef: Ref): boolean => {
  // 验证规则
  ElementRef.value.forEach((item: any) => {
    (item as any).verify();
  });
  // 检查验证状态
  return ElementRef.value.every((item: any) => (item as any).verifyStatus === true);
};
