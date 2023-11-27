import { ReactComponent as RightArrow } from '../assets/arrow-right.svg'
import { ReactComponent as LeftArrow } from '../assets/arrow-left.svg'
import styles from '../styles/Pagination.module.scss'
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentLocations } from '../redux/locations/actions';
import { setCurrentCharacters } from '../redux/characters/actions';

function Pagination(props: { items: Array<any>, itemsPerPage: number, paginationFor: string }) {

  const dispatch = useDispatch()
  const { items, itemsPerPage, paginationFor } = props

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    if (paginationFor === 'locations') {
      dispatch(setCurrentLocations(currentItems))
    } else if (paginationFor === 'characters') {
      dispatch(setCurrentCharacters(currentItems))
    }
  }, [dispatch, currentPage, items, itemsPerPage, paginationFor])


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => prev + 1);
  const prevPage = () => setCurrentPage(prev => prev - 1);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  return (
    <div className={styles.pagination}>
      <div>Pagination</div>
      <button className={styles.previous} onClick={prevPage} disabled={currentPage === 1}><LeftArrow className={currentPage === 1 ? styles.arrowDisabled : styles.arrow} /></button>
      {currentPage > 2 && <button className={styles.pageNumber} onClick={() => paginate(1)}>1</button>}
      {currentPage > 3 && <span>...</span>}
      {currentPage > 1 && <button className={styles.pageNumber} onClick={() => paginate(currentPage - 1)}>{currentPage - 1}</button>}
      <button className={styles.currentPageNumber}>{currentPage}</button>
      {currentPage < totalPages && <button className={styles.pageNumber} onClick={() => paginate(currentPage + 1)}>{currentPage + 1}</button>}
      {currentPage < totalPages - 2 && <span>...</span>}
      {currentPage < totalPages - 1 && <button className={styles.pageNumber} onClick={() => paginate(totalPages)}>{totalPages}</button>}
      <button className={styles.next} onClick={nextPage} disabled={currentPage === totalPages}><RightArrow className={currentPage === totalPages ? styles.arrowDisabled : styles.arrow} /></button>
    </div>
  )
}

export default Pagination