import HomePage from './pages/HomePage/HomePage';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage';
import ShopPage from './pages/ShopPage/ShopPage';

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </div>
  );
}

export default App;
