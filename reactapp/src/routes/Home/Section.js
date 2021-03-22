import React from 'react'

export default function Section({title1, title2, children, className, c1, c2}) {
  return (
    <div className={`pb-12 ${className}`}>
      <h1 className="block text-3xl text-center p-16 leading-8 font-extrabold tracking-tight sm:text-4xl">
        <div className={c1}>{title1}</div>
        <div className={c2}>{title2}</div>
      </h1>
      {children}
    </div>
  )
}
