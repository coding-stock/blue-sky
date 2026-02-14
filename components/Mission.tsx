export default function Mission() {
  const missions = [
    { num: "01", text: "Drive positive change in their community" },
    { num: "02", text: "Skills and confidence to pursue their passions and interests" },
    { num: "03", text: "Develop a network of like-minded peers and mentors" },
    { num: "04", text: "Leadership skills like communication, problem solving and network" }
  ]

  return (
    <section className="skills">
      <div className="skills_text">
        <div className="text">
          <h3>Our mission</h3>
          <h1>Empower youth to lead with confidence.</h1>
        </div>
      </div>
      <div className="skills_boxes">
        {missions.map((mission) => (
          <div className="box" key={mission.num}>
            <h1>{mission.num}</h1>
            <h1>{mission.text}</h1>
          </div>
        ))}
      </div>
    </section>
  )
}
