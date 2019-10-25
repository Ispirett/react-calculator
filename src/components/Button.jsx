import  React from 'react'
import PropTypes from 'prop-types'

const  Button = (props) => (
    <button class='button' id={props.id} style={styles.button}>
        {props.name}
    </button>
);


Button.propTypes = {
 name: PropTypes.string.isRequired,
 id: PropTypes.string
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