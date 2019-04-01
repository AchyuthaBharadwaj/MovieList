import React, { Component } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Banner, Section } from "../utils"

export default class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Banner title="search over thousands of movies" />
      </Layout>
    )
  }
}
