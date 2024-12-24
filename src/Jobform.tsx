import { SetStateAction, useEffect, useState } from "react"
import { Footer } from "./Footer"
import { InfoForm } from "./InfoForm"
import { MyExperience } from "./MyExperience"
import { OtherQuestions } from "./OtherQuestions"
import { VoluntaryDisclosures } from "./VoluntaryDisclosures"
import { Review } from "./Review"

export const Jobform = (props: { pageColor: string, colorType: string }) => {

  const [infoState, setInfoState] = useState({
    heardFrom: ["", ""],
    firstname: ["", ""],
    middlename: ["", ""],
    lastname: ["", ""],
    address1: ["", ""],
    address2: ["", ""],
    city: ["", ""],
    province: ["", ""],
    postal: ["", ""],
    phoneType: ["", ""],
    phoneNumber: ["", ""]
  })
  const [workInfoState, setWorkInfoState] = useState({
    nameMatch: ["", ""],
    meetJobReqs: ["", ""],
    legalWork: ["", ""],
    requireSponsor: ["", ""],
    previouslyEmployed: ["", ""],
    nca: ["", ""],
    startWork: ["", ""]
  })
  const [personalInfoState, setPersonalInfoState] = useState({
    gender: ["", ""],
    race: ["", ""],
    disability: ["", ""],
    veteran: ["", ""],
    criminalHistory: ["", ""]
  })
  const [resumeUp, setResumeUp] = useState(false)
  const [progress, setProgress] = useState(4)

  const updateErrorIndex = (
    stateObj: Record<string, string[]>,
    setStateFn: React.Dispatch<SetStateAction<Record<string, string[]>>>,
    stateKey: string,
    errorMsg: string,
    regex = /.*/
  ): boolean => {
    const k = stateKey as keyof typeof stateObj
    if (stateObj[k][0] === "" || !regex.test(stateObj[k][0])) {
      console.log("failed: " + stateKey)
      setStateFn(old => {
        return ({ ...old, [stateKey]: [old[k][0], errorMsg] })
      })
      return true
    } else {
      console.log("passed: " + stateKey)
      setStateFn(old => {
        return ({ ...old, [stateKey]: [old[k][0], ""] })
      })
      return false
    }
  }
  {/* could make a loop for these checks but im too lazy and this works just fine enough */ }
  const handleAdvance = () => {
    if (progress === 0) {
      let fail = false;
      if (updateErrorIndex(infoState, setInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "heardFrom", "The field How did you hear about us? is required and must have a value.")) { fail = true }
      if (updateErrorIndex(infoState, setInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "firstname", "The field First Name is required and must have a value.")) { fail = true }
      if (updateErrorIndex(infoState, setInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "lastname", "The field Last Name is required and must have a value.")) { fail = true }
      if (updateErrorIndex(infoState, setInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "address1", "The field Address Line 1 is required and must have a value.")) { fail = true }
      if (updateErrorIndex(infoState, setInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "city", "The field City is required and must have a value.")) { fail = true }
      if (updateErrorIndex(infoState, setInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "province", "The field Province/State is required and must have a value.")) { fail = true }
      const postalRegex = /^(?:\d{5}(-\d{4})?|[A-Za-z]\d[A-Za-z]\s?\d[A-Za-z]\d|)$/
      if (updateErrorIndex(infoState, setInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "postal", "Invalid postal code/zip code.", postalRegex)) { fail = true }
      const phoneRegex = /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/
      if (updateErrorIndex(infoState, setInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "phoneNumber", "Invalid phone number.", phoneRegex)) { fail = true }
      if (updateErrorIndex(infoState, setInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "phoneType", "The field Phone Device Type is required and must have a value.")) { fail = true }
      if (fail) { return }
    }
    if (progress === 1) {
      if (!resumeUp) { return }
    }
    if (progress === 2) {
      let fail = false;
      if (updateErrorIndex(workInfoState, setWorkInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "nameMatch", "This field is required and must have a value.")) { fail = true }
      if (updateErrorIndex(workInfoState, setWorkInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "meetJobReqs", "This field is required and must have a value.")) { fail = true }
      if (updateErrorIndex(workInfoState, setWorkInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "legalWork", "This field is required and must have a value.")) { fail = true }
      if (updateErrorIndex(workInfoState, setWorkInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "requireSponsor", "This field is required and must have a value.")) { fail = true }
      if (updateErrorIndex(workInfoState, setWorkInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "previouslyEmployed", "This field is required and must have a value.")) { fail = true }
      if (updateErrorIndex(workInfoState, setWorkInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "nca", "This field is required and must have a value.")) { fail = true }
      if (updateErrorIndex(workInfoState, setWorkInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "startWork", "This field is required and must have a value.")) { fail = true }
      if (fail) { return }
    }
    if (progress === 3) {
      let fail = false;
      if (updateErrorIndex(personalInfoState, setPersonalInfoState as React.Dispatch<SetStateAction<Record<string, string[]>>>, "criminalHistory", "This field is required and must have a value.")) { fail = true }
      if (fail) { return }
    }
    window.scrollTo(0, 0)
    setProgress(old => Math.min(old + 1, 4))
  }

  const ProgressDot = (dotprops: { state: number, text: string }) => {

    if (dotprops.state <= 0) {
      return (
        <div className="flex-col flex-aic progress-dot" style={{ border: "1px solid #c4c4c4", backgroundColor: "#C4C4C4", margin: 6 }}>
          <span style={{ fontWeight: 400 }}>{dotprops.text}</span>
        </div>
      )
    }
    if (dotprops.state === 1) {
      return (
        <div className="flex-col flex-aic progress-dot" style={{ borderColor: props.pageColor }}>
          <span>{dotprops.text}</span>
        </div >
      )
    }
    return (
      <div className="flex-col flex-aic progress-dot checkmark" style={{ backgroundColor: props.pageColor, display: "relative", borderColor: props.pageColor }}>
        <span style={{ fontWeight: 400 }}>{dotprops.text}</span>
      </div>
    )
  }

  {/* no fucking idea why they made their navbar stickiness inconsistent */ }
  useEffect(() => {
    const navbar = document.getElementById("navbar")
    if (navbar) {
      navbar.style.position = "sticky"
      navbar.style.top = "0"
    }

    return () => {
      if (navbar) {
        navbar.style.position = "static"
      }
    }
  }, [])

  return (
    <div className="flex-col flex-aic" >
      <div className="flex-col form-container" style={{ marginBottom: -80, paddingBottom: 100 }}>
        <a style={{ color: props.pageColor }}>← <u>Back to Job Postings</u></a>
        <h2>PLACEHOLDER</h2>
        <div
          className="flex flex-aic progress-bar"
          style={{ marginBottom: 64, background: `linear-gradient(90deg, ${props.pageColor} ${24.5 * progress}%, #c4c4c4 ${24.5 * progress + 0.1}%, #c4c4c4 98%, #00000000 99%)` }}
        >
          <ProgressDot text="My Information" state={1 + progress} />
          <ProgressDot text="My Experience" state={0 + progress} />
          <ProgressDot text="Application Questions" state={-1 + progress} />
          <ProgressDot text="Voluntary Disclosures" state={-2 + progress} />
          <ProgressDot text="Review" state={-3 + progress} />
        </div>
        {progress === 0 && <InfoForm
          pageColor={props.pageColor}
          infoState={infoState}
          setInfoState={setInfoState}
        />}
        {progress === 1 && <MyExperience pageColor={props.pageColor} uploaded={resumeUp} setUploaded={setResumeUp} />}
        {progress === 2 && <OtherQuestions pageColor={props.pageColor} workInfoState={workInfoState} setWorkInfoState={setWorkInfoState} />}
        {progress === 3 && <VoluntaryDisclosures pageColor={props.pageColor} personalInfoState={personalInfoState} setPersonalInfoState={setPersonalInfoState} />}
        {progress === 4 && <Review pageColor={props.pageColor} infoState={infoState} workInfoState={workInfoState} personalInfoState={personalInfoState} />}
        <Footer />

      </div>

      <div className="form-footer flex flex-aic" style={{ justifyContent: "flex-end" }}>
        <button
          className={`btn ${props.colorType}-btn`}
          style={{ marginRight: 22 }}
          onClick={() => { handleAdvance() }}
        ><b>Save and Continue</b></button>
      </div>

    </div >
  )
}
