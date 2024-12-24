import './css/Forms.css'
import './css/App.css'
import './css/Menu.css'
import { Routes, Route } from 'react-router'
import { Menu } from './Menu'
import { GameDisplay } from './GameDisplay'
import { useEffect, useState } from 'react'

function App() {

  const [gameState, setGameState] = useState(0);
  const [pageColor, setPageColor] = useState("#000000");
  const [icon, setIcon] = useState("");
  const [banner, setBanner] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [jobType, setJobType] = useState("");

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

  return (
    <>
      <Routes>

        <Route index element={<Menu />} />
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
          />
        }>
        </Route>

      </Routes>
    </>
  )
}

export default App
