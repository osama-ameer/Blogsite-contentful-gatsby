
import { graphql, Link } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image';
import Layout from '../components/Layout';




function index({data}) {
  return (
    <Layout >
    <div>
      
      
      <ul className="posts">

        { data.allContentfulBlogPost.edges.map(edge => {

          return(
            <li className="post" key={edge.node.id} >
              <h2> {edge.node.title}</h2>
                <div className="meta">
                    <span>Posted on {edge.node.publicationDate}</span>
                </div>
                    
                    {
                      edge.node.images && (
                        <Img className="featured" fluid={edge.node.images.fluid}
                            alt="my image" />
                      )
                   }

                    <p className="excerpt">
                        {edge.node.excerpt.childMarkdownRemark.excerpt}
                      </p>
                                        
                      <div className="button">
                                        <Link to={`/${edge.node.slug}`}>Read More</Link>
                                    </div>
          </li>
          )
        })


    //   <h1>INDEX PAGE</h1>
    //   <h2>{data.allContentfulBlogPost.edges[1].node.title}</h2>
    //   <h2>{data.allContentfulBlogPost.edges[1].node.slug}</h2>
      
    //   {
    //      data.allContentfulBlogPost.edges[0].node.images && (
    //     <Img className="featured" fluid={data.allContentfulBlogPost.edges[0].node.images.fluid}
    //           alt={data.allContentfulBlogPost.edges[0].node.title} />
    //  )
    //   }
      
    }
       
       
       </ul>
    </div>
    </Layout>
  )
}

export default index

export const query =
 graphql `
query MyQuery {
  allContentfulBlogPost(sort: {fields: publicationDate, order: ASC}) {
    edges {
      node {
        id
        slug
        publicationDate(formatString: "DD MM YYYY")
        title
        images {
          id
          fluid(maxWidth: 0) {
            ...GatsbyContentfulFluid
          }
        }
        excerpt {
          childMarkdownRemark {
            excerpt(pruneLength: 500)
          }
        }
      }
    }
  }
}

`
