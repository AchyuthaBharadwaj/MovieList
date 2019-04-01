import React, { Component } from "react"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"
import styled from "styled-components"
import { styles } from "../../../utils"

export default class NabarHeader extends Component {
  render() {
    const { toggleNavbar } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <h2>
            <span className="headerSpan">M</span>ovie
            <span className="headerSpan">L</span>ist
          </h2>
        </Link>

        <FaBars className="toggleIcon" onClick={() => toggleNavbar()} />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  color: ${styles.navbarColors.textColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${styles.navbarColors.textColor};
  }
  .toggleIcon {
    font-size: 1.75rem;
    color: ${styles.navbarColors.textColor};
    cursor: pointer;
  }
  .headerSpan {
    font-size: 2.3rem !important;
    color: ${styles.navbarColors.mainBlue};
  }

  @media (min-width: 768px) {
    .toggleIcon {
      display: none;
    }
  }
`
