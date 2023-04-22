import React from 'react';
import Header from '../../components/Common/Header/Header';
import Slider from '../../components/Home/Slider/Slider';
import styles from './HomePage.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import FilterPlants from '../../components/FilterPlants/FilterPlants';
import SortingCards from '../../components/SortingCards/SortingCards';
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import { useState } from 'react';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const [totalItems] = useState(16);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
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
          <div className={styles.paginationSection}>
            <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} paginate={paginate} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
