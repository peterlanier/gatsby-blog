import React from "react"

const Footer = () => (
  <footer style={{}}>
    <div
      style={{
        maxWidth: 720,
        margin: `0 auto`,
        padding: `1rem 1.0875rem`,
        display: `flex`,
        justifyContent: `center`,
        borderTop: `1px solid #eaecef`
      }}
    >
      Peter Lanier | © {new Date().getFullYear()}
    </div>
  </footer>
)

export default Footer
