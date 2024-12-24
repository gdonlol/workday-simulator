
export const Review = (props: {
  pageColor: string,
  infoState: Record<string, string[]>,
  workInfoState: Record<string, string[]>,
  personalInfoState: Record<string, string[]>
}) => {
  return (
    <div className="flex-col review" style={{ width: "73%", alignSelf: "center", marginBottom: 64 }}>
      <h1 style={{ marginTop: 4 }}>Review</h1>

      <hr />

      <h1>My Information</h1>
      <label>How did you hear about us?</label>
      <p>{props.infoState.heardFrom}</p>

      <h3 style={{ color: props.pageColor }}>Legal Name</h3>
      <p>{props.infoState.firstname} {props.infoState.middlename} {props.infoState.lastname}</p>

      <h3 style={{ color: props.pageColor }}>Address</h3>
      <p>{props.infoState.address1}</p>
      <p>{props.infoState.address2}</p>
      <p>{props.infoState.city} {props.infoState.province} {props.infoState.postal}</p>

      <h3 style={{ color: props.pageColor }}>Phone</h3>
      <p>{props.infoState.phoneNumber} ({props.infoState.phoneType})</p>

      <hr />

      <h1>Application Questions</h1>
      <label>Does the Legal Name you provided on the “My Information” page match the name on your legal ID?</label>
      <p>{props.workInfoState.nameMatch}</p>

      <label>Do you certify you meet all minimum qualifications for this job as outlined in the job posting? If you do not recall the minimum qualification for this job, please review the job posting prior to answering this question.</label>
      <p>{props.workInfoState.meetJobReqs}</p>

      <label>Are you legally authorized to work at the country of our location?</label>
      <p>{props.workInfoState.legalWork}</p>

      <label>Will you require employer sponsorship to work at the country of our location?</label>
      <p>{props.workInfoState.requireSponsor}</p>

      <label>Have you worked previously at our company?</label>
      <p>{props.workInfoState.previouslyEmployed}</p>

      <label>Have you signed a non-compete agreement with your current or previous employer and/or any other agreement which might restrict your employment?</label>
      <p>{props.workInfoState.nca}</p>

      <label>What is the approximate timeline for beginning a new position with us?</label>
      <p>{props.workInfoState.startWork}</p>

      <hr />
      <h1>Voluntary Disclosures</h1>
      <h3>Personal Information</h3>

      <label>Select your gender.</label>
      <p>{props.personalInfoState.gender}</p>
      <label>Select your race/ethnicity.</label>
      <p>{props.personalInfoState.race}</p>
      <label>Do you have a disability or long-term health condition that affects your ability to perform tasks?</label>
      <p>{props.personalInfoState.disability}</p>
      <label>Are you a current or former member of the military or armed forces?</label>
      <p>{props.personalInfoState.veteran}</p>
      <label>Do you have any criminal convictions that have not been expunged or sealed? (A 'Yes' response may not automatically disqualify you from consideration, but we may request further information.)</label>
      <p>{props.personalInfoState.criminalHistory}</p>

    </div>
  )
}
