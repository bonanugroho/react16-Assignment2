import React from 'react';

const validation = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength <= 5) {
        validationMessage = 'Text to Short';
    }

    return (
        <div> 
            <p>{validationMessage}, length = {props.inputLength}</p> :
        </div>

    )
};

export default validation;