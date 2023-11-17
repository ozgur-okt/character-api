import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';

import styles from '../styles/Locations.module.scss'
import { Location } from '../types/locations';

const Locations: React.FC = () => {
  const locations = useSelector((state: RootState) => state.locations.locations);

  return (
    <div className={styles.container}>
      {locations.map((location: Location) => (
        <Link to={`/locations/${location.id}`} key={location.id} className={styles.location}>
          <p>Name: {location.name}</p>
          <p>Type: {location.type}</p>
          <p>Dimension: {location.dimension}</p>
          <p>Resident count: {location.residents.length}</p>
        </Link>
      ))}
    </div>
  );
};

export default Locations;