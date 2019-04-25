import React from "react"
import classNames from "classnames"

import styles from "./styles.scss"

import Instagram from "../../../assets/icons/instagram.svg"
import Facebook from "../../../assets/icons/facebook.svg"
import LinkedIn from "../../../assets/icons/linkedin.svg"
import Email from "../../../assets/icons/email.svg"
import Twitter from "../../../assets/icons/twitter.svg"
import Github from "../../../assets/icons/github.svg"

const links = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "http://instagram.com/oscarhillestad",
  },
  {
    name: "LinkedIn",
    icon: LinkedIn,
    url: "https://www.linkedin.com/in/oscarhillestad"
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://www.facebook.com/Poggen"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/poggn"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/poggen"
  },
  {
    name: "Email",
    icon: Email,
    url: "mailto:oscar@hillestad.se"
  }
]

const SocialLinks = () => 
<ul className="SocialLinks">
  {links.map((link, key) => 
    <li key={key} className="SocialLinks__item">
      <a href={link.url}>
        <img className="SocialLinks__icon" src={link.icon} alt={link.name} />
      </a>
    </li>
  )}
</ul>

export default SocialLinks