import { Link } from 'react-router-dom'
import { LocationCardProps } from '../types/locations'
import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'
import styles from '../styles/components/LocationCard.module.scss'

const LocationCard: React.FC<LocationCardProps> = ({ location }) => {
  const { id, name, type, dimension, residents } = location
  const info = [
    { label: 'Name: ', value: name },
    { label: 'Type: ', value: type },
    { label: 'Dimension:', value: dimension },
    { label: 'Resident count:', value: residents.length },
  ]

  return (
    <Link to={`/locations/${id}`} key={id} className={styles.location}>
      <div className={styles.information}>
        <div className={styles.keys}>
          {info.map((item, index) => (
            <p key={index}>{item.label}</p>
          ))}
        </div>
        <div className={styles.values}>
          {info.map((item, index) => (
            <p key={index}>{item.value}</p>
          ))}
        </div>
      </div>
      <RightArrow className={styles.rightArrow} />
    </Link>
  )
}

export default LocationCard