import React from 'react'
import Button from "./Button";

export default (props) => {
    const handleClick = (buttonName) => {
        //console.log(buttonName);
        return props.clickHandler(buttonName)
    };

   return( <div id={'#btn_panel'} style={styles.panel} >
        <div id={'btn_row-one'} className={'btn-row'}>
            <Button name={'AC'} color={'lightblue'} clickHandler={() => handleClick("AC")}> </Button>
            <Button name={'+/-'} clickHandler={() => handleClick("+/-")}> </Button>
            <Button name={'%'} clickHandler={() => handleClick("%")}> </Button>
            <Button name={'÷'} color={'lightblue'} clickHandler={() => handleClick("÷")}> </Button>
        </div>
        <div id={'btn_row-two'} className={'btn-row'}>
            <Button name={'7'} clickHandler={() => handleClick("7")}> </Button>
            <Button name={'8'} clickHandler={() => handleClick("8")}> </Button>
            <Button name={'9'} clickHandler={() => handleClick("9")}> </Button>
            <Button name={'x'} color={'lightblue'} clickHandler={() => handleClick("x")}> </Button>
        </div>
        <div id={'btn_row-three'} className={'btn-row'}>
            <Button name={'4'} clickHandler={() => handleClick("4")}> </Button>
            <Button name={'5'} clickHandler={() => handleClick("5")}> </Button>
            <Button name={'6'} clickHandler={() => handleClick("6")}> </Button>
            <Button name={'-'} color={'lightblue'} clickHandler={() => handleClick("-")}> </Button>
        </div>
        <div id={'btn_row-four'} className={'btn-row'}>
            <Button name={'1'} clickHandler={() => handleClick("1")}> </Button>
            <Button name={'2'} clickHandler={() => handleClick("2")}> </Button>
            <Button name={'3'} clickHandler={() => handleClick("3")}>  </Button>
            <Button name={'+'} color={'lightblue'} clickHandler={() => handleClick("+")}> </Button>
        </div>
        <div id={'btn_row-four'} className={'btn-row'}>
            <Button name={'0'} wide color={'orange'} clickHandler={() => handleClick("0")}> </Button>
            <Button name={'.'} clickHandler={() => handleClick(".")}> </Button>
            <Button name={'='} color={'lightblue'} clickHandler={() => handleClick("=")}> </Button>
        </div>
    </div>)
}

const  styles = {
    panel:{
        width: '700px',
        display:'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '1em',
        boxShadow: '0 4px 20px grey'
    }
};
