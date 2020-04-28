import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Peter from "../images/peter.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function Hero({ siteTitle }) {
  return (
    <header
      style={{
        background: `#23282E`,
        marginBottom: `2rem`,
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
              color: `#F5F5F5`,
              
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
              <FontAwesomeIcon icon={faLinkedin} size="lg" color="#F5F5F5" />
            </a>
            <a
              href="https://github.com/peterlanier/"
              target="_blank"
              style={{ marginLeft: `0.5rem` }}
            >
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="lg"
                color="#F5F5F5"
              />
            </a>
          </div>
        </div>

        <div
          style={{
            margin: `0 auto`,
            maxWidth: 720,
            paddingBottom: `0.1rem`,
          }}
        >
          <p
            style={{
              color: "#F5F5F5",
              marginTop: "1.45rem",
              maxWidth: "680px",
            }}
          >
            I'm a software engineer, a web developer, and a lifelong learner.
            I'm currently passionate about React & serverless integrations. This
            is my blog.
          </p>
        </div>
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
