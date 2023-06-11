import React, { useState } from "react"
import styles from "./ShopPage.module.scss"
import Header from "../../components/Common/Header/Header"
import Footer from "../../components/Common/Footer/Footer"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineHeart, AiOutlineTwitter } from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"
import { CiMail } from "react-icons/ci"
import { useSelector } from "react-redux"
import { selectedPlantSelector } from "../../Redux/slices/plantsSlice"
import { useEffect } from "react"
import BuyNowButton from "../../components/Buttons/BuyNowButton/BuyNowButton"
import AddToCartButton from "../../components/Buttons/AddToCartButton/AddToCartButton"
const items = [
  { id: 1, name: "Product Description" },
  { id: 2, name: "Reviews" },
]

const ShopPage = () => {
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1)
  const [activeCategoryId, setActiveCategoryId] = useState(items[0])
  const selectedPlant = useSelector(selectedPlantSelector)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState(selectedPlant.image)
  const [quantity, setQuantity] = useState(1)

  const handleClick = (items) => {
    setActiveCategoryId(items)
  }
  const handleImageClick = (image, index) => {
    setSelectedImage(image)
    setSelectedImageIndex(index)
  }

  const handleSizeClick = (index) => {
    setSelectedSizeIndex(index)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.plantOverview}>
          <div className={styles.leftSection}>
            <div className={styles.col1}>
              {selectedPlant.additionalImages.map((image, index) => (
                <div key={index}>
                  <img
                    src={require(`../../assets/images/imagesForCards/${image}`)}
                    alt="image"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImageClick(image, index)}
                    className={selectedImageIndex === index ? styles.selectedImageIndex : ""}
                  />
                </div>
              ))}
            </div>
            <div className={styles.col2}>
              <img
                src={require(`../../assets/images/imagesForCards/${selectedImage}`)}
                alt="image"
              />
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.topOfRightSection}>
              <h1>{selectedPlant.title}</h1>
              <div className={styles.priceAndReview}>
                <p className={styles.price}>{`$${selectedPlant.price.toFixed(2)}`}</p>
              </div>
            </div>
            <div className={styles.borderForRightSection}></div>
            <h5 className={styles.shortDescription}>Short Description:</h5>
            <p>{selectedPlant.shortDescription}</p>
            <h5 className={styles.size}>Size:</h5>
            <div className={styles.sizeIndex}>
              {selectedPlant.size.map((size, index) => (
                <span
                  key={index}
                  onClick={() => handleSizeClick(index)}
                  className={`${styles.selectedSizeIndex} ${
                    selectedSizeIndex === index ? styles.selectedSizeIndexActive : ""
                  }`}>
                  {size}
                  {index !== selectedPlant.size.length - 1 && " "}
                </span>
              ))}
            </div>
            <div className={styles.sectionWithCountersAndButtons}>
              <div className={styles.counters}>
                <button
                  className={styles.incrementAndDecrement}
                  onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className={styles.incrementAndDecrement}
                  onClick={() => setQuantity((prev) => prev + 1)}>
                  +
                </button>
              </div>
              <BuyNowButton />
              <AddToCartButton />
              <button className={styles.likeButton}>
                <AiOutlineHeart
                  style={{
                    width: "22px",
                    height: "22px",
                  }}
                />
              </button>
            </div>
            <div className={styles.lastSectionOfPartOverview}>
              <p>
                Categories: <span>{selectedPlant.type}</span>
              </p>
              <p>
                Tags:{" "}
                <span className={styles.tags}>
                  {selectedPlant.tags.map((tag, index) => (
                    <span key={index}>
                      {tag.charAt(0).toUpperCase() + tag.slice(1)}
                      {index !== selectedPlant.tags.length - 1 && ", "}
                    </span>
                  ))}
                </span>
              </p>
              <div className={styles.socialMediaIconsAndShare}>
                <h5 className={styles.shareThisProducts}>Share this products: </h5>
                <div className={styles.socialMediaIcons}>
                  <FaFacebookF />
                  <AiOutlineTwitter />
                  <FaLinkedinIn />
                  <CiMail />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.plantItems}>
          <div className={styles.items}>
            <ul>
              {items.map((item) => (
                <li
                  key={item.id}
                  className={item === activeCategoryId ? styles.active : ""}
                  onClick={() => handleClick(item)}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.border}></div>
        <div className={styles.productDescription}>
          <p>
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off
            the ground. The ceramic cylinder planters come with a wooden stand to help elevate your
            plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero vulputate rutrum.
            Morbi ornare lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
            cursus eu, suscipit id nulla.
            <br />
            <br />
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem, quis fermentum
            turpis eros eget velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce
            aliquam, purus eget sagittis vulputate, sapien libero hendrerit est, sed commodo augue
            nisi non neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor,
            lorem et placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis mi.
            Cras neque metus, consequat et blandit et, luctus a nunc. Etiam gravida vehicula tellus,
            in imperdiet ligula euismod eget. The ceramic cylinder planters come with a wooden stand
            to help elevate your plants off the ground.
          </p>
          <h5 className={styles.titleForProductDescription}>Living Room:</h5>
          <p>
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off
            the ground. The ceramic cylinder planters come with a wooden stand to help elevate your
            plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h5 className={styles.titleForProductDescription}>Dining Room:</h5>
          <p>
            The benefits of houseplants are endless. In addition to cleaning the air of harmful
            toxins, they can help to improve your mood, reduce stress and provide you with better
            sleep. Fill every room of your home with houseplants and their restorative qualities
            will improve your life.
          </p>
          <h5 className={styles.titleForProductDescription}>Office:</h5>
          <p>
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off
            the ground. The ceramic cylinder planters come with a wooden stand to help elevate your
            plants off the ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ShopPage
