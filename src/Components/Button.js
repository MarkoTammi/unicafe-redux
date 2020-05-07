

// Component to render button

import React from 'react';

const Button = ({ store, buttonText, type }) => {

    return (
        <button 
            type="button" 
            className="btn btn-outline-primary mr-1" 
            onClick={e => store.dispatch({ type: `${type}` })}
            >{buttonText}</button> 
    )
}

export default Button