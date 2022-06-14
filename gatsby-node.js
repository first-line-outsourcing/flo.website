const path = require('path');
const fs = require('fs');
const util = require('util');

const fileExists = util.promisify(fs.exists);

exports.onCreateNode = async ({actions, node, getNode, createContentDigest, cache}) => {
  const {createParentChildLink} = actions

  /*
   * It allows you to use data.json as page metadata. Put data.json along with page component(like MyPage.jsx).
   *
   * Example:
   *  - MyPage.jsx
   *  - data.json
   *
   * Then query metadata like this:
   * ```
   * const data = useStaticQuery(graphql`
   *       query {
   *           allSitePage(filter: {path: {regex: "/^\\/services\\//"}}) {
   *               edges {
   *                   node {
   *                       path
   *                       children {
   *                           ... on Json { // here is page metadata
   *                               id
   *                               shortDescription
   *                               shortTitle
   *                               cardBg {
   *                                   publicURL
   *                               }
   *                           }
   *                       }
   *                   }
   *               }
   *           }
   *       }
   *   `);
   * ```
   *
   * To get it working put this into gatsby-config.js in plugin section:
   * ```
   * {
   *   resolve: `gatsby-transformer-json`,
   *   options: {
   *     typeName: `Json`
   *   },
   * }
   * ```
  */
  if (node.internal.type === 'SitePage') {
    const base = path.dirname(node.componentPath);
    const dataJsonPath = path.join(base, 'data.json');

    if (!await fileExists(dataJsonPath)) {
      return;
    }

    const cacheKey = createContentDigest(dataJsonPath);
    const dataNodeId = await cache.get(cacheKey);

    if (!dataNodeId) {
      await cache.set(cacheKey, node.id);
      return;
    }

    createParentChildLink({parent: node, child: getNode(dataNodeId)});
    await cache.del(cacheKey);
  } else if (node.internal.type === 'Json') {
    const parent = getNode(node.parent);
    const absPath = parent.absolutePath;
    const cacheKey = createContentDigest(absPath);
    const pageNodeId = await cache.get(cacheKey);

    if (pageNodeId) {
      createParentChildLink({parent: getNode(pageNodeId), child: node});
      await cache.del(cacheKey);
      return;
    }

    await cache.set(cacheKey, node.id);
  }
}

// Create pages

async function createPagesFromMdxContent(createPage, graphql, sourceName, pathRoot, templatePath) {
  const queryString = `
    query {
      allMdx(filter: {fields: {source: {eq: "${sourceName}"}}}) {
        nodes {
          slug
          id
        }
      }
    }
  `
  const query = await graphql(queryString);

  const nodes = query.data.allMdx.nodes;

  for (const node of nodes) {
    await createPage({
      path: `/${pathRoot}/${node.slug}`,
      component: templatePath,
      context: {
        id: node.id
      }
    })
  }
}

exports.createPages = async ({actions, graphql}) => {
  const {createPage} = actions

  await createPagesFromMdxContent(
    createPage,
    graphql,
    'blog-posts',
    'blog',
    path.resolve('src/pages/blog/_post.jsx')
  );
  await createPagesFromMdxContent(
    createPage,
    graphql,
    'cases',
    'cases',
    path.resolve('src/pages/cases/_case.jsx')
  );
  await createPagesFromMdxContent(
    createPage,
    graphql,
    'services',
    'services',
    path.resolve('src/pages/services/_service.jsx')
  );
  await createPagesFromMdxContent(
    createPage,
    graphql,
    'solutions',
    'solutions',
    path.resolve('src/pages/solutions/_solution.jsx')
  );
}
