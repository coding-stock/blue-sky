import Image from 'next/image'

export default function About() {
  const values = [
    {
      emoji: "🏦",
      title: "Leadership Development:",
      description: "Building communication, teamwork, problem-solving, and decision-making skills."
    },
    {
      emoji: "🤝",
      title: "Community Service:",
      description: "Encouraging youth to give back through volunteer work and impactful projects."
    },
    {
      emoji: "🧑‍🏫",
      title: "Mentorship & Networking:",
      description: "Connecting participants with experienced mentors, alumni, and professionals."
    },
    {
      emoji: "🔗",
      title: "Collaboration:",
      description: "Working hand in hand with schools, educators, and community members to create lasting impact."
    }
  ]

  const timeline = [
    {
      date: "July 2024",
      datetime: "2024-07",
      title: "Founding",
      description: "BS Leadership was founded in Kigali by Kaitale Hadadi and Mulumba Sadam Kaitale with a vision to create spaces where youth can discover and act on their leadership potential."
    },
    {
      date: "Oct 2024",
      datetime: "2024-10",
      title: "School Debates",
      description: "We invested in empowering debaters, sharpening communication, critical thinking, and confidence through structured debates and mentorship."
    },
    {
      date: "Mar 2025",
      datetime: "2025-03",
      title: "Community Campaigns",
      description: "We ran sensitization campaigns in the Ndera community focused on environmental conservation, inspiring collective responsibility for a sustainable future."
    }
  ]

  return (
    <section className="company_info">
      <Image id="curve" src="/assets/waves.svg" alt="Wave" width={1920} height={200} />
      <section>
        <article className="about">
          <h1>About us</h1>
          <p>
            Blue Sky Youth Leadership Program (BS Leadership) is a community-driven initiative founded in Kigali, Rwanda, 
            in July 2024 by two people; Kaitale Hadadi and Mulumba Sadam Kaitale with a mission to empower young leaders 
            to create positive change in their communities. We believe that true leadership begins with knowledge, service, 
            and collaboration.
          </p>
          <p>
            Through a blend of workshops, mentorship, debates, project-based learning, and community engagement, we equip 
            young people with the skills, networks, and confidence they need to become impactful leaders and change-makers.
          </p>
          <p>
            We proudly collaborate and partner with schools, community organizations, and local leaders in Kigali and beyond 
            to provide opportunities for youth to grow and thrive. Our partnerships ensure that participants not only gain 
            knowledge but also put it into action through volunteer work, community projects, and meaningful connections 
            with mentors and peers.
          </p>
        </article>

        <section className="standfor">
          <h1>What we stand for</h1>
          <article className="standfor_container">
            {values.map((value, index) => (
              <div className="box" key={index}>
                <span>{value.emoji}</span>
                <b>{value.title}</b>
                <p>{value.description}</p>
              </div>
            ))}
          </article>
        </section>

        <article className="standfor">
          <h1>Our Journey</h1>
          <ul className="timeline">
            {timeline.map((event, index) => (
              <li key={index}>
                <time dateTime={event.datetime}>{event.date}</time>
                <h4>{event.title}</h4>
                <p>{event.description}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  )
}
