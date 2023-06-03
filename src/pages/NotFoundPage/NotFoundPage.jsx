import React from "react"
import styles from "./NotFoundPage.module.scss"
import BackToHomeButton from "../../components/Buttons/BackToHomeButton/BackToHomeButton"
const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1>
        Opps, <span>something</span>
        <span>went</span> wrong...
      </h1>
      <BackToHomeButton />
    </div>
  )
}

export default NotFoundPage
