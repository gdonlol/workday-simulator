import './css/Forms.css'
import './css/App.css'
import './css/Menu.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { Menu } from './Menu'
import { GameDisplay } from './GameDisplay'
import { useEffect, useState, useRef, useCallback } from 'react'

function App() {

  const [gameState, setGameState] = useState(0);
  const [pageColor, setPageColor] = useState("#000000");
  const [icon, setIcon] = useState("");
  const [banner, setBanner] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobType, setJobType] = useState("");
  const [showTimer, setShowTimer] = useState(false)
  const [runTimer, setRunTimer] = useState(false)
  const [currTime, setCurrTime] = useState(0)
  const intervalId = useRef<number | null>(null);
  const [score, setScore] = useState(0)
  const [submit, setSubmit] = useState(false)
  const navigate = useNavigate()

  {/* memorize this and trigger a useEffect to prevent unnecessary re-renders */ }
  const updateScore = useCallback(() => {
    setSubmit(old => !old)
  }, [])

  useEffect(() => {
    setScore(currTime)
    setRunTimer(false)
    setShowTimer(false)
    navigate("/")
  }, [submit])

  useEffect(() => {
    const fetchJson = async () => {
      const jsonRandom = Math.floor(Math.random() * 6) + 1;
      const response = await fetch(`/json/${jsonRandom}.json`);
      const jsonData = await response.json();
      setPageColor(jsonData.color);
      setIcon(jsonData.icon);
      setBanner(jsonData.banner);
      setJobTitle(jsonData.jobTitle);
      setJobDesc(jsonData.jobDesc);
      setJobType(jsonData.type);
    }
    fetchJson();
  }, [])

  useEffect(() => {
    if (runTimer) {
      intervalId.current = window.setInterval(() => {
        setCurrTime(old => old + 11)
      }, 11)
    }
    else {
      if (intervalId.current) window.clearInterval(intervalId.current)
    }
  }, [runTimer])

  return (
    <>
      {/* not dedicated enough to optimize for mobile users lol */}
      <div className="anti-mobile"
        style={{
          position: "fixed", height: "100vh", width: "100vw",
          backgroundColor: "black", zIndex: 999999, color: "white"
        }}>
        <p>sorry, i don't have time to make this playable for mobile :(</p>
      </div>
      {showTimer &&
        <div className="timer flex flex-aic ">
          <p>
            {Math.floor(currTime / 60000).toString().padStart(2, '0')
            }:{(Math.floor(currTime / 1000) % 60).toString().padStart(2, '0')
            }<span style={{ fontSize: 30 }}>.{(currTime % 100).toString().padStart(2, '0')}</span></p>
        </div>
      }
      <Routes>

        <Route path="/" element={
          <Menu
            setShowTimer={setShowTimer}
            setGameState={setGameState}
            setRunTimer={setRunTimer}
            setCurrTime={setCurrTime}
            score={score}
          />
        } />
        <Route path="game" element={
          <GameDisplay
            gameState={gameState}
            setGameState={setGameState}
            pageColor={pageColor}
            icon={icon}
            banner={banner}
            jobTitle={jobTitle}
            jobDesc={jobDesc}
            jobType={jobType}
            setShowTimer={setShowTimer}
            updateScore={updateScore}
          />
        } />
        <Route path="*" element={
          <div>
            <h1>404.</h1>
          </div>
        } />

      </Routes>
    </>
  )
}
export default App
