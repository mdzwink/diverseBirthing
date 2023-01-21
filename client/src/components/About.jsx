import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <main className="about-container">
      
      <section className='home-pages' >
        <div className="intro" id='about-intro'>
          <h1>"At Birthing Diversity, we're striving to put "care" back into healthcare."</h1>
        </div>
      </section>

      <section className='our-team-section' >

        <div className="our-team-container">

          <div className='our-team' >
            <h1 className="about-h">Our Team</h1>
            
            <div className="team-tables">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Team members</th>
                    <th>Advisors</th>
                  </tr>
                </thead>
                  <tr>
                    <td><div className="avatar"></div></td>
                    <td>&nbsp;Momina Khan</td>
                    <td>Manavi Handa (Midwife)</td>
                  </tr>
                  <tr>
                    <td><div className="avatar"></div></td>
                    <td>&nbsp;Ana Tomohiro (Social Worker)</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td><div className="avatar"></div></td>
                    <td>&nbsp;Alina Dekhtiarenko (Midwifery Student, TMU)</td>
                    <td>Manavi Handa (Midwife)</td>
                  </tr>
                  <tr>
                    <td><div className="avatar"></div></td>
                    <td>&nbsp;Angie Amezquita (Midwifery Student, TMU)</td>
                    <td>Manavi Handa (Midwife)</td>
                  </tr>
                  <tr>
                    <td><div className="avatar"></div></td>
                    <td>&nbsp;Yasmin Ahmed (Midwifery Student, TMU)</td>
                    <td>Manavi Handa (Midwife)</td>
                  </tr>
              </table>
            </div>
          </div>

          <div className="contact-us">Want to get in touch? We'd love to hear from you!<br/><FontAwesomeIcon icon={faEnvelope} />&nbsp;birthingdiversity@gmail.com</div>

        </div>

        <div className="peer-reviewer-ack">
          <h3>Special Thanks to Our Translation Peer Reviewers</h3>
        </div>
      </section>

    </main>
  )
}

export default About;