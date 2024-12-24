import { SetStateAction, useState } from "react"

export const MyExperience = (props: {
  pageColor: string,
  uploaded: boolean,
  setUploaded: React.Dispatch<SetStateAction<boolean>>
}) => {

  const [showFile, setShowFile] = useState(false)

  return (
    <div className="flex-col" style={{ width: "73%", alignSelf: "center", marginBottom: 64 }}>
      <h1 style={{ marginTop: 4 }}>My Experience</h1>
      <p><small><span style={{ color: "#f54242" }}>*</span> Indicates a required field</small></p>
      <h3 style={{ color: props.pageColor }}>Resume/CV</h3>
      <label className="required" style={{ marginTop: 4 }}>Upload a file (just for show btw)</label>
      <div
        className="upload-container flex-col flex-aic flex-jcc"
        tabIndex={0}
        onClick={() => {
          setShowFile(true)
          setTimeout(() => props.setUploaded(true), Math.random() * 10000)
        }}>
        {/* i literally copied this svg thing from workday source code XD */}
        <div>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" focusable="false" role="presentation" viewBox="0 0 56 56"><g fill="none" fillRule="evenodd" >
              <path fill={props.pageColor} fillRule="nonzero" d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52 4 41.255 4 28 14.745 4 28 4zm0 2C15.85 6 6 15.85 6 28s9.85 22 22 22 22-9.85 22-22S40.15 6 28 6zm-.017 12a.48.48 0 0 1 .356.144l7.778 7.778a.506.506 0 0 1-.003.71l-.7.701a.495.495 0 0 1-.711.003L29 21.634V37.26c0 .273-.226.5-.505.5h-.99a.495.495 0 0 1-.505-.5V21.604l-5.732 5.732a.506.506 0 0 1-.71-.003l-.701-.7a.495.495 0 0 1-.003-.71l7.777-7.779a.498.498 0 0 1 .352-.144z"></path>
            </g>
            </svg>
          </span>
        </div>

        <b>Drop files here</b>
        <p>or <u style={{ color: props.pageColor }}>Select files</u></p>
      </div>

      {showFile && <div className="flex" style={{ gap: 16 }}>
        <div className="flex flex-aic flex-jcc" style={{ backgroundColor: "#f6f7f8", border: "1px solid #ced3d9", width: 82, height: 82, borderRadius: 4 }}>
          <i className="fa fa-file-text-o" style={{ fontSize: 20, color: "#7b858f" }} />
        </div>

        <div className="flex-col upload-details">
          <p style={{ color: "#1e1e1e" }}>totally_legit_resume.pdf</p>
          <p style={{ color: "#5e6a75", marginBottom: 4 }}>7.27 PB</p>

          {props.uploaded && <div className="flex flex-aic" style={{ gap: 4 }}>
            <i className="fa fa-check" style={{ fontSize: 20, color: "#319c4c" }} />
            <p style={{ color: "#5e6a75" }}>Successfully Uploaded!</p>
          </div>}

          {!props.uploaded && <div className="flex flex-aic" style={{ gap: 2 }}>
            <div className="animated-circle" />
            <div className="animated-circle" style={{ animationDelay: "0.25s" }} />
            <div className="animated-circle" style={{ animationDelay: "0.5s" }} />
          </div>}
        </div>
      </div>}


    </div >
  )
}
