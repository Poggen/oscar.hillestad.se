import React from "react"
import SocialLinks from "../SocialLinks"

import styles from "./styles.module.scss"

const Footer = () =>
  <footer className={styles.footer}>
    <SocialLinks />
    <span className={styles.footerCopyright}>© {new Date().getFullYear()}</span>
  </footer>

export default Footer