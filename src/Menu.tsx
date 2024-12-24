import { Link } from "react-router"

export const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Workday Speedrun</h1>
      <Link to="/game" className="btn green-btn"><span>Play</span></Link>
    </div>
  )
}

