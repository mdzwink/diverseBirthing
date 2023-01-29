import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import TeamMember from './TeamMember';

const About = () => {
  const ourTeam = [
      {
        name: 'Momina Khan',
        title: '(Midwifery Student, Toronto Metropoliten University)',
        advisor: 'Manavi Handa (Midwife)'
      },
      {
        name: 'Ana Tomohiro',
        title: '(Social Worker)',
        advisor: ''
      },
      {
        name: 'Alina Dekhtiarenko',
        title: '(Midwifery Student, Toronto Metropoliten University)',
        advisor: 'Manavi Handa (Midwife)'
      },
      {
        name: 'Angie Amezquita',
        title: '(Midwifery Student, Toronto Metropoliten University)',
        advisor: 'Manavi Handa (Midwife)'
      },
      {
        name: 'Yasmin Ahmed',
        title: '(Midwifery Student, Toronto Metropoliten University)',
        advisor: 'Manavi Handa (Midwife)'
      },
  ]

  const peerRev = [
    'name', 'name'
  ]


  return (
    <main className="about-container">
      
      <section className='home-pages about' >
        <div className="intro" id='about-intro'>
          <h1>"At Birthing Diversity, we're striving to put "care" back into healthcare."</h1>
        </div>
      </section>

      <section className='our-team-section' >

        <div className="our-team-container">

          <div className='our-team' >
            <h1>Our Team</h1>
            
            <div className="team-tables">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Team members</th>
                    <th></th>
                    <th>Advisors</th>
                  </tr>
                </thead>
                <tbody>
                  {ourTeam.map((member) => (
                    <tr>
                      {<TeamMember member={member} />}
                    </tr>
                  ))}

                </tbody>
              </table>
              <h3>Special Thanks to Our Translation Peer Reviewers</h3>
              <table className='peer' >
                <tbody>
                  {peerRev.map(peer => (
                    <tr>
                      <td><div className="avatar"></div></td>
                      <td>{peer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            </div>
          </div>


        </div>

        <div className="contact-us">
          Want to get in touch?<br/>We'd love to hear from you!<br/><p><FontAwesomeIcon icon={faEnvelope} />&nbsp;birthingdiversity@gmail.com</p>
        </div>
        
      </section>
    </main>
  )
}

export default About;