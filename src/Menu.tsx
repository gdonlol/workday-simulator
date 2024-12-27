import { useState, useEffect, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"

export const Menu = (props: {
  setShowTimer: React.Dispatch<SetStateAction<boolean>>
  setGameState: React.Dispatch<SetStateAction<number>>
  setRunTimer: React.Dispatch<SetStateAction<boolean>>
  setCurrTime: React.Dispatch<SetStateAction<number>>
  score: number
}) => {

  const [anim, setAnim] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    document.body.style.backgroundColor = "#0C70B0"
    window.scrollTo(0, 0)
    return () => {
      document.body.style.backgroundColor = "#F0F1F2"
      document.body.style.transition = "none"
    }
  }, [])

  return (
    <div className={`menu-container ${anim ? "circle-anim" : ""}`}>
      <div className="grid-background" />
      <div className="flex flex-aic" style={{ position: 'fixed', top: 0, right: 0, margin: '8px 16px 0px 0px', gap: 20 }}>
        <a href="https://www.gdon.lol/" >My other stuff</a>
        <span>|</span>
        <a href="https://github.com/gdonlol/workday-simulator" ><i className="fa fa-github" /> Source Code</a>
      </div>
      {props.score === 0 &&
        <>
          <div className="logo-arc" />
          <h1>workday simulator</h1>
          <div>
            <a onClick={() => {
              setAnim(true)
              props.setRunTimer(false)
              window.setTimeout(() => {
                document.body.style.backgroundColor = "#f0f1f2"
                document.body.style.transition = "background-color 2s"
                props.setGameState(0)
                props.setCurrTime(0)
                props.setShowTimer(true)
                window.setTimeout(() => {
                  props.setRunTimer(true)
                  navigate("/game")
                }, 2000)
              }, 2000)
            }} className="btn yellow-btn"><span>Play</span></a>
          </div>
          <div className="menu-div flex-col flex-jcc" style={{ marginTop: 32 }}>
            <p style={{ marginTop: 0 }}>
              <span><b>how to play:</b></span> <br />
              <span>fill out the job application as fast as you can </span>
            </p>
            <p>
              <span><b>what is and why workday?</b></span> <br />
              <span>if you know, you know :(</span>
            </p>
            <p style={{ marginBottom: 0 }}>
              <span><b>does this collect form data?</b></span> <br />
              <span>no. see the source code if you want.</span>
            </p>
          </div>
        </>
      }
      {props.score !== 0 &&
        <div className="flex-col flex-jcc flex-aic" style={{ height: "100%" }}>
          <h1 style={{ fontSize: 40 }}>⌛ your time: </h1>
          <div className="timer flex flex-aic " style={{ animation: "none", position: "relative", marginBottom: 32 }}>
            <p>
              {Math.floor(props.score / 60000).toString().padStart(2, '0')
              }:{(Math.floor(props.score / 1000) % 60).toString().padStart(2, '0')
              }<span style={{ fontSize: 30 }}>.{(props.score % 100).toString().padStart(2, '0')}</span></p>
          </div>
          <a onClick={() => {
            setAnim(true)
            props.setRunTimer(false)
            window.setTimeout(() => {
              document.body.style.backgroundColor = "#f0f1f2"
              document.body.style.transition = "background-color 2s"
              props.setGameState(0)
              props.setCurrTime(0)
              props.setShowTimer(true)
              window.setTimeout(() => {
                props.setRunTimer(true)
                navigate("/game")
              }, 2000)
            }, 2000)
          }} className="btn yellow-btn"><span>Play again</span></a>

        </div >
      }
    </div >
  )
}

