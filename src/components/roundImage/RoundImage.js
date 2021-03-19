import React from 'react'

import styles from './roundImage.module.css'

export const RoundImage = (props) => { 
    return (
        <div 
            className={styles.imageContainer} 
            style={{
                backgroundImage: `url(${props.imgSrc})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: props.height || '200px',
                width: props.width || '200px'
            }}>        
        </div>
    )
}