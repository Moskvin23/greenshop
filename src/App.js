import HomePage from './pages/HomePage/HomePage';
import styles from './App.module.scss';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
