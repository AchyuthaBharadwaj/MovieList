import React, { Component } from "react"
import NavbarHeader from "./NabarHeader"
import NavbarLinks from "./NavbarLinks"
import styled from "styled-components"
import { Section, styles } from "../../../utils"

export default class Navbar extends Component {
  state = {
    navbarOpen: false,
  }
  toggleNavbar = () => {
    this.setState(() => {
      return { navbarOpen: !this.state.navbarOpen }
    })
  }

  render() {
    return (
      <NavWrapper>
        <Section className="navbar-section">
          <NavbarHeader toggleNavbar={this.toggleNavbar} />
          <NavbarLinks
            navbarOpen={this.state.navbarOpen}
            toggleNavbar={this.toggleNavbar}
          />
        </Section>
      </NavWrapper>
    )
  }
}

const NavWrapper = styled.nav`
  position: fixed;
  width: 100%;
  background: ${styles.navbarColors.darkbackground};

  @media (min-width: 768px) {
    ${styles.navbarColors.background};
    .navbar-section {
      display: flex;
      align-items: center;
    }
  }
`
