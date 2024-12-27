import { useState } from 'react';
import { Footer } from './Footer';

export const Joblist = (props: {
  setGameState: React.Dispatch<React.SetStateAction<number>>,
  pageColor: string,
  icon: string,
  banner: string,
  jobTitle: string,
  jobDesc: string,
  jobType: string
}) => {

  const [showPanel, setShowPanel] = useState(false);
  const [fakeId, setFakeId] = useState(() => {
    return (Math.random() * 100000).toFixed(0);
  });

  {/* i lost the code in this comp and recovered it by copying the cached source in my browser and reformatting it with gpt, so some of it might look weird */ }
  return (
    <div style={{ position: "relative" }}>

      {showPanel &&
        <div className="application-panel-container flex flex-aic flex-jcc">
          <div className={`application-panel flex-col ${showPanel ? "zoom-in" : ""}`} style={{ gap: 22 }}>
            <button onClick={() => { setShowPanel(old => !old) }}>✕</button>
            <h1>Start your application</h1>
            <p>{props.jobTitle}</p>
            <a onClick={() => { props.setGameState(1) }} className={`btn ${props.jobType}-btn flex flex-jcc`} >Autofill with Resume</a>
            <a onClick={() => { props.setGameState(1) }} className={`btn ${props.jobType}-btn flex flex-jcc`} >Apply Manually</a>
            <hr />
            <a onClick={() => { props.setGameState(1) }} className={`btn ${props.jobType}-btn flex flex-jcc`} >Apply with LinkedIn</a>
            <hr />
          </div>
        </div>
      }

      <div className="flex-col flex-aic" style={{ padding: '0px 0px 32px' }}>
        <div style={{ backgroundColor: props.pageColor, width: '1225px', height: '300px' }}></div>
        <div style={{ backgroundColor: 'white', width: '1225px', padding: '24px', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', gap: '16px' }}>
            <div className="searchbar">
              <i className="fa fa-search" style={{ color: 'rgb(124, 133, 143)', fontSize: '20px' }}></i>
              <input placeholder="This search bar ain't gonna do anything" />
            </div>
            <button className={`btn ${props.jobType}-btn`}><b>Search</b></button>
          </div>
          <div style={{ marginTop: '16px', display: 'flex', gap: '16px' }}>
            <div className="dropdown-arrow">
              <select className="dropdown">
                <option>Distance or Location</option>
              </select>
            </div>
            <div className="dropdown-arrow">
              <select className="dropdown">
                <option>Time Type</option>
              </select>
            </div>
            <div className="dropdown-arrow">
              <select className="dropdown">
                <option>Job Category</option>
              </select>
            </div>
            <div className="dropdown-arrow">
              <select className="dropdown">
                <option>More</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex" style={{ width: '1225px', marginTop: '24px', gap: '24px' }}>
          <div style={{ backgroundColor: 'white', width: '39%' }}>
            <div style={{ padding: '18px', boxSizing: 'border-box' }}>
              <p style={{ color: 'rgb(94, 106, 117)', fontSize: '14px', margin: '0px' }}><b>1 JOB FOUND</b></p>
            </div>
            <div className="job-posting-card" style={{ borderColor: props.pageColor, backgroundColor: props.pageColor + "05" }}>
              <p><u>{props.jobTitle}</u></p>
              <p><i className="fa fa-map-marker" style={{ marginLeft: '0.15em', letterSpacing: '0.15em' }}></i> Somewhere, Earth</p>
              <p><i className="fa fa-clock-o"></i> Posted 30+ Days Ago</p>
              <p style={{ margin: '0px' }}><small>{fakeId}</small></p>
            </div>
            <div className="flex-col flex-aic flex-jcc" style={{ margin: '32px' }}>
              <div className="flex flex-aic flex-jcc" style={{ backgroundColor: props.pageColor, width: '30px', height: '30px', borderRadius: '99px' }}>
                <p style={{ color: 'white' }}>1</p>
              </div>
              <p style={{ color: 'rgb(96, 108, 119)', fontSize: '14px', marginBottom: '0px' }}>1 - 1 of jobs</p>
            </div>
          </div>

          <div style={{ flex: '1 1 0%', backgroundColor: 'white', height: '100vh' }}>
            <div style={{ maxWidth: '75%', margin: '38px' }}>
              <h1 style={{ fontSize: '24px', margin: '0px 0px 32px', color: 'rgb(51, 51, 51)' }}>{props.jobTitle}</h1>
              <button
                onClick={() => setShowPanel(old => !old)}
                className={`btn ${props.jobType}-btn`}
                style={{ fontWeight: '600', fontSize: '14px' }} >
                <span>Apply</span>
              </button>
            </div>
            <hr style={{ borderWidth: '0.5px medium medium', borderStyle: 'solid none none', borderColor: 'rgb(218, 222, 226)' }} />
            <div className="flex" style={{ margin: '38px', flex: '1 1 0%', justifyContent: 'space-between' }}>
              <div className="flex grey-text" style={{ flex: '1 1 0%', justifyContent: 'flex-start', gap: '8px' }}>
                <p className="flex flex-aic" style={{ gap: '12px', alignSelf: 'flex-start', margin: '0px' }}>
                  <i className="fa fa-map-marker grey-icon" style={{ fontSize: '24px' }}></i> Somewhere, Earth
                </p>
              </div>
              <div className="flex-col grey-text" style={{ flex: '1 1 0%', justifyContent: 'flex-start', gap: '8px' }}>
                <p className="flex flex-aic" style={{ gap: '12px', alignSelf: 'flex-start', margin: '0px' }}>
                  <i className="fa fa-briefcase grey-icon" style={{ fontSize: '24px' }}></i> Full time
                </p>
                <p className="flex flex-aic" style={{ gap: '12px', alignSelf: 'flex-start', margin: '0px' }}>
                  <i className="fa fa-clock-o grey-icon" style={{ fontSize: '24px', marginLeft: '0.05em', letterSpacing: '0.05em' }}></i>
                  Posted 30+ Days Ago
                </p>
                <p className="flex flex-aic" style={{ gap: '12px', alignSelf: 'flex-start', margin: '0px' }}>
                  <i className="fa fa-file-text-o grey-icon" style={{ fontSize: '24px', marginLeft: '0.05em', letterSpacing: '0.05em' }}></i>
                  {fakeId}
                </p>
              </div>
            </div>
            <div style={{ margin: '38px' }}>
              <p style={{ color: 'rgb(73, 73, 73)' }}>
                {props.jobDesc}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />

    </div>
  );
};

