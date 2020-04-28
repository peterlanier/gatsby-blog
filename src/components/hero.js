import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Peter from "../images/peter.jpeg"

function Hero({ siteTitle }) {
  return (
    <header
      style={{
        background: `#23282E`,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 720,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img
              src={Peter}
              alt="avatar"
              style={{
                maxWidth: "64px",
                borderRadius: "50%",
                marginBottom: "-20px",
                marginRight: "15px",
                border: '2px solid white'
              }}
            />
            {siteTitle}
          </Link>
        </h1>
        <p style={{ color: "white", marginTop: "1.45rem", maxWidth: "720px" }}>
          I'm a software engineer, a web developer, and a lifelong learner. I'm currently passionate about React & serverless integrations.
          This is my blog.
        </p>
      </div>
    </header>
  )
}

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
