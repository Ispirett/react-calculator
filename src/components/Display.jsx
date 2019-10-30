import React, {useState} from 'react'
import PropTypes from  'prop-types'

const Display = (props) => {
return(
    <div id = {'display'}style={styles.display}>
        {props.value}
    </div>
)
};
export default  Display

const styles = {
    display:{
        backgroundColor: 'rgba(255,255,255,0.81)',
        color: 'black',
        padding: '1em',
        height: '3em',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    }
};

Display.defaultProps ={
    result: '0',
    value: 0
};
Display.propTypes = {
    result: PropTypes.string,
    value: PropTypes.number
};