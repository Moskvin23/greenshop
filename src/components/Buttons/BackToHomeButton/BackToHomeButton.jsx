import React from "react"
import styles from "./BackToHomeButton.module.scss"
import { BiArrowBack } from "react-icons/bi"
import { Link } from "react-router-dom"
const BackToHomeButton = () => {
  return (
    <>
      <Link to="/">
        <a className={`${styles.btn} ${styles.btnGreen}`}>
          <BiArrowBack style={{ width: "24px", height: "24px" }} />
          Back to Home
        </a>
      </Link>
    </>
  )
}

export default BackToHomeButton
