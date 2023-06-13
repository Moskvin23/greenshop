import React from "react"
import styles from "./OurBlogPosts.module.scss"
import BlogPostCard from "./BlogPostCard"
const OurBlogPosts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <h2>Our Blog Posts</h2>
        <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
      </div>
      <div className={styles.bottomSection}>
        <BlogPostCard />
      </div>
    </div>
  )
}

export default OurBlogPosts
