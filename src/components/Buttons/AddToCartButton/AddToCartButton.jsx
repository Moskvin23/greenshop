import React from "react"
import styles from "./AddToCartButton.module.scss"
const AddToCartButton = () => {
  return <a className={`${styles.btn} ${styles.btnGreen}`}>ADD TO CART</a>
}

export default AddToCartButton
