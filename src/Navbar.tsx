
export const Navbar = (props: { pageColor: string, icon: string }) => {
  return (
    <div id="navbar" className="navbar" style={{ borderTopColor: props.pageColor }} >
      <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
        <img src={props.icon} />
        <b style={{ fontSize: 20 }}>Careers</b>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignSelf: "flex-start", gap: 16 }}>
        <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", alignItems: "center" }}>
          <small>Made by Gordon</small>
          <small>|</small>
          <a href='https://github.com/gdonlol/workday-speedrun'> <i className='fa fa-github' /> <small>Source Code</small></a></div>
        <div style={{ display: "flex", gap: 32, justifyContent: "flex-end" }}>
          <b style={{ margin: 0, fontSize: 14 }}>Search for Jobs</b>
        </div>
      </div>
    </div>
  )
}
