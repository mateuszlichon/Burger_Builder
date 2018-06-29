import React from 'react';

import classes from './Input.css';

const imput = (props) => {
    let inputElement = null;
import classes from './Input.css';


    switch (props.inputType) {
        case ('input'):
import classes from './Input.css';

            inputElement = <input className={classes.InputElement} {...props} />;
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement} {...props} />;
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}
export default imput;