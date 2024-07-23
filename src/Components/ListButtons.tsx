import { useDispatch, useSelector } from "react-redux"
import SelectionButton from "./SelectionButton"
import { add1, add5 } from "../slices/counterSlice"
import { RootState } from "../App"

export default function ListButtons() {

  const counter = useSelector((state:RootState)=>
    state.counterSlice.counter
  )

  const buttons = useSelector((state:RootState)=>
    state.buttonSlice.buttons
  )

  const dispatch = useDispatch()
  return (
    <>

    <div>
      {buttons.map((button: {isDisplay: boolean, title: string}, index: number) => (
        <SelectionButton key={index} label={button.title} selectedTitle={button.title} />
  ))}
    </div>


    {/* <div>
      <button onClick={() => dispatch(add1())}>add1</button>
      <button onClick={() => dispatch(add5())}>add5</button>
      counter={counter}
    </div> */}

{/* <div className="list-container">
  <div className="button-row">
    {buttons.slice(0, 2).map((item, index) => (
      <SelectionButton 
        key={index}
        label={item}
        className="selection-button"
      />
    ))}
  </div>
  <div className="button-row">
    {buttons.slice(2).map((item, index) => (
      <SelectionButton 
        key={index+2}
        label={item}
        className="selection-button"
      />
    ))}
  </div>
</div> */}
</>
  )
}