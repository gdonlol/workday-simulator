import { Dropdown } from "./Dropdown";

interface personalInfoStateSchema {
  gender: (string)[];
  race: (string)[];
  disability: (string)[];
  veteran: (string)[];
  criminalHistory: (string)[];
}

export const VoluntaryDisclosures = (props: {
  pageColor: string
  personalInfoState: personalInfoStateSchema,
  setPersonalInfoState: React.Dispatch<React.SetStateAction<personalInfoStateSchema>>
}) => {
  return (
    <div className="flex-col" style={{ width: "73%", alignSelf: "center", marginBottom: 64 }}>
      <h1 style={{ marginTop: 4 }}>Voluntary Disclosures</h1>
      <p><small><span style={{ color: "#f54242" }}>*</span> Indicates a required field</small></p>

      <h3 style={{ color: props.pageColor }}>Personal Information</h3>
      <Dropdown
        label={"Select your gender."}
        options={["Male", "Female", "Other"]}
        stateValue={props.personalInfoState.gender[0]}
        setValueFunc={(val: string) => props.setPersonalInfoState(old => {
          return (
            { ...old, gender: [val, ...old.gender.splice(1)] }
          )
        })}
        required={false}
        color={props.pageColor}
      />

      <Dropdown
        label={"Select your race/ethnicity."}
        options={["White or Caucasian", "Black or African American", "Hispanic or Latino", "Asian", "Native American or Alaska Native", "Native Hawaiian or Pacific Islander", "Two or More Races", "Middle Eastern or North African", "Other"]}
        stateValue={props.personalInfoState.race[0]}
        setValueFunc={(val: string) => props.setPersonalInfoState(old => {
          return (
            { ...old, race: [val, ...old.race.splice(1)] }
          )
        })}
        required={false}
        color={props.pageColor}
      />

      <Dropdown
        label={"Do you have a disability or long-term health condition that affects your ability to perform tasks?"}
        options={["Yes", "No", "Prefer not to say"]}
        stateValue={props.personalInfoState.disability[0]}
        setValueFunc={(val: string) => props.setPersonalInfoState(old => {
          return (
            { ...old, disability: [val, ...old.disability.splice(1)] }
          )
        })}
        required={false}
        color={props.pageColor}
      />

      <Dropdown
        label={"Are you a current or former member of the military or armed forces?"}
        options={["Yes", "No", "Prefer not to say"]}
        stateValue={props.personalInfoState.veteran[0]}
        setValueFunc={(val: string) => props.setPersonalInfoState(old => {
          return (
            { ...old, veteran: [val, ...old.veteran.splice(1)] }
          )
        })}
        required={false}
        color={props.pageColor}
      />

      <Dropdown
        label={"Do you have any criminal convictions that have not been expunged or sealed? (A 'Yes' response may not automatically disqualify you from consideration, but we may request further information.)"}
        options={["Yes", "No"]}
        stateValue={props.personalInfoState.criminalHistory[0]}
        setValueFunc={(val: string) => props.setPersonalInfoState(old => {
          return (
            { ...old, criminalHistory: [val, ...old.criminalHistory.splice(1)] }
          )
        })}
        required={true}
        color={props.pageColor}
      />
      {props.personalInfoState.criminalHistory[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.personalInfoState.criminalHistory[1]}</p>
      </div>}

    </div>
  )
}
