import React from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { Location } from '../types/locations'
import Pagination from '../components/Pagination'
import LocationCard from '../components/LocationCard' 
import styles from '../styles/pages/Locations.module.scss'

const Locations: React.FC = () => {
  const locations = useSelector((state: RootState) => state.locations.locations)
  const currentLocations = useSelector((state: RootState) => state.locations.currentLocations)
  const isLoading = useSelector((state: RootState) => state.locations.loading)
  const locationsPerPage = 3

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.locations}>
        {(currentLocations || []).map((location: Location) => (
          <LocationCard location={location} key={location.id} />
        ))}
      </div>
      <Pagination items={locations} paginationFor='locations' itemsPerPage={locationsPerPage} />
    </div>
  )
}

export default Locations