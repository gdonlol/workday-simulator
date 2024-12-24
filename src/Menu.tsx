import { Link } from "react-router"

export const Menu = () => {
  return (
    <div className="menu-container">
      <div className="grid-background" />
      <h1>Workday Simulator</h1>
      <p></p>
      <Link to="/game" className="btn green-btn"><span>Play</span></Link>
    </div>
  )
}

