import React from 'react'
import './Grid.css'

export default function Grid(props) {
    const { variant= 'pile', children, ...rest} = props
    return (
        <div className={`grid ${variant}`} {...rest}>
            {children}
        </div>
    )
}
