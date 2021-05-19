// calculate follows formula logic
function calculate(str) {

    // array of all numbers and operators from calculation
    let calcArr = str.match(/[0-9,/,*,\-,+,.]+(?=\s)/g)

    // find and perform all multiplication
    for (let i=0; i<=calcArr.length; i++) {
        if(calcArr[i] === "*") {
            calcArr.splice(i-1, 3, (parseFloat(calcArr[i-1]) * parseFloat(calcArr[i+1])))
            i=-1
        }
    }

    // find and perform all division
    for (let i=0; i<=calcArr.length; i++) {
        if(calcArr[i] === "/") {
            calcArr.splice(i-1, 3, (parseFloat(calcArr[i-1]) / parseFloat(calcArr[i+1])))
            i=-1
        }
    }

    // find and perform all addition and subtraction
    for (let i=0; i<=calcArr.length; i++) {
        if (calcArr[i] === "+") {
            calcArr.splice(i-1, 3, (parseFloat(calcArr[i-1]) + parseFloat(calcArr[i+1])))
            i=-1
        } else if (calcArr[i] === "-") {
            calcArr.splice(i-1, 3, (parseFloat(calcArr[i-1]) - parseFloat(calcArr[i+1])))
            i=-1
        }
    }

    // if calculation is a single number, number will not have passed through above loops and will still be a string
    let result = parseFloat(calcArr[0])

    //below function used to round while omitting rounding errors
    return Math.round((result + Number.EPSILON) * 1000000000) / 1000000000
}

export default calculate
