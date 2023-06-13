import HomePage from "./pages/HomePage/HomePage"
import styles from "./App.module.scss"
import { Route, Routes, useLocation } from "react-router-dom"
import ShopPage from "./pages/ShopPage/ShopPage"
import BlogsPage from "./pages/BlogsPage/BlogsPage"
import PlantCarePage from "./pages/PlantCarePage/PlantCarePage"
import LoginPage from "./pages/LoginPage/LoginPage"
import BasketPage from "./pages/BasketPage/BasketPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import { AnimatePresence, motion } from "framer-motion"

const PageWrapper = ({ children }) => {
  const location = useLocation()

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 0.7 }}>
      {children}
    </motion.div>
  )
}
function App() {
  return (
    <div className={styles.wrapper}>
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          />
          <Route
            path={`${"/shop/*" ? "/shop/*" : "/shop/:title"}`}
            element={
              <PageWrapper>
                <ShopPage />
              </PageWrapper>
            }
          />
          <Route
            path="/blogs"
            element={
              <PageWrapper>
                <BlogsPage />
              </PageWrapper>
            }
          />
          <Route
            path="/plantCare"
            element={
              <PageWrapper>
                <PlantCarePage />
              </PageWrapper>
            }
          />
          <Route
            path="/login"
            element={
              <PageWrapper>
                <LoginPage />
              </PageWrapper>
            }
          />
          <Route
            path="/basket"
            element={
              <PageWrapper>
                <BasketPage />
              </PageWrapper>
            }
          />
          <Route
            path="/*"
            element={
              <PageWrapper>
                <NotFoundPage />
              </PageWrapper>
            }
          />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
