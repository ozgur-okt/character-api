import logo from '../assets/logo.png'
import backBtn from '../assets/back-button.svg'
import styles from '../styles/TopBar.module.scss'

function TopBar() {
  return (
    <div className={styles.topbar}>
      <img className={styles.backBtn} src={backBtn} alt="back" height={80} />
      <img src={logo} alt="logo" height={80} />
    </div>
  )
}

export default TopBar