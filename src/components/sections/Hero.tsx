import HeroVisual from './HeroVisual'
export default function Hero() {
  return (
    <section id="product" className="hero-section">
      <div className="hero-copy">
        <p className="hero-eyebrow">GTM AGENTS / FOR HOME SERVICE TEAMS</p>
        <h1>
          Your next lead.
          <br />
          <span className="text-gradient">Already moving.</span>
        </h1>
        <p className="hero-summary">
          Your AI sales team never sleeps. Explore a connected workflow from the first inquiry to
          the next booking.
        </p>
        <div className="hero-actions">
          <a className="primary-link" href="#solution">
            Explore the workflow <span aria-hidden="true">↗</span>
          </a>
          <a href="#pricing">Compare plans</a>
        </div>
        <p className="hero-note">
          Interactive product concept · Four stages, built around your team
        </p>
      </div>
      <HeroVisual />
    </section>
  )
}
