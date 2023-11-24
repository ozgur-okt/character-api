import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import backBtn from '../assets/back-button.svg'
import styles from '../styles/TopBar.module.scss'

function TopBar() {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className={styles.topbar}>
      <img 
        className={styles.backBtn} 
        src={backBtn} 
        alt="back" 
        onClick={handleBackClick} 
      />
      <img src={logo} alt="logo" height={80} />
    </div>
  )
}

export default TopBar