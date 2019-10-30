import  React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const  Button = (props) => {
    const [wide, setWide] = useState('100px');
    useEffect(()=>{
        if(props.wide) setWide('200px');
    });
  return  <button class='button' id={props.id}
        style={ { padding: '1em',
        border: 'none',
        width: wide,
        fontSize: '.8em',
        margin: '.1em',
        backgroundColor: props.color,
        borderRadius: '2em',
        cursor: 'pointer'
        }}>
        {props.name}
    </button>
};


Button.propTypes = {
 name: PropTypes.string.isRequired,
 id: PropTypes.string,
 color: PropTypes.string,
 wide:PropTypes.bool,
};
Button.defaultProps = {
color: 'white',
wide: false

};

const  styles = {
    button:{
        padding: '1em',
        border: 'none',
        width: '80px',
        fontSize: '.8em',
        backgroundColor: 'white',
    }
};

export default Button