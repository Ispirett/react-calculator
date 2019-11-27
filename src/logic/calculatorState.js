export default (buttonName) =>{
    let array = [];
    if(/[0-9]/.test(buttonName)){
        if(array.length === 0){
            array.push("num")
        }
        else{
            array.pop();
        }

    }
    if(/[%÷x+-]/.test(buttonName) ){
        array.pop();
        array.push("operation")
    }

    if(buttonName === '=' || buttonName === "AC" || buttonName === "+/-"){
        array.pop();
        array.push("special")
    }
    return array[0]
};
