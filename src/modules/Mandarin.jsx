import React, { Component } from 'react';

class Mandarin extends Component {
  render() {
    return (
      <div>
        <p className='pageTitle'>Mandarin</p>
        <h2>Are you ready to enter the world of tomorrow?</h2>

        <p className="bodyText">
            Collegiants Mandarin is a leading provider of Mandarin tutoring,
            after-school programs, and continuing education.
            Collegiants Mandarin tutors are expert native-speaking teachers
            with experience at all age levels.
        </p>

        <h2>Services:</h2>

        <p className="bodyText">
            <b>Toddlers</b><br/>

            Foundational Education<br/>
            Phonics<br/>
            Tone Development/Recognition
        </p>

        <p className="bodyText">
            <b>Children</b><br/>

            Basic Grammar<br/>
            Conversational Skills<br/>
            Vocabulary Development
        </p>

        <p className="bodyText">
            <b>Teenagers</b><br/>

            SAT Mandarin Subject Test Prep<br/>
            AP Mandarin Prep<br/>
            IB Mandarin Prep<br/>
            Advanced Grammar & Vocabulary
        </p>

        <p className="bodyText">
            <b>Adults</b><br/>

            TOCFL Prep<br/>
            HSK Prep<br/>
            Business Mandarin<br/>
            Legal & Business Translations
        </p>
      </div>
    )
  }
}

export default Mandarin;
