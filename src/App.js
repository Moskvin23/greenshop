import HomePage from './pages/HomePage/HomePage';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import ShopPage from './pages/ShopPage/ShopPage';
import BlogsPage from './pages/BlogsPage/BlogsPage';
import PlantCarePage from './pages/PlantCarePage/PlantCarePage';
import LoginPage from './pages/LoginPage/LoginPage';
import BasketPage from './pages/BasketPage/BasketPage';
function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/plantCare" element={<PlantCarePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>
    </div>
  );
}

export default App;
