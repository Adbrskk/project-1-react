import './FirstScreen.css'
import bg from '../../assets/images/hero-bg.png'

function FirstScreen() {
  return (
    <section
      className="first-screen"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="first-screen__container">
        <p className="first-screen__kicker">PLAN YOUR LIFE</p>

        <h1 className="first-screen__title">
          Increase your <span>productivity</span>
        </h1>

        <p className="first-screen__text">
          Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.
        </p>

        <button className="first-screen__play"><img src="../../src/assets/icons/pointner.svg" alt="" /></button>

        <div className="first-screen__dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  )
}

export default FirstScreen
