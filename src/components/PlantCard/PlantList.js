import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { activeCategorySelector } from '../../Redux/slices/categoriesSlice';
import PlantCard from './PlantCard';
import PlantCardSkeleton from './Skeleton';
import styles1 from '../../pages/HomePage/HomePage.module.scss';
import { fetchPlants, plantsSelector } from '../../Redux/slices/plantsSlice';

const PlantList = () => {
  const plants = useSelector(plantsSelector);
  let { status } = useSelector((state) => state.plants);
  const activeCategory = useSelector(activeCategorySelector);
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
      ) : plants.length === 0 ? (
        <div>
          <h2>There are currently no plants from this category</h2>
        </div>
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
