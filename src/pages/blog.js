import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import '../components/layout.css'
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "DD MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                
                  excerpt
                
              }
            }
          }
        }
      }
    `
  )
 


  const [user] = useState(false)
  return (
    <Layout className="Layout">
      <SEO title="Blog" />
      <p className="center">
        <Link to="/" className="Link center">Go back to the Homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.publishedDate}</span>
              </div>
              {edge.node.featuredImage && (
                <Img
                  className="featured"
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )}
              <p className="excerpt">
                {edge.node.excerpt.excerpt}
              </p>
              <div className="button">
               
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog



