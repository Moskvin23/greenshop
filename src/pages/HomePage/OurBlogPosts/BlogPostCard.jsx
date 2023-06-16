import React from "react"
import styles from "./BlogPostCard.module.scss"
import pic from "../../../assets/images/02.png"
import plant_1 from "../../../assets/images/Plant_1.jpg"
import plant_2 from "../../../assets/images/Plant_2.jpg"
import plant_3 from "../../../assets/images/Plant_3.jpg"
import plant_4 from "../../../assets/images/Plant_4.jpg"

import { HiOutlineArrowRight } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
const blogs = [
  {
    id: 1,
    title: "Top 10 Succulents for Your Home",
    shortDescription: "Best in hanging baskets. Prefers medium to high light.",
    image: plant_1,
  },
  {
    id: 2,
    title: "How To Create A Plant Loving Home",
    shortDescription: "You want to design an urban jungle for your new Home?",
    image: plant_2,
  },
  {
    id: 3,
    title: "3 Beautifully Scented Plants for the Kitchen",
    shortDescription: "Some plants can pull triple duty for the senses.",
    image: plant_3,
  },
  {
    id: 4,
    title: "The zen of houseplants ",
    shortDescription: "The houseplant blogosphere can be a manic place.",
    image: plant_4,
  },
]
const BlogPostCard = () => {
  const navigate = useNavigate()
  const handleReadMoreClick = () => {
    navigate("/blogs")
  }
  return (
    <>
      {blogs.map((blog) => (
        <div key={blog.id} className={styles.container} onClick={handleReadMoreClick}>
          <div className={styles.cardImage} style={{ backgroundImage: `url(${blog.image})` }}></div>
          <div className={styles.cardContent}>
            <h2>{blog.title}</h2>
            <p>{blog.shortDescription}</p>
            <a className={styles.readMore}>
              Read More
              <HiOutlineArrowRight style={{ marginTop: "2px" }} />
            </a>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogPostCard
