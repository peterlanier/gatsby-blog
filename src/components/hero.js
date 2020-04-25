import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Peter from "../images/peter.jpeg"

function Hero({ siteTitle }) {
  return (
    <header
      style={{
        background: `#eac67a`,
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
                maxWidth: "50px",
                borderRadius: "50%",
                marginBottom: "-15px",
                marginRight: "15px",
              }}
            />
            {siteTitle}
          </Link>
        </h1>
        <p style={{ color: "white", marginTop: "1.45rem", maxWidth: "30rem" }}>
          I'm a software engineer and a web developer. I live in Knoxville, TN.
          This is my blog. You can also visit my portfolio and resume.
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
