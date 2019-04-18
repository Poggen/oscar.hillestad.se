import React, { useState, useEffect } from "react"
import TextLoop from "react-text-loop"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import greetings from "../../data/greetings"

import styles from "./styles.scss"

const randomPercentage = () => Math.floor((Math.random() * 100)-30)
const plusOrMinus = () => Math.round(Math.random()) * 2 - 1
const randomAngle = () => Math.random()*Math.PI*2;
const randomScale = () => Math.random() + 0.5

const randomTransformRotation = () => `rotate(${plusOrMinus()}${randomAngle()}deg) scale(${randomScale()})`
const randomBorderRadius = () => `${randomPercentage()}% ${randomPercentage()}% ${randomPercentage()}% ${randomPercentage()}% / ${randomPercentage()}% ${randomPercentage()}% ${randomPercentage()}% ${randomPercentage()}%`

const Greeting = ({ greetings }) => {

  const [ style, setStyle ] = useState([]);

  useEffect(() => {
    setInterval(() => {
      setStyle([{
        borderRadius: randomBorderRadius(),
        transform: randomTransformRotation(),
      },
      {
        borderRadius: randomBorderRadius(),
        transform: randomTransformRotation(),
      },
      {
        borderRadius: randomBorderRadius(),
        transform: randomTransformRotation(),
      }])
    }, 4000)
  }, [])

  return (
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
            <div className="greeting__hero-shape-container">
              <div
                className={classNames("greeting__hero-shape", "greeting__hero-shape--1")}
                style={style[0]}></div>
              <div
                className={classNames("greeting__hero-shape", "greeting__hero-shape--2")}
                style={style[1]}></div>
              <div
                className={classNames("greeting__hero-shape", "greeting__hero-shape--3")}
                style={style[2]}></div>
            </div>
          </div>
          <div className="greeting__container">
            <TextLoop interval={4000}>
              {greetings.map((greeting, key) =>
                <h1 className="greeting__heading" key={key}>
                  {greeting.greeting}!&nbsp;
                  <span role="img" className={classNames("greeting__emoji", `greeting__emoji--${greeting.emoji.animation}`)} aria-label={greeting.emoji.label}>
                    {greeting.emoji.symbol}
                  </span>
                </h1>
              )}
            </TextLoop>
            <span className="greeting__lead">I'm Oscar, a product manager who enjoys building digital products. Currently Head of Product Development & IT at <a href="https://crossroads.se">Crossroads Loyalty Solutions</a>.</span>
          </div>
        </section>
      )
    }
  />
  )
}
export default Greeting