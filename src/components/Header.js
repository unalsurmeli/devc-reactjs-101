import React from 'react';

const Header = (props) => {
    return (
        <h1 style={styles.headerStyle}>
            {props.title}
        </h1>
    )
};

export default Header;

const styles = {
    headerStyle : {
        color: 'red'
    }
};
