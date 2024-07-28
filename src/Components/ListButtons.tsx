import { useSelector } from "react-redux"
import SelectionButton from "./SelectionButton"
import { RootState } from "../App"

export default function ListButtons() {

  const buttons = useSelector((state:RootState)=>
    state.buttonSlice.buttons
  )

  return (
    <>

    <div>
      {buttons.map((button: {isDisplay: boolean, title: string}, index: number) => (
        <SelectionButton key={index} label={button.title} selectedTitle={button.title} />
  ))}
    </div>

    </>
  )
}