import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import {ReactComponent as BackButton} from '../assets/back-button.svg'
import styles from '../styles/components/TopBar.module.scss'

function TopBar() {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <div className={styles.topbar}>
      <BackButton className={styles.backBtn} onClick={handleBackClick} />
      <img className={styles.logo} src={logo} alt="logo" />
    </div>
  )
}

export default TopBar