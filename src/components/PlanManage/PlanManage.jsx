import './PlanManage.css'
import mockup from '../../assets/images/plan-manage.png'

function PlanManage() {
  return (
    <section className="plan">
      <div className="plan__container">
        <div className="plan__left">
          <p className="plan__kicker">DESKTOP AND MOBILE APP</p>

          <h2 className="plan__title">
            Plan and manage <span>your life</span>
          </h2>

          <p className="plan__text">
            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.
            Usu atqui laudem an, insolens gubergren similique est cu.
            Et vel modus congue vituperata. Solum patrioque no sea.
            Mea ex malis mollis oporteat. Eum an expetenda consequat.
          </p>

          <div className="plan__actions">
            <button className="plan__btn plan__btn--primary">
              View video <span className="plan__arrow">▶</span>
            </button>

            <button className="plan__btn plan__btn--ghost">
              See features
            </button>
          </div>
        </div>

        <div className="plan__right">
          <img className="plan__img" src={mockup} alt="App screens" />
        </div>
      </div>
    </section>
  )
}

export default PlanManage
