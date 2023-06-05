import React, { useEffect } from "react"
import Header from "../../components/Common/Header/Header"
import Footer from "../../components/Common/Footer/Footer"
import styles from "./PlantCarePage.module.scss"
import careData from "./PlantCareData"
import replace from "react-string-replace"

const PlantCarePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const insertEmptyParagraphs = (text) => {
    const sentences = text.split(". ")
    const modifiedText = sentences.map((sentence, index) => {
      if ((index + 1) % 2 === 0) {
        return `${sentence}. \n\n`
      }
      return sentence
    })

    return modifiedText.join("")
  }
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>
          Our Top 10 <span>Plant Care</span> Tips
        </h1>
        {careData.map((care) => (
          <div key={care.id}>
            <h2>
              {care.id}. {care.title}
            </h2>
            <p>
              {replace(insertEmptyParagraphs(care.text), /(\n)/g, () => (
                <br />
              ))}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default PlantCarePage
