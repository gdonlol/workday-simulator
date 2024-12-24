import { Footer } from "./Footer"
import { useEffect, useState } from "react"

export const Signin = (props: {
  setGameState: React.Dispatch<React.SetStateAction<number>>,
  pageColor: string,
  jobType: string
}) => {

  const [currMsg, setCurrMsg] = useState(-1);

  useEffect(() => {
    document.body.style.backgroundColor = "white"
    window.scrollTo(0, 0)
    return () => { document.body.style.backgroundColor = "#F0F1F2" }
  }, [])

  return (
    <div>
      <div className="flex-col flex-aic" style={{ padding: '0px 0px 32px' }}>
        <div style={{ backgroundColor: props.pageColor, width: 1100, height: 300 }}>
        </div>


        <div
          className="flex-col flex-aic signin-panel-container"
          style={{ width: 1100 }}>
          <div className="signin-panel flex-col flex-aic">
            <h1>Sign In</h1>
            <div className="flex-col" style={{ width: "100%" }}>
              <label>Email Address</label>
              <input className="text-input" />

              <label>Password</label>
              <input type="password" className="text-input" />
              <button
                onClick={() => setCurrMsg(old => (old + 1) % 3)}
                className={`btn ${props.jobType}-btn`} style={{ fontWeight: 600, margin: "20px 0px 4px 0px" }}>{
                  currMsg === -1 ? "Sign In" :
                    currMsg === 0 ? "You're not supposed to sign up" :
                      currMsg === 1 ? "The meme is that Workday accounts don't sync" :
                        "Look down and \"make an account\""
                }</button>
              <p style={{ alignSelf: "center" }}>Don't have an account yet?
                <a onClick={() => props.setGameState(2)} style={{ color: props.pageColor }}> Create Account</a>
              </p>
              <a style={{ alignSelf: "center", color: props.pageColor }}>Forgot your password?</a>
            </div>
          </div>


          <Footer />


        </div>


      </div>
    </div>
  )
}
