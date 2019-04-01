import React, { Component } from "react"
import styled from "styled-components"
import { styles, Section } from "../utils"

export default class Banner extends Component {
  render() {
    return (
      <BannerWrapper>
        <Section className="bannerSection">
          <h1 className="brand">
            <span className="brandSpan">M</span>ovie
            <span className="brandSpan">L</span>ist
          </h1>
          <input
            type="text"
            placeholder="&#xF002; Search"
            className="search"
            style={{ fontFamily: "Arial, FontAwesome" }}
          />
        </Section>
      </BannerWrapper>
    )
  }
}

const BannerWrapper = styled.div`
  ${styles.navbarColors.background};
  height: 90vh;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  .brand {
    margin-bottom: 0.7rem;
    font-size: 3rem;
    .brandSpan {
      font-size: 4.3rem !important;
      color: ${styles.navbarColors.mainBlue};
    }
  }
  .bannerSection {
    text-align: center;
    color: ${styles.navbarColors.textColor};
    text-transform: capitalize;
    font-size: 1.5rem;

    .search {
      width: 400px;
      height: 2rem;
      outline: none;
      border: none;
      border-radius: 1rem;
      padding: 1rem;
      font-size: 1rem;
      font-family: "FontAwesome";
    }
  }

  @media (min-width: 900px) {
    .bannerSection {
      .brand {
        margin-bottom: 0.7rem;
        font-size: 4rem;
        .brandSpan {
          font-size: 6rem !important;
          color: ${styles.navbarColors.mainBlue};
        }
      }
      .search {
        font-size: 1.5rem;
        padding: 1.5rem;
        width: 700px;
        height: 3rem;
        border-radius: 2rem;
      }
    }
  }
`
