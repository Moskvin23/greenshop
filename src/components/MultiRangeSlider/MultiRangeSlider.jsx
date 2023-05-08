import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styles from './MultiRangeSlider.module.scss';
const myData = [
  {
    id: 1,
    title: 'Barberton Daisy',
    price: 119,
    image: 'Plant1.png',
  },
  {
    id: 2,
    title: 'Angel Wing Begonia',
    price: 169,
    image: 'Plant2.png',
  },
  {
    id: 3,
    title: 'African Violet',
    price: 199,
    image: 'Plant3.png',
  },
  {
    id: 4,
    title: 'Beach Spider Lily',
    price: 129,
    image: 'Plant4.png',
  },
  {
    id: 5,
    title: 'Blushing Bromeliad',
    price: 139,
    image: 'Plant5.png',
  },
  {
    id: 6,
    title: 'Aluminum Plant',
    price: 179,
    image: 'Plant6.png',
  },
  {
    id: 7,
    title: 'Bird`s Nest Fern',
    price: 99,
    image: 'Plant7.png',
  },
  {
    id: 8,
    title: 'Broadleaf Lady Palm',
    price: 59,
    image: 'Plant8.png',
  },
  {
    id: 9,
    title: 'Chinese Evergreen',
    price: 39,
    image: 'Plant9.png',
  },
];

const MultiRangeSlider = ({ min, max, onChange }) => {
  const priceValues = myData.map((item) => item.price);
  const initialMinVal = Math.min(...priceValues);
  const initialMaxVal = Math.max(...priceValues);

  const [minVal, setMinVal] = useState(initialMinVal);
  const [maxVal, setMaxVal] = useState(initialMaxVal);

  const minValRef = useRef(minVal);
  const maxValRef = useRef(maxVal);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className={styles.container}>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`${styles.thumb} ${styles.thumbLeft}`}
        style={{ zIndex: minVal > max - 100 && '5' }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={`${styles.thumb} ${styles.thumbRight}`}
      />

      <div className={styles.slider}>
        <div className={styles.sliderTrack} />
        <div ref={range} className={styles.sliderRange} />
        <div className={styles.sliderLeftValue}>
          <a className={styles.price}>Price:</a>${minVal}
        </div>

        <div className={styles.sliderRightValue}>
          <span>-</span>${maxVal}
        </div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MultiRangeSlider;
