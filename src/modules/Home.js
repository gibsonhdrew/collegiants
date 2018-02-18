import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader>Holistic Education Services</HomeHeader>
        <p className='bodyText'>
          Collegiants is an all-inclusive tutoring, college counseling, and educational services company run by husband and wife Ethan Kaplan and Christine Loh. With years of tutoring, teaching, and college lecturing experience, Ethan and Christine offer lessons and guidance in nearly every subject with special expertise in tutoring the SAT, ACT, SAT Subject Tests, GRE, ISEE, SSAT, SHSAT, and the subjects of Mandarin, English, and US & World History. 
        </p>
        <p className='bodyText'>
          Collegiants works with students of all levels from perfect scorers to those with learning differences. There is no one single type of student, so we always tailor our services to the individual needs and learning styles of every single person we teach. More than anything, we want our students to succeed! And succeed they have: previouis Collegiants students have attended Harvard, Yale, Princeton, Northwestern and even Juilliard!
        </p>
      </div>
    )
  }
}

const HomeHeader = (props) => (
  <div style = {{
    fontWeight: 'bold',
    fontSize: '42px'
  }} {...props} />
)

export default Home;
