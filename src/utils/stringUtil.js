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
