import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
			<div>
        <p className='pageTitle'>Testimonials</p>

				<Testimonial>
					<p className='bodyText'><i>Ethan Kaplan was a tremendous asset in helping me get into my top school Early Decision. Not only did Ethan tutor me for the SAT, he also advised me on the application process.</i></p>
					<p className='bodyText'><b>- Jackson M.</b></p>
				</Testimonial>

        <GrayBG>
          <Testimonial2>
            <p className='bodyText'><i>Ethan Kaplan has been an amazing tutor. He helped me prep for the GRE and because of him I was able to get into my graduate school of choice. He also helped me improve my writing on my honor’s thesis. He’s understanding, clear, and overall an amazing tutor. I couldn&#39;t have picked anyone better.</i></p>
            <p className='bodyText'><b>- Tracy K.</b></p>
          </Testimonial2>
        </GrayBG>

				<Testimonial>
					<p className='bodyText'><i>Ethan is professional, intelligent and kind. I always felt comfortable asking him questions and never felt judged if I didn&#39;t understand even the simplest of concepts. With his help, I was able to meet my required GRE scores and get into graduate school. I can&#39;t thank Ethan enough for all of his help!</i></p>
					<p className='bodyText'><b>- Eva S.</b></p>
				</Testimonial>

        <GrayBG>
          <Testimonial2>
            <p className='bodyText'><i>Ethan has been a godsend for our son. He helped him prepare for the SAT and navigate the college application process. With Ethan’s invaluable expertise, our son received an excellent test score and was accepted into 12 highly regarded colleges and waitlisted on an additional 2 schools. He even received Presidential Scholarships to some of the schools. Ethan is not only an excellent tutor but also a caring and supportive person. Thank you Ethan for helping to bring out the best in our son!</i></p>
            <p className='bodyText'><b>- Terry S.</b></p>
          </Testimonial2>
        </GrayBG>
			</div>
		)
  }
}

const Testimonial = (props) => (
  <div className='theTestimonial' style= {{
    boxShadow: '2px 2px 8px #999999',
    marginBottom: '15px',
    marginTop: '15px',
    borderRadius: '5px',
    border: '2px solid #d34747'
  }} {...props} />
)

const Testimonial2 = (props) => (
  <div className='theTestimonial2' style= {{
    boxShadow: '2px 2px 8px #999999',
    marginBottom: '15px',
    marginTop: '15px',
    borderRadius: '5px',
    border: '2px solid #d34747'
  }} {...props} />
)

const GrayBG = (props) => (
  <div className= 'grayBG' style= {{
    position: 'relative',
    width: '100vw',
    paddingTop: '4px',
    paddingBottom: '4px',
    backgroundColor: '#f7f7f7'
  }} {...props} />
)


export default About;
