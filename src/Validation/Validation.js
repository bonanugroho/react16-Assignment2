import React from 'react';

const validation = (props) => {
    return (
        <div> 
            {
                props.inputLength > 5 ?
                    <p>Text long enough, length = {props.inputLength}</p> :
                    <p>Text to Short, length = {props.inputLength}</p>
            }
        </div>

    )
};

export default validation;