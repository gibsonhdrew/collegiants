import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
			<div>
        <p className='pageTitle'>Testimonials</p>


        <GrayBG>
          <Testimonial>
              <p className='bodyText'><i>Ethan is the ultimate test prep tutor. He has the intellect to truly understand the nuances of how each student approaches problem solving combined with the good-hearted nature to keep students positively motivated. And, he gets big results. Our son’s score, along with those of many friends recommended to Ethan, jumped over 200+ points. Our son wound up achieving a score that exceeded his goal.</i></p>
              <p className='bodyText'><b>- Cathy I.</b></p>
          </Testimonial>
        </GrayBG>

				<Testimonial2>
					  <p className='bodyText'><i>Ethan was instrumental in helping me surpass my ACT goal. He effectively taught me all of the tricks to succeed and prepared me for every situation that I could possibly face on test day. Ethan had a calm demeanor and made me feel confident. I am very grateful to have worked with Ethan as my tutor.
</i></p>
					  <p className='bodyText'><b>- Ben B.</b></p>
				</Testimonial2>

        <GrayBG>
				  <Testimonial>
					    <p className='bodyText'><i>Ethan helped me achieve a nearly perfect score on my ACT and a perfect score on the Math Level 2 subject test. He also tutored me in history and helped me fine tune my college application essay. I couldn’t have asked for a better tutor!</i></p>
					    <p className='bodyText'><b>- Jonah J.</b></p>
				  </Testimonial>
        </GrayBG>


				<Testimonial2>
					<p className='bodyText'><i>Ethan Kaplan was a tremendous asset in helping me get into my top school Early Decision. Not only did Ethan tutor me for the SAT, he also advised me on the application process.</i></p>
					<p className='bodyText'><b>- Jackson M.</b></p>
				</Testimonial2>

        <GrayBG>
          <Testimonial>
            <p className='bodyText'><i>Ethan Kaplan has been an amazing tutor. He helped me prep for the GRE and because of him I was able to get into my graduate school of choice. He also helped me improve my writing on my honor’s thesis. He’s understanding, clear, and overall an amazing tutor. I couldn&#39;t have picked anyone better.</i></p>
            <p className='bodyText'><b>- Tracy K.</b></p>
          </Testimonial>
        </GrayBG>

				<Testimonial2>
					<p className='bodyText'><i>Ethan is professional, intelligent and kind. I always felt comfortable asking him questions and never felt judged if I didn&#39;t understand even the simplest of concepts. With his help, I was able to meet my required GRE scores and get into graduate school. I can&#39;t thank Ethan enough for all of his help!</i></p>
					<p className='bodyText'><b>- Eva S.</b></p>
				</Testimonial2>

        <GrayBG>
          <Testimonial>
            <p className='bodyText'><i>Ethan has been a godsend for our son. He helped him prepare for the SAT and navigate the college application process. With Ethan’s invaluable expertise, our son received an excellent test score and was accepted into 12 highly regarded colleges and waitlisted on an additional 2 schools. He even received Presidential Scholarships to some of the schools. Ethan is not only an excellent tutor but also a caring and supportive person. Thank you Ethan for helping to bring out the best in our son!</i></p>
            <p className='bodyText'><b>- Terry S.</b></p>
          </Testimonial>
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
