import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
			<div>
        <p className='pageTitle'>Testimonials</p>

				<Testimonial>
					<p className='bodyText'><i>Ethan Kaplan was a tremendous asset in helping me get into my top school Early Decision. Not only did Ethan tutor me for the SAT, he also advised me on the application process.</i></p>
					<p className='bodyText'>- Jackson M.</p>
				</Testimonial>

        <GrayBG>
          <Testimonial>
            <p className='bodyText'><i>Ethan Kaplan has been an amazing tutor. He helped me prep for the GRE and because of him I was able to get into my graduate school of choice. He also helped me improve my writing on my honor’s thesis. He’s understanding, clear, and overall an amazing tutor. I couldn&#39;t have picked anyone better.</i></p>
            <p className='bodyText'>- Tracy K.</p>
          </Testimonial>
        </GrayBG>

				<Testimonial>
					<p className='bodyText'><i>Ethan is professional, intelligent and kind. I always felt comfortable asking him questions and never felt judged if I didn&#39;t understand even the simplest of concepts. With his help, I was able to meet my required GRE scores and get into graduate school. I can&#39;t thank Ethan enough for all of his help!</i></p>
					<p className='bodyText'>- Eva S.</p>
				</Testimonial>

        <GrayBG>
          <Testimonial>
            <p className='bodyText'><i>Ethan has been a godsend for our son. He helped him prepare for the SAT and navigate the college application process. With Ethan’s invaluable expertise, our son received an excellent test score and was accepted into 12 highly regarded colleges and waitlisted on an additional 2 schools. He even received Presidential Scholarships to some of the schools. Ethan is not only an excellent tutor but also a caring and supportive person. Thank you Ethan for helping to bring out the best in our son!</i></p>
            <p className='bodyText'>- Terry S.</p>
          </Testimonial>
        </GrayBG>
			</div>
		)
  }
}

const Testimonial = (props) => (
  <div style= {{
    width: '40vw',
    boxShadow: '2px 2px 8px #999999',
    marginBottom: '15px',
    marginTop: '10px',
    paddingLeft: '25px',
    paddingRight: '25px',
    border: '2px solid #aa3e39'
  }} {...props} />
)

const GrayBG = (props) => (
  <div style= {{
    width: '100vw',
    paddingTop: '4px',
    paddingBottom: '4px',
    backgroundColor: '#f8f8f8'
  }} {...props} />
)


export default About;
