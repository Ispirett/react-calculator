import operate from "./operate";

export default (calculator, buttonName) => {
    let { total, next, operation } = calculator;
    const process = () => {
        switch (buttonName) {
            case '+/-':
                return operate(total, -1, 'x') + operate(next, -1, 'x');
            case 'AC':
                return 0;
            case '=':
                return operate(total, next, operation);
            default:
                return total
        }
    };
    return process()
}