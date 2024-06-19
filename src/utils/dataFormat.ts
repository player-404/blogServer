//扁平数据转换为树形数据
const getChild = (data: Menus[], result: Menus[] | undefined, pid: string | undefined) => {
  if (!result) return;
  data.forEach((item: Menus) => {
    if (item.parent == pid) {
      const newItem: Menus = { ...item, children: [] };
      getChild(data, newItem.children, item._id);
      result.push(newItem);
    }
  });
};

export const arrayToTree = (data: Menus[], pid: string | undefined) => {
  const result: Menus[] = [];
  getChild(data, result, pid);
  return result;
};

export const formatISODate = (isoDateString: string) => {
  // 创建Date对象
  const date = new Date(isoDateString);

  // 获取年份（两位数）
  const year = String(date.getFullYear()).slice(-2);
  // 获取月份（两位数） padStart() 方法用于在字符串的开头补全零位数到 desiredLength 长度
  const month = String(date.getMonth() + 1).padStart(2, '0');
  // 获取日期（两位数）
  const day = String(date.getDate()).padStart(2, '0');
  // 获取小时（两位数，24小时制）
  const hours = String(date.getHours()).padStart(2, '0');
  // 获取分钟（两位数）
  const minutes = String(date.getMinutes()).padStart(2, '0');
  // 获取秒数（两位数）
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // 拼接并返回格式化的日期时间字符串
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};
