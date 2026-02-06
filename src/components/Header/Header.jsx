import './Header.css'
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'
import telegram from '../../assets/icons/telegram.svg'
import mm from '../../assets/icons/mm.svg'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo"><img src="../../src/assets/icons/logo.svg" alt="Logo" /></div>

        <nav className="header__nav">
          <a className="header__link" href="#">Home</a>
          <a className="header__link" href="#">Blog</a>
          <a className="header__link" href="#">Features</a>
          <a className="header__link" href="#">Pricing</a>
          <a className="header__link" href="#">Documentation</a>
        </nav>

        <div className="header__right">
          <div className="header__socials">
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={telegram} alt="Telegram" />
            <img src={mm} alt="MM" />
          </div>

          <button className="header__btn">Get started</button>
        </div>
      </div>
    </header>
  )
}

export default Header
