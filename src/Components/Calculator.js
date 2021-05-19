import React, {useState, useEffect} from 'react'
import Button from './Button'
import Screen from './Screen'
import buttonData from './buttonData'
import HandleDisplay from './HandleDisplay'

function Calculator() {

    const [input, setInput] = useState({value: ""})
    const [output, setOutput] = useState({display: "0", calculation: ""})

    useEffect(() => {
        window.addEventListener("keydown", handleChange)
        return () => {
            window.removeEventListener("keydown", handleChange)
        }
    })

    function handleClick(e) {
        setInput(
            {
            value: e.currentTarget.getAttribute("keypad"),
            type: e.currentTarget.getAttribute("type")
            }
        )}

    function handleChange(e) {
        if (buttonData.map(item => item.keypad).includes(e.key)) {
            setInput(
                {
                value: e.key,
                type: buttonData.filter(item => item.keypad === e.key)[0].type
                }
            )
        }
    }

    useEffect(() => {
        setOutput(output => (HandleDisplay(output, input)))
        }, [input]
    )

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
