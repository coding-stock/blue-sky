import Image from 'next/image'
import { lazy } from 'react'
import Loading from './Loading'

export default function Team() {
  const teamMembers = [
    {
      name: "Kaitale Hadadi",
      position: "Founder",
      quote: "True leadership is earned through respect, sustained by teamwork, guided by knowledge, and measured by the legacy it leaves behind.",
      image: "/assets/hadadi.JPG"
    },
    {
      name: "Sadam Kaitale Mulumba",
      position: "Co Founder",
      quote: "Greatness is never achieved alone; it grows where people honor each other, share strengths, and commit to a vision larger than themselves.",
      image: "/assets/sadam.jpg"
    },
    {
      name: "Nkurunziza Ronaldo",
      position: "Executive Director",
      quote: "empowerment of young people is to innovate, collaborate, and make a lasting impact, while promoting inclusivity, diversity, and social responsibility.",
      image: "/assets/dude.jpg"
    }
  ]

  return (
    <section className="team">
      <div className="team_title">
        <p>COMPANY EXECUTIVES</p>
        <h1>Meet our team</h1>
      </div>
      <div className="founders">
        {teamMembers.map((member, index) => (
          <div key={index} className={index === 0 ? "hadadi" : "sadam"}>
            <Image 
              src={member.image} 
              alt={member.name}
              width={300}
              height={300}
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
            <article className={index === 2 ? "art" : ""}>
              <h1>{member.name}</h1>
              <p className="position">{member.position}</p>
              <p className="quote">&quot;{member.quote}&quot;</p>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
