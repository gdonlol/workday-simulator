import { Dropdown } from "./Dropdown"

interface infoStateSchema {
  heardFrom: (string)[];
  firstname: (string)[];
  middlename: (string)[];
  lastname: (string)[];
  address1: (string)[];
  address2: (string)[];
  city: (string)[];
  province: (string)[];
  postal: (string)[];
  phoneType: (string)[];
  phoneNumber: (string)[];
}

export const InfoForm = (props: {
  pageColor: string,
  infoState: infoStateSchema,
  setInfoState: React.Dispatch<React.SetStateAction<infoStateSchema>>
}) => {

  return (
    <div className="flex-col" style={{ width: "73%", alignSelf: "center", marginBottom: 64 }}>
      <h1 style={{ marginTop: 4 }}>My Information</h1>
      <p><small><span style={{ color: "#f54242" }}>*</span> Indicates a required field</small></p>

      <Dropdown
        label={"How did you hear about us?"}
        options={["Advertising", "Agency", "Job Board", "Social Media", "Other"]}
        stateValue={props.infoState.heardFrom[0]}
        setValueFunc={(val: string) => props.setInfoState(old => {
          return (
            { ...old, heardFrom: [val, ...old.heardFrom.splice(1)] }
          )
        })}
        required={true}
        color={props.pageColor}
      />
      {props.infoState.heardFrom[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.infoState.heardFrom[1]}</p>
      </div>}

      <hr />

      <h3 style={{ color: props.pageColor }}>Legal Name</h3>
      <label className="required" style={{ marginTop: 4 }}>First Name</label>
      <input
        style={{ outlineColor: props.pageColor }}
        onChange={e =>
          props.setInfoState(old => {
            return (
              { ...old, firstname: [e.target.value, ...old.firstname.splice(1)] }
            )
          })
        }
        value={props.infoState.firstname[0]}
      />
      {props.infoState.firstname[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.infoState.firstname[1]}</p>
      </div>}

      <label>Middle Name</label>
      <input
        style={{ outlineColor: props.pageColor }}
        onChange={e =>
          props.setInfoState(old => {
            return (
              { ...old, middlename: [e.target.value, ...old.middlename.splice(1)] }
            )
          })
        }
        value={props.infoState.middlename[0]}
      />
      <label className="required">Last Name</label>
      <input
        style={{ outlineColor: props.pageColor }}
        onChange={e =>
          props.setInfoState(old => {
            return (
              { ...old, lastname: [e.target.value, ...old.lastname.splice(1)] }

            )
          })
        }
        value={props.infoState.lastname[0]}
      />
      {props.infoState.lastname[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.infoState.lastname[1]}</p>
      </div>}

      <hr />

      <h3 style={{ color: props.pageColor }}>Address</h3>
      <label className="required" style={{ marginTop: 4 }}>Address Line 1</label>
      <input
        style={{ outlineColor: props.pageColor }}
        onChange={e =>
          props.setInfoState(old => {
            return (
              { ...old, address1: [e.target.value, ...old.address1.splice(1)] }
            )
          })
        }
        value={props.infoState.address1[0]}
      />
      {props.infoState.address1[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.infoState.address1[1]}</p>
      </div>}

      <label>Address Line 2</label>
      <input
        style={{ outlineColor: props.pageColor }}
        onChange={e =>
          props.setInfoState(old => {
            return (
              { ...old, address2: [e.target.value, ...old.address2.splice(1)] }
            )
          })
        }
        value={props.infoState.address2[0]}
      />

      <label className="required">City</label>
      <input
        style={{ outlineColor: props.pageColor }}
        onChange={e =>
          props.setInfoState(old => {
            return (
              { ...old, city: [e.target.value, ...old.city.splice(1)] }
            )
          })
        }
        value={props.infoState.city[0]}
      />
      {props.infoState.city[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.infoState.city[1]}</p>
      </div>}

      <label className="required">Province/State</label>
      <input
        style={{ outlineColor: props.pageColor }}
        onChange={e =>
          props.setInfoState(old => {
            return (
              { ...old, province: [e.target.value, ...old.province.splice(1)] }
            )
          })
        }
        value={props.infoState.province[0]}
      />
      {props.infoState.province[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.infoState.province[1]}</p>
      </div>}

      <label className="required">Postal Code/Zip Code</label>
      <input
        style={{ outlineColor: props.pageColor }}
        onChange={e =>
          props.setInfoState(old => {
            return (
              { ...old, postal: [e.target.value, ...old.postal.splice(1)] }
            )
          })
        }
        value={props.infoState.postal[0]}
      />
      {props.infoState.postal[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.infoState.postal[1]}</p>
      </div>}

      <hr />
      <h3 style={{ color: props.pageColor }}>Phone</h3>

      <label className="required" style={{ marginTop: 4 }}>Phone Number</label>
      <input
        style={{ outlineColor: props.pageColor }}
        onChange={e =>
          props.setInfoState(old => {
            return (
              { ...old, phoneNumber: [e.target.value, ...old.phoneNumber.splice(1)] }
            )
          })
        }
        value={props.infoState.phoneNumber[0]}
      />
      {props.infoState.phoneNumber[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.infoState.phoneNumber[1]}</p>
      </div>}

      <Dropdown
        label={"Phone Device Type"}
        options={["Mobile", "Landline"]}
        stateValue={props.infoState.phoneType[0]}
        setValueFunc={(val: string) => props.setInfoState(old => {
          return (
            { ...old, phoneType: [val, ...old.phoneType.splice(1)] }
          )
        })}
        required={true}
        color={props.pageColor}
      />
      {props.infoState.phoneType[1] !== "" && <div className="form-error">
        <p><b>Error:</b> {props.infoState.phoneType[1]}</p>
      </div>}

    </div>

  )
}
