import './Partners.css'

import bitbucket from '../../assets/icons/bitbucket.svg'
import watch from '../../assets/icons/watch.svg'
import facebook from '../../assets/icons/facebook-partner.svg'
import atlassian from '../../assets/icons/atlassian.svg'
import audi from '../../assets/icons/audi.svg'

const brands = [
  { src: bitbucket, alt: 'Bitbucket' },
  { src: watch, alt: 'Apple Watch' },
  { src: facebook, alt: 'Facebook' },
  { src: atlassian, alt: 'Atlassian' },
  { src: audi, alt: 'Audi' },
]

function Partners() {
  return (
    <section className="partners">
      <div className="partners__container">
        {brands.map((b) => (
          <img
            key={b.alt}
            className="partners__logo"
            src={b.src}
            alt={b.alt}
          />
        ))}
      </div>
    </section>
  )
}

export default Partners
