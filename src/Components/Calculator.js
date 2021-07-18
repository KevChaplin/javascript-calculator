import React, {useState, useEffect} from 'react'
import Button from './Button'
import Screen from './Screen'
import buttonData from './buttonData'
import handleDisplay from './handleDisplay'

// top level component for handling the calculator, including state for combined display: "display" and "calculation"
function Calculator() {

    const [output, setOutput] = useState({display: "0", calculation: ""})

    let input = {value: "", type: ""}

    useEffect(() => {
        window.addEventListener("keydown", handleChange)
        return () => {
            window.removeEventListener("keydown", handleChange)
        }
    })

// handle click for button clicks
    function handleClick(e) {
        input = {
            value: e.currentTarget.getAttribute("keypad"),
            type: e.currentTarget.getAttribute("type")
            }
        setOutput(output => (handleDisplay(input, output)))
      }

// handle change for keyboard entries
    function handleChange(e) {
        if (buttonData.map(item => item.keypad).includes(e.key)) {
          input = {
                value: e.key,
                type: buttonData.filter(item => item.keypad === e.key)[0].type
                }
          setOutput(output => (handleDisplay(input, output)))
        }
    }

    const buttonComponents = buttonData.map(button =>
        <Button
            key={button.pid}
            id={button.id}
            keypad={button.keypad}
            tag={button.tag}
            type={button.type}
            position={button.position}
            handleClick={handleClick}/>
    )

    return (
        <div id="Calculator">
            <Screen
                display={output.display}
                calculation={output.calculation}
                handleChange={handleChange}/>
            {buttonComponents}
        </div>
    )

}

export default Calculator
