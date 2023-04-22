export function getModuleName(text) {
  if (!text.startsWith('./')) {
    return '';
  }
  const start = text.indexOf('/');
  const end = text.lastIndexOf('.');
  return text.slice(start + 1, end);
}

/**
 * jsonToTree 方法
 * 根据提供的 id, pid 和 children 将一个个节点构建成一棵或者多棵树
 * @param nodes 节点对象
 * @param config 配置对象
 */
export function jsonToTree(nodes, config) {
  const id = (config && config.id) || 'id';
  const pid = (config && config.pid) || 'pid';
  const children = (config && config.children) || 'children';
  const idMap = {};
  const jsonTree = [];
  nodes.forEach((v) => {
    v && (idMap[v[id]] = v);
  });
  nodes.forEach((v) => {
    if (v) {
      const parent = idMap[v[pid]];
      if (parent) {
        !parent[children] && (parent[children] = []);
        parent[children].push(v);
      } else {
        jsonTree.push(v);
      }
    }
  });
  return jsonTree;
}

export function tranListToTreeData(list) {
  // 1. 定义两个变量
  const treeList = []; const map = {}

  // 2. 建立一个映射关系，并给每个元素补充children属性.
  // 映射关系: 目的是让我们能通过id快速找到对应的元素
  // 补充children：让后边的计算更方便
  list.forEach(item => {
    if (!item.children) {
      item.children = []
    }
    map[item.id] = item
  })

  // 循环
  list.forEach(item => {
    // 对于每一个元素来说，先找它的上级
    //    如果能找到，说明它有上级，则要把它添加到上级的children中去
    //    如果找不到，说明它没有上级，直接添加到 treeList
    const parent = map[item.pid]
    // 如果存在上级则表示item不是最顶层的数据
    if (parent) {
      parent.children.push(item)
    } else {
      // 如果不存在上级 则是顶层数据,直接添加
      treeList.push(item)
    }
  })
  // 返回
  return treeList
}
