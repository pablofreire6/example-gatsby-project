import React from "react"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import { Link } from "gatsby"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="continue exploring"
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac sem gravida, egestas enim quis, imperdiet nunc. In tempus elementum lorem, bibendum ultricies sapien convallis eu"
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
