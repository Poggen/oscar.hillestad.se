import React from "react"
import classNames from "classnames"

import SocialLinks from "../SocialLinks"

import styles from "./styles.scss"

const Footer = () => 
  <footer className="footer">
    <SocialLinks />
    <span className="footer__copyright">© {new Date().getFullYear()}</span>
  </footer>

export default Footer