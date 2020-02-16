import React from "react"

import Layout from "../components/Layout"
import Intro from "../components/Intro"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro/>
  </Layout>
)

export default IndexPage
