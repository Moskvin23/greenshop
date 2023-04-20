import React from 'react';
import Header from '../../components/Common/Header/Header';
import Slider from '../../components/Home/Slider/Slider';
import styles from './HomePage.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import FilterPlants from '../../components/FilterPlants/FilterPlants';
import SortingCards from '../../components/SortingCards/SortingCards';
import Card from '../../components/Card/Card';

const HomePage = () => {
  return (
    <>
      <Header />
      <Slider />
      <div className={styles.middlePArtOfPage}>
        <Sidebar />
        <div className={styles.filterPlantsWithSortBy}>
          <div className={styles.filterPlants}>
            <FilterPlants />
            <SortingCards />
          </div>
          <div className={styles.listCards}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
