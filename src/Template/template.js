import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout';
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer"


const template = (props) => {
    console.log(props);
    return (
        <Layout >
        <div>
            
            <Link  to="/">Visit the Blog Page</Link>
            <div className="content">
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <span className="meta">
                    Post on {props.data.contentfulBlogPost.publicationDate}
                </span>
                {
                    props.data.contentfulBlogPost.images && (
                        <Img 
                            className="featured"
                            fluid={props.data.contentfulBlogPost.images.fluid}
                            alt="My image"
                        />
                    )
                }

                
               
            </div>
        </div>
        </Layout>
    )
}

export default template

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
      publicationDate(formatString: "DD MM YYYY")
      images {
        fluid(maxWidth: 0) {
          ...GatsbyContentfulFluid
        }
      }
      content {
        raw
      }
        }
    }
`;


