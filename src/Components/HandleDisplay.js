// import buttonData from './buttonData'
import calculate from './calculate'

function HandleDisplay(output, input) {

    let display = output.display
    let calculation = output.calculation
    let displayType = (/(\d+|\.)$/).test(display) ? "number" : "operator"
    let isCalcLastNumber = (/\d$/).test(calculation)          // is final part of calculation a number?
    let isNewCalc = (/=$/).test(calculation)                  // has a new total just been calculated?

    // Following is the logic for controlling output (calculation and display) based on input

    if (input.value === "c") {                                  // Case for clear button "C"
        calculation = ""
        display = "0"

    } else if (calculation.length >= 90) {                      // set max length for calculation
        return {
            display: display,
            calculation: calculation
        }

    } else if (input.value === "Enter") {                       // Case for calculate "="
        if (!isNewCalc) {                                       // Key only has effect if total has not just been calculated
            if(displayType ===  "number") {
                calculation = calculation + " " + display + " ="
            } else if (!isCalcLastNumber){                      // If final part of calculation is not a number (an operator), replace with "="
                calculation = calculation.replace(/[/,*,-,+]$/g , "=")
            } else {
                calculation = calculation + " ="
            }
            display = calculate(calculation)
        }

    } else if((displayType ===  "number") && (input.type === "number")) {
        if (isNewCalc) {                                        // If total has been just calculated, clear display and calculation
            calculation = ""
            display ="0"
        } else if (display.length < 9) {                           // add additional digits only if display is less than 9 digits
            switch(input.value) {
                case "0":
                    display === "0" ? display = "0"
                    : display === "-0" ? display = "-0"             // to prevent more than one zero at beginning
                    : display = display + input.value
                    break;
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                    display === "0" ? display = input.value
                    : display = display + input.value
                    break;
                case ".":
                    if (!display.includes(".")) {
                        display = display + "."
                    }                                               // to prevent more than one decimal
                    break;
                default:                                            // default not required, included as per recommendation
                }
        }

        } else if ((displayType ===  "number") && (input.type === "operator")) {
            if (isNewCalc) {
                calculation = display                           // if new total has just been calculated,
                display =input.value                            // prepare to perform new operation on total
            } else {
                calculation = calculation + " " + display
                display = input.value
            }

        } else if ((displayType ===  "operator") && (input.type === "number")) {
            if (display === "-") {
                if (isCalcLastNumber) {                             // if calculation ends in number, minus is moved to calculation
                    calculation = calculation + " " + display
                    display = input.value
                } else if (input.value === ".") {                   // input preceding "0" for negative decimal numbers
                    display = "-0."
                } else {
                    display = display + input.value}                // else (calculation ends in operation) minus is kept in display to create negative number
            } else {
                calculation = calculation + " " + display           // for other operators, display operator is moved to calculation
                if (input.value === ".") {
                    display = "0."
                } else {
                    display = input.value
                }
            }

        } else if ((displayType ===  "operator") && (input.type === "operator")) {
            if ((input.value === "-") && (isCalcLastNumber)) {      // if input is minus and calculation ends in number,
                calculation = calculation + " " + display           // display operator moved to calculation,
                display = input.value                               // input minus is set as display for negative number
            } else if (isCalcLastNumber) {                          // else (for other input operator)
                display = input.value                               // display operator is replaced with new input operator
            }                                                       // else (calculation ends in operator) new input operator is ignored
        }

    return {
        display: display,
        calculation: calculation
    }

}

export default HandleDisplay
