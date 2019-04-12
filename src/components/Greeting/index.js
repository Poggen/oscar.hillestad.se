import React from "react"
import TextLoop from "react-text-loop"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import greetings from "../../data/greetings"

import styles from "./styles.scss"

const Greeting = ({ greetings }) => 
  <StaticQuery
    query= { graphql`
      query {
        oscar: file(relativePath: {eq: "oscar.png"}) {
          childImageSharp {
            fluid(maxWidth: 250) {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
            }
          }
        }
      }
    `
  }
  render = { data => (
      <section className="greeting">
        <div className="greeting__hero">
          <Img className="greeting__hero-face" fluid={data.oscar.childImageSharp.fluid} alt="Oscar's face" />
          <div className={classNames("greeting__hero-shape", "greeting__hero-shape--1")}></div>
          <div className={classNames("greeting__hero-shape", "greeting__hero-shape--2")}></div>
          <div className={classNames("greeting__hero-shape", "greeting__hero-shape--3")}></div>
        </div>
        <div className="greeting__container">
          <TextLoop interval={3000}>
            {greetings.map((greeting, key) => 
              <h1 className="greeting__heading" key={key}>
                {greeting.greeting}!&nbsp;
                <span role="img" aria-label={greeting.emoji.label}>
                  {greeting.emoji.symbol}
                </span>
              </h1>
            )}
          </TextLoop>
          <span className="greeting__lead">I'm Oscar, a product manager who enjoys building digital products, currently working as Head of Product Development & IT at <a href="https://crossroads.se">Crossroads Loyalty Solutions</a>.</span>
        </div>
      </section>
    )
  }
/>

export default Greeting