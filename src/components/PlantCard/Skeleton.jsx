import React from 'react';
import ContentLoader from 'react-content-loader';

const PlantCardSkeleton = (props) => (
  <ContentLoader
    speed={2}
    width={260}
    height={360}
    viewBox="0 0 260 360"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <rect x="0" y="0" rx="0" ry="0" width="360" height="300" />
    <rect x="0" y="310" rx="0" ry="0" width="160" height="17" />
    <rect x="0" y="332" rx="0" ry="0" width="80" height="18" />
  </ContentLoader>
);

export default PlantCardSkeleton;
