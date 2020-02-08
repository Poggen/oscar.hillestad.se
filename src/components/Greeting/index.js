import React, { useState, useEffect } from "react"
import TextLoop from "react-text-loop"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import classNames from "classnames"

import styles from "./styles.module.scss"

const randomPercentage = () => Math.floor((Math.random() * 100)-30)
const plusOrMinus = () => Math.round(Math.random()) * 2 - 1
const randomAngle = () => Math.random()*Math.PI*2;
const randomScale = () => Math.random() + 0.5

const randomTransformRotation = () => `rotate(${plusOrMinus()}${randomAngle()}deg) scale(${randomScale()})`
const randomBorderRadius = () => `${randomPercentage()}% ${randomPercentage()}% ${randomPercentage()}% ${randomPercentage()}% / ${randomPercentage()}% ${randomPercentage()}% ${randomPercentage()}% ${randomPercentage()}%`

const Greeting = ({ greetings }) => {

  const [ style, setStyle ] = useState([
    {
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
    }
  ]);

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
        <section className={styles.greeting}>
          <div className={styles.greetingHero}>
            <Img className={styles.greetingHeroFace} fluid={data.oscar.childImageSharp.fluid} alt="Oscar's face" />
            <div className={styles.greetingHeroShapeContainer}>
              <div
                className={classNames(styles.greetingHeroShape, styles.greetingHeroShape__1)}
                style={style[0]}></div>
              <div
                className={classNames(styles.greetingHeroShape, styles.greetingHeroShape__2)}
                style={style[1]}></div>
              <div
                className={classNames(styles.greetingHeroShape, styles.greetingHeroShape__3)}
                style={style[2]}></div>
            </div>
          </div>
          <div className={styles.greetingContainer}>
            <TextLoop interval={4000}>
              {greetings.map((greeting, key) =>
                <h1 className={styles.greetingHeading} key={key}>
                  {greeting.greeting}!&nbsp;
                  <span role="img" className={classNames(styles.greetingEmoji, `greetingEmoji__${greeting.emoji.animation}`)} aria-label={greeting.emoji.label}>
                    {greeting.emoji.symbol}
                  </span>
                </h1>
              )}
            </TextLoop>
            <span className={styles.greetingLead}>I'm Oscar, a passionate product manager who loves creating digital products. Currently CPO / CTO at <a href="https://awardit.com">Awardit</a>.</span>
          </div>
        </section>
      )
    }
  />
  )
}
export default Greeting