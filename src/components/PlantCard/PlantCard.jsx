import React, { useState } from "react"
import styles from "./PlantCard.module.scss"

import icon1 from "../../assets/icons/iconsForCard/backgroundForIcons.png"
import basket from "../../assets/icons/iconsForCard/basket.svg"
import like from "../../assets/icons/iconsForCard/like.svg"
import search from "../../assets/icons/iconsForCard/search.svg"
import { useNavigate } from "react-router-dom"
import { setSelectedPlant } from "../../Redux/slices/plantsSlice"
import { useDispatch } from "react-redux"

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleBasketClick = () => {
    navigate("/basket")
  }
  const handleShopClick = () => {
    navigate(`/shop/${plant.title}`)
  }
  const [isImageHovered, setIsImageHovered] = useState(false)
  const handleCardClick = () => {
    dispatch(setSelectedPlant(plant))
  }
  const handleSearchHover = () => {
    setIsImageHovered(true)
  }

  const handleSearchLeave = () => {
    setIsImageHovered(false)
  }
  return (
    <>
      <div onClick={handleCardClick}>
        <div className={styles.cardContainer}>
          <div
            className={`${styles.cardWithImage} ${isImageHovered ? styles.hovered : ""}`}
            onMouseEnter={handleSearchHover}
            onMouseLeave={handleSearchLeave}>
            <img
              alt="somePicture"
              onClick={handleShopClick}
              src={require(`../../assets/images/imagesForCards/${plant.image}`)}
              className={styles.plantPicture}
            />
            <div className={styles.backgroundForIcons}>
              <img src={icon1} alt="icon1" className={styles.background} />
              <img src={icon1} alt="icon1" className={styles.background} />
              <img src={icon1} alt="icon1" className={styles.background} />
            </div>
            <div className={styles.icons}>
              <img src={basket} alt="icon1" className={styles.icon} onClick={handleBasketClick} />
              <img src={like} alt="icon1" className={styles.icon2} />
              <img src={search} alt="icon1" className={styles.icon3} />
            </div>
          </div>
          <div className={styles.cardTitleWithPrice}>
            <h2 className={styles.title}>{plant.title}</h2>
            <p className={styles.price}>{`$${plant.price.toFixed(2)}`}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlantCard
