import React from 'react'
import './Select.css'

export default function Select(props) {
    const { variant= 'main', children, ...rest} = props
    return (
        <select className={`select ${variant}`} {...rest}>
            {children}
        </select>

        
    )
}
