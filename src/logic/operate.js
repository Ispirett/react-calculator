import Big from 'big-js'
export default (...args) => {
    const [numberOne, numberTwo, operation] = args;
    let numOne = new Big(Number(numberOne));
    let numTwo = new Big(Number(numberTwo));
    const process = () =>{
        switch (operation) {
            case '÷':
                return numTwo === 0 || numOne === 0 ? 0 : numTwo / numOne;
            case 'x':
                return  numOne === 0 || numTwo === 0 ? 0 : numOne * numTwo;
            case '+':
                return numOne + numTwo;
            case '-':
                return numTwo - numOne;
            case '%':
                return (numTwo * 100 ) / numOne;
            default :
                return numOne + numTwo
        }
    };
    return process()
}