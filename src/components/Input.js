import React, {Component} from 'react';

const Input = (props) => {
    return (
        <input style={styles.inputStyle} {...props}/>
    )
};

export default Input;

const styles = {
    inputStyle: {
        "display": "block",
        "boxSizing": "border-box",
        "width": "100%",
        "height": "2.4375rem",
        "padding": "0.5rem",
        "border": "1px solid #cacaca",
        "margin": "0 0 1rem",
        "fontFamily": "inherit",
        "fontSize": "1rem",
        "color": "#0a0a0a",
        "backgroundColor": "#fefefe",
        "boxShadow": "inset 0 1px 2px rgba(10, 10, 10, 0.1)",
        "borderRadius": "0",
        "transition": "box-shadow 0.5s, border-color 0.25s ease-in-out",
        "WebkitAppearance": "none"
    }
};
