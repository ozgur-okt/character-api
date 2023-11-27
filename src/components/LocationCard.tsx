import { Link } from 'react-router-dom';
import { Location } from '../types/locations';
import rightArrow from '../assets/arrow-right.svg';
import styles from '../styles/components/LocationCard.module.scss';

interface LocationCardProps {
  location: Location;
}

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  return (
    <Link to={`/locations/${location.id}`} key={location.id} className={styles.location}>
      <div className={styles.information}>
        <div className={styles.keys}>
          <p>Name: </p>
          <p>Type: </p>
          <p>Dimension:</p>
          <p>Resident count:</p>
        </div>
        <div>
          <p>{location.name}</p>
          <p>{location.type}</p>
          <p>{location.dimension}</p>
          <p>{location.residents.length}</p>
        </div>
      </div>
      <img src={rightArrow} alt="right arrow" />
    </Link>
  );
};

export default LocationCard;