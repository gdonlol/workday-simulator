import { SetStateAction } from "react";
import { Dropdown } from "./Dropdown";

interface workInfoStateSchema {
  nameMatch: (string)[];
  meetJobReqs: (string)[];
  legalWork: (string)[];
  requireSponsor: (string)[];
  previouslyEmployed: (string)[];
  nca: (string)[];
  startWork: (string)[];
}

export const OtherQuestions = (props: {
  pageColor: string,
  workInfoState: workInfoStateSchema
  setWorkInfoState: React.Dispatch<SetStateAction<workInfoStateSchema>>
}) => {

  return (

    <div className="flex-col" style={{ width: "73%", alignSelf: "center", marginBottom: 64 }}>
      <h1 style={{ marginTop: 4 }}>Application Questions</h1>
      <p><small><span style={{ color: "#f54242" }}>*</span> Indicates a required field</small></p>

      <Dropdown
        label={"Does the Legal Name you provided on the “My Information” page match the name on your legal ID?"}
        options={["Yes", "No"]}
        stateValue={props.workInfoState.nameMatch[0]}
        setValueFunc={(val: string) => props.setWorkInfoState(old => {
          return (
            { ...old, nameMatch: [val, ...old.nameMatch.splice(1)] }
          )
        })}
        required={true}
        color={props.pageColor}
      />
      {props.workInfoState.nameMatch[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.workInfoState.nameMatch[1]}</p>
      </div>}

      <Dropdown
        label={"Do you certify you meet all minimum qualifications for this job as outlined in the job posting? If you do not recall the minimum qualification for this job, please review the job posting prior to answering this question."}
        options={["Yes", "No"]}
        stateValue={props.workInfoState.meetJobReqs[0]}
        setValueFunc={(val: string) => props.setWorkInfoState(old => {
          return (
            { ...old, meetJobReqs: [val, ...old.meetJobReqs.splice(1)] }
          )
        })}
        required={true}
        color={props.pageColor}
      />
      {props.workInfoState.meetJobReqs[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.workInfoState.meetJobReqs[1]}</p>
      </div>}

      <Dropdown
        label={"Are you legally authorized to work at the country of our location?"}
        options={["Yes", "No", "Pending work authorization"]}
        stateValue={props.workInfoState.legalWork[0]}
        setValueFunc={(val: string) => props.setWorkInfoState(old => {
          return (
            { ...old, legalWork: [val, ...old.legalWork.splice(1)] }
          )
        })}
        required={true}
        color={props.pageColor}
      />
      {props.workInfoState.legalWork[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.workInfoState.legalWork[1]}</p>
      </div>}

      <Dropdown
        label={"Will you require employer sponsorship to work at the country of our location?"}
        options={["Yes", "No"]}
        stateValue={props.workInfoState.requireSponsor[0]}
        setValueFunc={(val: string) => props.setWorkInfoState(old => {
          return (
            { ...old, requireSponsor: [val, ...old.requireSponsor.splice(1)] }
          )
        })}
        required={true}
        color={props.pageColor}
      />
      {props.workInfoState.requireSponsor[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.workInfoState.requireSponsor[1]}</p>
      </div>}

      <Dropdown
        label={"Have you worked previously at our company?"}
        options={["Yes", "No"]}
        stateValue={props.workInfoState.previouslyEmployed[0]}
        setValueFunc={(val: string) => props.setWorkInfoState(old => {
          return (
            { ...old, previouslyEmployed: [val, ...old.previouslyEmployed.splice(1)] }
          )
        })}
        required={true}
        color={props.pageColor}
      />
      {props.workInfoState.previouslyEmployed[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.workInfoState.previouslyEmployed[1]}</p>
      </div>}

      <Dropdown
        label={"Have you signed a non-compete agreement with your current or previous employer and/or any other agreement which might restrict your employment?"}
        options={["Yes", "No"]}
        stateValue={props.workInfoState.nca[0]}
        setValueFunc={(val: string) => props.setWorkInfoState(old => {
          return (
            { ...old, nca: [val, ...old.nca.splice(1)] }
          )
        })}
        required={true}
        color={props.pageColor}
      />
      {props.workInfoState.nca[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.workInfoState.nca[1]}</p>
      </div>}

      <label className="required">What is the approximate timeline for beginning a new position with us?</label>
      <input
        style={{ outlineColor: props.pageColor }}
        onChange={e =>
          props.setWorkInfoState(old => {
            return (
              { ...old, startWork: [e.target.value, ...old.startWork.splice(1)] }

            )
          })
        }
        value={props.workInfoState.startWork[0]}
      />
      {props.workInfoState.startWork[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.workInfoState.startWork[1]}</p>
      </div>}


    </div>
  )
}
