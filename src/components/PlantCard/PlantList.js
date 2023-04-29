import PlantCard from './PlantCard';
import styles1 from '../../pages/HomePage/HomePage.module.scss';
import { useEffect, useState } from 'react';

const PlantList = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('https://644c22f44bdbc0cc3aa333ba.mockapi.io/GreenshopAPI/Plants')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setPlants(arr);
      });
  }, []);

  return (
    <div className={styles1.listCards}>
      {plants.map((plant, index) => (
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
