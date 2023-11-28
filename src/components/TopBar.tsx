import { useNavigate, useLocation, Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { ReactComponent as BackButton } from '../assets/back-button.svg'
import styles from '../styles/components/TopBar.module.scss'

function TopBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <div className={styles.topbar}>
      {location.pathname !== "/" && <BackButton className={styles.backBtn} onClick={handleBackClick} />}
      <Link to="/" >
        <img className={styles.logo} src={logo} alt="logo" />
      </Link>
    </div>
  )
}

export default TopBar