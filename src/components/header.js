import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "../components/image"
import Peter from "../images/peter.jpeg"

function Header({ siteTitle, pageContext }) {
  const isBlog = pageContext == "blog" ? true : false
  const backgroundColor = isBlog ? "transparent" : "#231C42"
  const color = isBlog ? "black" : "white"

  return (
    <header
      style={{
        background: backgroundColor,
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: color,
              textDecoration: `none`,
            }}
          >
            {isBlog && (
              <img
                src={Peter}
                style={{
                  maxWidth: "50px",
                  borderRadius: "50%",
                  marginBottom: "-15px",
                }}
              />
            )}{" "}
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
