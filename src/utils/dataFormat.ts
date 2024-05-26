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
