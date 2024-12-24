import { useState, useRef } from 'react'

export const Dropdown = (props: {
  options: string[],
  stateValue: string,
  setValueFunc: ((arg: string) => void),
  label: string,
  required: boolean,
  color: string,
}) => {

  const [showMenu, setShowMenu] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <label className={props.required ? "required" : ""}>{props.label}</label>

      <div className="dropdown-container"
        tabIndex={0}
        ref={containerRef}
        onBlur={() => setShowMenu(false)}
        onFocus={() => setShowMenu(true)}
      >
        <div className="form-dropdown"
          style={!showMenu ? { borderColor: "#989DA2", borderRadius: 4 } : { borderColor: props.color, outlineColor: props.color }}>
          <p style={{ color: props.stateValue === "" ? "#a8a8a8" : "" }}>{props.stateValue === "" ? "Select one" : props.stateValue}</p>
          <i className="fa fa-caret-down" style={{ color: "#7b858f", position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)" }} />
        </div>
        {showMenu && <div className={`form-dropdown-menu ${showMenu ? "fade-in" : ""}`}
          style={{ borderColor: props.color, outlineColor: props.color }}>
          <div className='dropdown-hr' />
          <div className='dropdown-options'>
            {props.options.map((curr, index) => {
              return (
                <p
                  key={`dropdown-option-${props.label}-${index}`}
                  className="form-dropdown-option"
                  onClick={() => {
                    props.setValueFunc(curr)
                    if (containerRef.current) { containerRef.current.blur() }
                  }}
                  style={curr === props.stateValue ? { color: "white", backgroundColor: props.color } : { color: "#333333" }}
                > {curr}</p>
              )
            })}
          </div>
        </div>}
      </div >
    </>
  )
}
