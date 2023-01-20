import './About.css'

const About = () => {
  return (
    <main className="about-container">
      <div className='splash-img'></div>
      <h1 className="about-h">Our Team</h1>
        
      <div className="team-container">
        <ul className="avatar">
          <li></li>
          <br></br>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <ul className="name">
          <li><h3>Team Members</h3></li>
          <br></br>
          <li>Momina Khan</li>
          <li>Ana Tomohiro</li>
          <li>Alina Dekhtiarenko</li>
          <li>Angie Amezquita</li>
          <li>Yasmin Ahmed</li>
        </ul>
        <ul className="position">
          <li><h3>Occupation</h3></li>
          <br></br>
          <li>(Midwifery Student, Toronto Metropolitan University)</li>
          <li>(Social Worker)</li>
          <li>(Midwifery Student, TMU)</li>
          <li>(Midwifery Student, TMU)</li>
          <li>(Midwifery Student, TMU)</li>
        </ul>
        <ul className="advisor">
          <li><h3>Advisor</h3></li>
          <br></br>
          <li>Manavi Handa (Midwife) </li>
        </ul>
      </div>
      <div className="peer-reviewer-ack">
        <h3>Special Thanks to Our Translation Peer Reviewers</h3>
      </div>

    </main>
  )
}

export default About;