import PlantCard from './PlantCard';
import styles1 from '../../pages/HomePage/HomePage.module.scss';
import { useEffect, useState } from 'react';
import PlantCardSkeleton from './Skeleton';
const PlantList = () => {
  const [plants, setPlants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch('https://644c22f44bdbc0cc3aa333ba.mockapi.io/GreenshopAPI/Plants')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPlants(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styles1.listCards}>
      {isLoading
        ? [...new Array(9)].map((_, index) => <PlantCardSkeleton key={index} />)
        : plants.map((plant, index) => (
            <PlantCard
              key={index}
              title={plant.title}
              price={`$${plant.price.toFixed(2)}`}
              image={require(`../../assets/images/imagesForCards/${plant.image}`)}
            />
          ))}
    </div>
  );
};
export default PlantList;
