import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../redux/store'

import styles from '../styles/Locations.module.scss'
import { Location } from '../types/locations'

import rightArrow from '../assets/right-arrow.svg'

const Locations: React.FC = () => {
  const locations = useSelector((state: RootState) => state.locations.locations)
  const [currentPage, setCurrentPage] = useState(1);
  const locationsPerPage = 4;

  // Get current locations
  const indexOfLastLocation = currentPage * locationsPerPage;
  const indexOfFirstLocation = indexOfLastLocation - locationsPerPage;
  const currentLocations = locations.slice(indexOfFirstLocation, indexOfLastLocation);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  const totalPages = Math.ceil(locations.length / locationsPerPage);

  return (
    <div className={styles.container}>
      <div className={styles.locations}>
        {currentLocations.map((location: Location) => (
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
        ))}
      </div>
      <div className={styles.pagination}>
        <button onClick={prevPage} disabled={currentPage === 1}>Prev</button>
        {currentPage > 2 && <button className={styles.pageNumber} onClick={() => paginate(1)}>1</button>}
        {currentPage > 3 && <span>...</span>}
        {currentPage > 1 && <button className={styles.pageNumber} onClick={() => paginate(currentPage - 1)}>{currentPage - 1}</button>}
        <button className={styles.currentPageNumber}>{currentPage}</button>
        {currentPage < totalPages && <button className={styles.pageNumber} onClick={() => paginate(currentPage + 1)}>{currentPage + 1}</button>}
        {currentPage < totalPages - 2 && <span>...</span>}
        {currentPage < totalPages - 1 && <button className={styles.pageNumber} onClick={() => paginate(totalPages)}>{totalPages}</button>}
        <button onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  )
}

export default Locations