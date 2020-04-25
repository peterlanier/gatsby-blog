import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import indexStyles from "./index.module.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <Link to={node.fields.slug} className={indexStyles.blogTitle}>
          <h3 className='front'>{node.frontmatter.title}</h3>
        </Link>
        <p style={{ fontStyle: "italic", color: "#a9a9a9", marginBottom: "0" }}>
          {node.frontmatter.date}
        </p>
        <p>{node.frontmatter.excerpt}</p>
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
