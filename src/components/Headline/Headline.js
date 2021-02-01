import React from 'react'
import './Headline.css'

export default function Headline(props) {
    const {variant='h1', children, ...rest} = props
    return (
        <h1 className={`headline ${variant}`} {...rest}>
            {children}
        </h1>
    )
}
