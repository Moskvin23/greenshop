import React, { useState } from 'react';
import { ReactComponent as Basket } from '../../../assets/icons/ShoppingTrolley.svg';
const BasketButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const scale = isHovered ? 1.2 : 1;

  return (
    <>
      <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Basket
          fill="currentColor"
          style={{
            cursor: 'pointer',
            display: 'inline-block',
            marginTop: '7px',
            transform: `scale(${scale})`,
            transition: 'transform 0.3s ease-in-out',
          }}
          onMouseEnter={(e) => e.currentTarget.firstChild.setAttribute('fill', '#46a358')}
          onMouseLeave={(e) => e.currentTarget.firstChild.setAttribute('fill', 'currentColor')}
        />
      </a>
    </>
  );
};

export default BasketButton;
