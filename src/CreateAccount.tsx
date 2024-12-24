import { useState, useEffect } from "react"
import { Link } from "react-router"

export const CreateAccount = (props: {
  setGameState: React.Dispatch<React.SetStateAction<number>>,
  pageColor: string,
  jobType: string
}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfPassword] = useState("")
  const [regexStates, setRegexStates] = useState({
    lowercase: true,
    alphanumeric: true,
    minLength: true,
    specialChar: true,
    uppercase: true,
    numeric: true,
    validEmail: true,
    confMatch: true,
    write: false
  })

  useEffect(() => {
    if (regexStates.write && regexStates.lowercase && regexStates.alphanumeric && regexStates.minLength &&
      regexStates.specialChar && regexStates.uppercase && regexStates.numeric &&
      regexStates.validEmail && regexStates.confMatch) {
      console.log('all tests pass, switch gamestate to form')
      props.setGameState(3)
    } else {
      console.log("a test has failed")
    }
  }, [regexStates])

  const checkForm = () => {
    setRegexStates(() => ({
      write: true,
      lowercase: /[a-z]/.test(password),
      alphanumeric: /[a-zA-Z0-9]/.test(password),
      minLength: /^.{8,}$/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      uppercase: /[A-Z]/.test(password),
      numeric: /\d/.test(password),
      validEmail: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email),
      confMatch: confPassword === password
    }))
  }

  useEffect(() => {
    document.body.style.backgroundColor = "white"
    window.scrollTo(0, 0)
    return () => { document.body.style.backgroundColor = "F0F1F2" }
  }, [])

  return (
    <div>
      <div className="flex-col flex-aic" style={{ padding: '0px 0px 32px' }}>
        <div style={{ backgroundColor: props.pageColor, width: 1100, height: 300 }}>
        </div>

        <div className="flex-col flex-aic signin-panel-container" style={{ width: 1100 }}>
          <div className="signin-panel flex-col flex-aic">
            <h1>Create Account</h1>
            <form className="flex-col" style={{ alignSelf: "center", width: "100%" }}>
              <p style={{ margin: 6 }}>Password Requirements</p>
              <ul>
                <li>A lowercase character</li>
                <li>An alphanumeric character</li>
                <li>A minimum of 8 characters</li>
                <li>A special character</li>
                <li>An uppercase character</li>
                <li>A numeric character</li>
              </ul>
              <label>Email Address</label>
              <input className="text-input" onChange={e => setEmail(e.target.value)} />
              {!regexStates.validEmail &&
                <div className="form-error"><p><b>Error: </b> Please enter a valid email</p></div>
              }

              <label>Password</label>
              <input type="password" className="text-input" onChange={e => setPassword(e.target.value)} />
              {(!regexStates.lowercase || !regexStates.alphanumeric || !regexStates.minLength || !regexStates.specialChar || !regexStates.uppercase || !regexStates.numeric) &&
                <div className="form-error">
                  <p><b>Error:</b> Password must include</p>
                  <ul>
                    {!regexStates.lowercase && <li>A lowercase character</li>}
                    {!regexStates.alphanumeric && <li>An alphanumeric character</li>}
                    {!regexStates.minLength && <li>A minimum of 8 characters</li>}
                    {!regexStates.specialChar && <li>A special character</li>}
                    {!regexStates.uppercase && <li>An uppercase character</li>}
                    {!regexStates.numeric && <li>A numeric character</li>}
                  </ul>
                </div>
              }
              <label>Verify New Password</label>
              <input type="password" className="text-input" onChange={e => setConfPassword(e.target.value)} />
              {!regexStates.confMatch &&
                <div className="form-error"><p><b>Error: </b> Passwords do not match</p></div>
              }
              <button className={`btn ${props.jobType}-btn`} onClick={e => {
                e.preventDefault()
                console.log("test")
                checkForm()
              }}
                style={{ margin: "20px 0px 4px 0px" }}
              ><b>Create Account</b></button>
              <p style={{ alignSelf: "center" }}>Already have an account?
                <Link to="#" onClick={() => props.setGameState(1)} style={{ color: props.pageColor }}> Sign In</Link>
              </p>
              <Link to="#" style={{ alignSelf: "center", color: props.pageColor }}>Forgot your password?</Link>


            </form>
          </div>
        </div>

      </div>
    </div>
  )
}
