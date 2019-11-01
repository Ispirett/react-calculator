import  React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const  Button = (props) => {
    const [wide, setWide] = useState('25%');
    useEffect(()=>{
        if(props.wide) setWide('50%');
    });

    const styles = {
          padding: '1em',
            border: 'none',
            width: wide,
            fontSize: '.8em',
            backgroundColor: props.color,
            borderRadius: '2em',
            cursor: 'pointer'
    };

  return  <button
            class='button'
            id={props.id}
            style={styles}>
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



export default Button