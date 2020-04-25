import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Peter from "../images/peter.jpeg"

function Header({ siteTitle }) {
  return (
    <header
      style={{
        background: `transparent`,
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
              color: `black`,
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
