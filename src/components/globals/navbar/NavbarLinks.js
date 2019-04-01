import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 1,
        path: "/",
        name: "about",
      },
      {
        id: 2,
        path: "/",
        name: "menu",
      },
      {
        id: 3,
        path: "/",
        name: "contact",
      },
    ],
  }

  render() {
    return (
      <div style={{ margin: "0 0 0 auto" }}>
        <LinkWrapper open={this.props.navbarOpen}>
          {this.state.links.map(item => {
            return (
              <li key={item.id}>
                <Link to={item.path} className="nav-link">
                  {item.name}
                </Link>
              </li>
            )
          })}
        </LinkWrapper>
      </div>
    )
  }
}

const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }
  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: ${styles.navbarColors.textColor};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};
    &:hover {
      background: ${styles.navbarColors.mainBlue};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "110px" : "0px")};
  overflow: hidden;
  margin-block-start: 0em;
  margin-block-end: 0em;
  ${styles.transDefault};

  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 0 0 auto;
    .nav-link:hover {
      background: ${styles.navbarColors.mainBlue};
      padding: 0.5rem 1rem 0.5rem 1rem;
    }
  }
`
