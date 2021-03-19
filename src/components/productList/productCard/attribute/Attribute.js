import React from 'react'

import styles from './attribute.module.css'

export const Attribute = (props) => {
    return (
        <>
            <span className={styles.heavyFont}>{props.name}</span>
            <span className="mb-2">{props.value}</span>
        </>        
    )    
}