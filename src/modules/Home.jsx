import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {userName: '', userEmail: '', userPhone: '', userSubjects: '', userZip: ''}
  }
  handleChange(e) {
    if (e.target.id === 'uName') {
      this.setState({
        userName: e.target.value
      })
    } else if (e.target.id === 'uEmail') {
      this.setState({
        userEmail: e.target.value
      })
    } else if (e.target.id === 'uPhone') {
      this.setState({
        userPhone: e.target.value
      })
    } else if (e.target.id === 'uSubjects') {
      this.setState({
        userSubjects: e.target.value
      })
    } else if (e.target.id === 'uZip') {
      this.setState({
        userZip: e.target.value
      })
    }
  }
  handleButtonClick(event) {
    console.log('button clicked.')
    console.log('name: '+this.state.userName)
    console.log('email: '+this.state.userEmail)
    console.log('Phone no: '+this.state.userPhone)
    console.log('Subjects: '+this.state.userSubjects)
    console.log('ZIP code: '+this.state.userZip)
  }
  render() {
    return (
      <div className='flexDiv'>
        <div style={{width: '550px'}}>
          <HomeHeader>Expert Test Prep, Academic Tutoring, and Language Learning</HomeHeader>
          <p className='bodyText'>
              Collegiants is an all-inclusive, expert tutoring company founded by Ethan Kaplan and Christine Loh. With years of tutoring, teaching, and college lecturing experience, Collegiants tutors offer lessons and guidance in nearly every subject with special expertise in tutoring the SAT, ACT, SAT Subject Tests, GRE, ISEE, SSAT, and SHSAT exams. Collegiants also offers academic tutoring in most subjects, and offers robust Mandarin Chinese programs for both students and adults.
          </p>
          <p className='bodyText'>
              Collegiants works with students of all levels from perfect scorers to those with learning differences. There is no one single type of student, so we always tailor our services to the individual needs and learning styles of every single person we teach. More than anything, we want our students to succeed! And succeed they have: Collegiants students have attended Harvard, Yale, Princeton, Northwestern, Juilliard, and many other prestigious universities in both the US and abroad!
          </p>
        </div>
        <EmailBox 
          clickbutton={this.handleButtonClick} 
          changeText={this.handleChange}
          userName={this.userName}
          userEmail={this.userEmail}
          userPhone={this.userPhone}
          userSubjects={this.userSubjects}
          userZip={this.userZip}
        />
      </div>
    )
  }
}

const HomeHeader = (props) => (
  <p className='theHomeHeader' style = {{
    fontWeight: 'bold',
  }} {...props} />
)

const EmailBox = (props) => (
  <div style = {{
    border: '3px solid #D34747',
    boxShadow: '2px 2px 6px #999999',
    marginTop: '52px',
    marginBottom: '60px',
    textAlign: 'center', 
    borderRadius: '10px',
    width: '400px',
    height: '356px'
  }} {...props}>
    <p style={{
      fontWeight: 'bold',
      fontSize: '1.3em'
    }}>
      Start tutoring with us!
    </p>
    <form method="POST" action="https://formspree.io/info@collegiants.com">
      <input name='Name' id='uName' value={props.userName} onChange={props.changeText} className='homeInput' placeholder='Name:'/><br/>
      <input type='email' name='Email' id='uEmail' value={props.userEmail} onChange={props.changeText} className='homeInput' placeholder='Email Address:'/><br/>
      <input name='Phone Number' id='uPhone' value={props.userPhone} onChange={props.changeText} className='homeInput' placeholder='Phone Number:'/><br/>
      <input name='Subject(s)' id='uSubjects' value={props.userSubjects} onChange={props.changeText} className='homeInput' placeholder='Tutoring Subject(s):'/><br/>
      <input name='ZIP Code' id='uZip' value={props.userZip} onChange={props.changeText} className='homeInput' placeholder='ZIP Code:'/><br/>
      <button type='submit' className='submitBtn' style={{
        width: '326px',
        height:'36px', 
        backgroundColor: '#D34747', 
        border: '3px solid #D34747', 
        borderRadius:'5px',
        fontWeight: 'bold',
        color: 'white',
        marginBottom:'5px'
      }} onClick={props.clickbutton}>
        Submit &rarr;
      </button>
    </form>
  </div>
)

export default Home;
