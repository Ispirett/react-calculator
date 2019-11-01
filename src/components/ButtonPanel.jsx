import React from 'react'
import Button from "./Button";

export default () => (
     <div id={'#btn_panel'} style={styles.panel}>
          <div id={'btn_row-one'} className={'btn-row'}>
               <Button name={'AC'} color={'lightblue'} > </Button>
               <Button name={'+/-'}> </Button>
               <Button name={'%'}> </Button>
               <Button name={'÷'}  color={'lightblue'}> </Button>
          </div>
          <div id={'btn_row-two'} className={'btn-row'}>
               <Button name={'7'}> </Button>
               <Button name={'8'}> </Button>
               <Button name={'9'}> </Button>
               <Button name={'x'}  color={'lightblue'} > </Button>
          </div>
          <div id={'btn_row-three'} className={'btn-row'} >
               <Button name={'4'}> </Button>
               <Button name={'5'}> </Button>
               <Button name={'6'}> </Button>
               <Button name={'-'} color={'lightblue'}> </Button>
          </div>
          <div id={'btn_row-four'} className={'btn-row'} >
               <Button name={'1'}> </Button>
               <Button name={'2'}> </Button>
               <Button name={'3'} > </Button>
               <Button name={'+'} color={'lightblue'}> </Button>
          </div>
          <div id={'btn_row-four'} className={'btn-row'}>
               <Button name={'0'} wide color={'orange'} > </Button>
               <Button name={'.'}> </Button>
               <Button name={'='}  color={'lightblue'}> </Button>
          </div>
     </div>
)

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
