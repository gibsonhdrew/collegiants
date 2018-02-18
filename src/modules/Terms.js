import React, { Component } from 'react';

class Terms extends Component {
  render() {
    return (
      <div>
        <p className='pageTitle'>Terms and Conditions</p>
        <p className='bodyText'>
          <b>Cancellation policy:</b><br/>
          All cancellations made less than 24 hours before a scheduled tutoring session are billed in full, with the exception of medical emergencies (including a doctor’s note). Notice of anticipated cancellations and reschedules should be made as far in advance as possible.
        </p>
        <p className='bodyText'>
          <b>Sick policy:</b><br/>
          If a student is sick but cannot reschedule, we provide FaceTime and Skype tutoring using virtual whiteboards, which is just as effective as a house call. We insist that any student who is sick take advantage of this service, and if a student is visibly sick, our tutors have the right to leave and continue the session via Video Call from the nearest convenient location. For a true medical emergency, please simply cancel the session and furnish a doctor’s note and the cancellation fee will be waived.
        </p>
        <p className='bodyText'>
          <b>First Come, First Serve Policy:</b><br/>
          Collegiants operates on a simple First Come, First Serve policy even for clients who have worked with us before.
        </p>
        <p className='bodyText'>
          <b>Disclaimer:</b><br/>
          All sessions are subject to cancellation for any reason whatsoever.
        </p>
      </div>
    )
  }
}

export default Terms;
