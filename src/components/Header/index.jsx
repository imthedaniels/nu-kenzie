import logoDark from '../../img/logo-dark.svg'
import './style.css'

const Header = ({ setIsLoggedIn }) => {
  return (
    <header>
      <img id='header__logo-dark' src={logoDark} alt='Dark Logo Version' />
      <button id='btnStart' onClick={() => setIsLoggedIn(false)}>
        Início
      </button>
    </header>
  )
}

export default Header
