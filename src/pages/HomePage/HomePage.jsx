import React from 'react';
import Header from '../../components/Common/Header/Header';
import Banner from './BannerPart/Banner';
import styles from './HomePage.module.scss';
import Sidebar from '../../components/Sidebar/Sidebar';
import FilterPlants from '../../components/FilterPlants/FilterPlants';
import SortingCards from '../../components/SortingCards/SortingCards';
import PlantCard from '../../components/PlantCard/PlantCard';
import Pagination from '../../components/Pagination/Pagination';
import { useState } from 'react';
import PromotionCard from '../../components/PromotionCard/PromotionCard';
import { setCategoryId } from '../../Redux/slices/FilterSlice';
import OurBlogPosts from './OurBlogPosts/OurBlogPosts';
import Footer from '../../components/Common/Footer/Footer';
import { useSelector, useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch(setCategoryId());
  const categoryId = useSelector((state) => state.filterSlice.categoryId);

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
      <Banner />
      <div className={styles.middlePArtOfPage}>
        <Sidebar />
        <div className={styles.filterPlantsWithSortBy}>
          <div className={styles.filterPlants}>
            <FilterPlants />
            <SortingCards />
          </div>
          <div className={styles.listCards}>
            <PlantCard />
            <PlantCard />
            <PlantCard />
            <PlantCard />
            <PlantCard />
            <PlantCard />
            <PlantCard />
            <PlantCard />
            <PlantCard />
          </div>
          <div className={styles.paginationSection}>
            <Pagination itemsPerPage={itemsPerPage} totalItems={totalItems} paginate={paginate} />
          </div>
        </div>
      </div>
      <div className={styles.sectionWithPromotionCards}>
        <PromotionCard />
        <PromotionCard />
      </div>
      <div className={styles.sectionWithBlogPosts}>
        <OurBlogPosts />
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
