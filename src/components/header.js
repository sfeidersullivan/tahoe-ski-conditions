import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import SettingsIcon from '../images/gear.svg';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `gray`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between',
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
          {siteTitle}
        </Link>
      </h1>
      <Link to='/settings'>
        <img style={{ maxHeight: 30 }} src={SettingsIcon} alt='settings'></img>
      </Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
