import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory, updateCategoryQuantity } from '../../Redux/slices/categoriesSlice';
import PlantCard from './PlantCard';
import PlantCardSkeleton from './Skeleton';
import styles1 from '../../pages/HomePage/HomePage.module.scss';
import { fetchPlants } from '../../Redux/slices/plantsSlice';

const PlantList = () => {
  const plants = useSelector((state) => state.plants.plants);
  let { status } = useSelector((state) => state.plants);
  const activeCategory = useSelector((state) => state.categories.activeCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchPlants({ activeCategory }));
    };

    fetchData();
  }, [activeCategory, dispatch]);

  return (
    <div className={styles1.listCards}>
      {status === 'error' ? (
        <div>
          <h2>Oops, something went wrong...</h2>
        </div>
      ) : status === 'loading' ? (
        [...new Array(9)].map((_, index) => <PlantCardSkeleton key={index} />)
      ) : (
        plants.map((plant) => (
          <PlantCard
            key={plant.id}
            title={plant.title}
            price={`$${plant.price.toFixed(2)}`}
            image={require(`../../assets/images/imagesForCards/${plant.image}`)}
          />
        ))
      )}
    </div>
  );
};

export default PlantList;
