import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Peter from "../images/peter.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"

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
          padding: `0 1.0875rem`,
          maxWidth: 720,
          margin: `0 auto`,
          paddingTop: `1.45rem`,
        }}
      >
        <div
          style={{
            display: `grid`,
            gridTemplateColumns: `auto auto`,
          }}
        >
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            display: `grid`,
            gridTemplateColumns: `60px auto`,
          }}
        >
          <img
            src={Peter}
            alt="avatar"
            style={{
              maxWidth: "60px",
              borderRadius: "50%",
              marginBottom: 0,
            }}
          />
          <h1
            style={{
              margin: 0,
              marginLeft: `0.5rem`,
              display: `flex`,
              justifyContent: `flex-start`,
              alignItems: `center`,
              maxWidth: `inherit`,
            }}
          >
            {siteTitle}
          </h1>
        </Link>
        <div
          className="header-social"
          style={{
            display: `flex`,
            justifyContent: `flex-end`,
            alignItems: `center`,
          }}
        >
          <a href="https://www.linkedin.com/in/peter-lanier/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="lg" color="black" />
          </a>
          <a href="https://github.com/peterlanier/" target="_blank" style={{marginLeft: `0.5rem`}}>
            <FontAwesomeIcon icon={faGithubSquare} size="lg" color="black" />
          </a>
        </div>
      </div>
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
