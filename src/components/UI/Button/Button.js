import React from 'react';

import classes from './Button.css';

const button = () => (
    <button
        className={[claases.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>{props.children}</button>
);

export default button;