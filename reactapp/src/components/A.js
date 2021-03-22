import React from 'react'

export default function A(props) {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer" 
      className={props.className || `text-indigo-400  hover:underline`}>
      {props.children}
    </a>
  )
}

