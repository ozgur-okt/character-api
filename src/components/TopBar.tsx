import logo from '../assets/logo.png'
import backBtn from '../assets/back-button.svg'
import '../styles/TopBar.scss'

function TopBar() {
  return (
    <div className='topbar'>
      <img className='back-btn' src={backBtn} alt="back" height={80} />
      <img className='logo' src={logo} alt="logo" height={80} />
    </div>
  )
}

export default TopBar