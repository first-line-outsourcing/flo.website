/**
 * Filters all nodes which slug starts with _ for production env
 *
 * @param {any} edge MdxNode
 * @returns {boolean}
 */
export function filterDevNode(edge) {
  if (process.env.NODE_ENV !== 'development') {
    return !edge.node.slug.startsWith('_');
  }
  return true;
}
