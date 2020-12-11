import React, { useState } from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Container, Row, Col } from 'react-bootstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';




const IndexPage = () => {
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

  console.log(data.allContentfulBlogPost.edges[0].node.excerpt.excerpt)
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <ul className="posts">
          <Container className="MainIndex">
            <Row className="justify-content-md-center">

              <h2 style={{ textAlign: 'center' }}>
                {data.allContentfulBlogPost.edges[0].node.title}
              </h2>
            </Row>
            <Row className="justify-content-md-center">

              <div className="meta">
                <span>Posted on {data.allContentfulBlogPost.edges[0].node.publishedDate}</span>
              </div>
            </Row>
            <Row>
              <Col>
                {data.allContentfulBlogPost.edges[0].node.featuredImage && (
                  <Img
                    className="featured"
                    fluid={data.allContentfulBlogPost.edges[0].node.featuredImage.fluid}
                    alt={data.allContentfulBlogPost.edges[0].node.title}
                  />
                )}

              </Col>
              <Col>
                <p className="excerpt">
                  {data.allContentfulBlogPost.edges[0].node.excerpt.excerpt}
                </p>
              </Col>
            </Row>

          </Container>
        </ul>
      </div>

      <Link to="/blog" className="Link">Login to  Read More</Link> <br />
    </Layout>
  )
}

export default IndexPage
