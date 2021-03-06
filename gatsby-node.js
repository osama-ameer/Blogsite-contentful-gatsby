const path = require('path')

exports.createPages = async ( {graphql, actions}) => {
    const { createPage} = actions;
    const response = await graphql (`
    query  {
        allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `); 
    console.log(response)

    response.data.allContentfulBlogPost.edges.forEach(edge => {
      
        createPage({
            path: `/${edge.node.slug}`,
            component: path.resolve("./src/template/template.js"),
            context: {
               slug: edge.node.slug

            },
        })
    });
}