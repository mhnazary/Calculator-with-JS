let $ = document
let input = $.getElementById('input')
let buttons = $.querySelectorAll("button")
const oparatorChar = ["%", "*", "/", "+", "-", "="]
let output = ''

const calculate = (btnValue) => {
    if(btnValue === '=' && output !== ''){
        output = eval(output.replace("%", '/100'))
    } else if (btnValue ==="AC"){
        output = ''
    } else if (btnValue === "DEL"){
        output = output.toString().slice(0,-1)
    }else {
        if (output ==='' && oparatorChar.includes(btnValue)) {
            return
        }
        output += btnValue
    }

    input.value = output
}

buttons.forEach(function (button) {
    button.addEventListener('click', (e)=> {
        calculate(e.target.value)
    })
})