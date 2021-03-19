import React from 'react'

export const Attribute = (props) => {
    return (
        <div className="text-center my-1">
            <span className="mr-2">{props.title}:</span>
            <b>{props.value}</b>
        </div>
    )
}