import React from 'react'
import './Title.css'

export default function Title(props) {
    const {variant= 'title1', children, ...rest} = props
    return (
        <label className={`label ${variant}`} {...rest}>
            {children}
        </label>
    )
}
