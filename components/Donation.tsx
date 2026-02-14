'use client'

export default function Donation() {
  const handleDonate = () => {
    const convert = encodeURIComponent("*182*1*2*0732506821#")
    window.location.href = "tel:" + convert
  }

  const cards = [
    {
      title: "Train Leaders",
      description: "Workshops, debates & mentorship programs that build confidence."
    },
    {
      title: "Empower Schools",
      description: "Leadership sessions at secondary schools."
    },
    {
      title: "Community Impact",
      description: "Environmental and awareness campaigns for stronger communities."
    },
    {
      title: "Unlock Potential",
      description: "Resources for underrepresented youth to thrive."
    }
  ]

  return (
    <section className="donation-cards">
      <h2>Support Our Mission</h2>
      <p className="subtitle">Your contribution helps us empower young leaders.</p>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>

      <button 
        onClick={handleDonate} 
        className="donate-btn center"
      >
        Donate Now
      </button>
    </section>
  )
}
