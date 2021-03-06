import React from 'react'

// handles all buttons on the calculator
function Button(props) {

    const styles = {gridArea: props.position}

    return (
        <div style={styles}>
            <button
                id={props.id}
                style={styles}
                keypad={props.keypad}
                type={props.type}
                onClick={(e) => props.handleClick(e)}>
                {props.tag}
            </button>
        </div>
    )
}

export default Button
