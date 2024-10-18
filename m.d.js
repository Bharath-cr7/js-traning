function addation() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const result = num1 + num2;
    document.getElementById('result').innerHTML = `Addation Result: ${result}`;
}

function subtraction(){
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const result = num1 - num2;
    document.getElementById('result').innerHTML =`Subtraction Result: ${result} `

}
