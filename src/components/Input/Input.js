import React from 'react'
import './Input.css';

export default function Input(props) {
    const { variant= 'long', children, ...rest} = props
    return (
        <input className={`input ${variant}`} {...rest}>
            {children}
        </input>
    )
}
