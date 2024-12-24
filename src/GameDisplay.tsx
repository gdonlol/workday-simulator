import { Navbar } from "./Navbar"
import { CreateAccount } from "./CreateAccount"
import { Jobform } from "./Jobform"
import { Joblist } from "./Joblist"
import { Signin } from "./Signin"

export const GameDisplay = (props: {
  gameState: number,
  setGameState: React.Dispatch<React.SetStateAction<number>>,
  pageColor: string,
  icon: string,
  banner: string,
  jobTitle: string,
  jobDesc: string,
  jobType: string
}) => {
  return (
    <>
      <Navbar pageColor={props.pageColor} icon={props.icon} />

      {props.gameState === 0 &&
        <Joblist
          setGameState={props.setGameState}
          pageColor={props.pageColor}
          icon={props.icon}
          banner={props.banner}
          jobTitle={props.jobTitle}
          jobDesc={props.jobDesc}
          jobType={props.jobType}
        />
      }
      {props.gameState === 1 &&
        <Signin
          setGameState={props.setGameState}
          pageColor={props.pageColor}
          jobType={props.jobType}
        />
      }
      {props.gameState === 2 &&
        <CreateAccount
          setGameState={props.setGameState}
          pageColor={props.pageColor}
          jobType={props.jobType}
        />
      }
      {props.gameState === 3 &&
        <Jobform
          pageColor={props.pageColor}
          colorType={props.jobType}
        />
      }
    </>
  )
}
