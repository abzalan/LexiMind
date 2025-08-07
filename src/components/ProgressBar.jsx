import React from 'react'

export default function ProgressBar(props) {
  const { text, remainder } = props
  const Arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className="level">
      <div>
        <h4>{text}</h4>
      </div>

      {Arr.map((element, elementIdx) => {
        return(
          <div className="level-bar" key={elementIdx}></div>
        )
      })}

      <div className="xp" style={{ width: `${remainder}%` }} ></div>
    </div>
  )
}
