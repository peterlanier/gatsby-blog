import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyles from "./index.module.css"
import pic from "../images/aws.jpg"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id} className={indexStyles.blogPost}>
        <div className={indexStyles.blogThumbnail}>
          <Link to={node.fields.slug}>
            <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} alt="featured image" />
          </Link>
        </div>
        <div className={indexStyles.blogDescription}>
          <Link to={node.fields.slug} className={indexStyles.blogTitle}>
            <h3 className="front">{node.frontmatter.title}</h3>
          </Link>
          <p
            style={{ fontStyle: "italic", color: "#a9a9a9", marginBottom: "0" }}
          >
            {node.frontmatter.date}
          </p>
          <p>{node.frontmatter.excerpt}</p>
        </div>
      </div>
    ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            excerpt
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
