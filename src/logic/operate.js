import Big from 'big-js'
export default (...args) => {
    const [numberOne, numberTwo, operation] = args;
    let numOne = new Big(numberOne);
    let numTwo = new Big(numberTwo);
    const process = () =>{
        switch (operation) {
            case '÷':
                return numOne / numTwo;
            case 'x':
                return numOne * numTwo;
            case '+':
                return numOne + numTwo;
            case '-':
                return numOne - numTwo;
            case '%':
                return numOne % numTwo;
            default :
                return numOne + numTwo
        }
    };
    return process()
}