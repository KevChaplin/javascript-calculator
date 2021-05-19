import React from 'react'

function Screen(props) {

    const styles = {gridArea: "a"}

    return (
        <div id="Screen" style={styles}>
            <p
                id="calculation">
                {props.calculation}
            </p>
            <input
                id="display"
                type="text"
                value={props.display}
                onChange={props.handleChange}
                >
            </input>
        </div>
    )
}

export default Screen
