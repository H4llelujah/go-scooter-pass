import React from 'react'
import classes from './MyButton.module.css'

export default function MyButton({children, className, ...props}) {

  const combinedClasses = `${classes.btn} ${className || ''}`;

  return (
    <button {...props} className={combinedClasses}>
        {children}
     </button>
  )
}
