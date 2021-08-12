import React from 'react'

export default function Score({currentScore, bestScore}) {
  return (
    <div>
        <div>Current Score: {currentScore}</div>
        <div>Best Score: {bestScore}</div>
    </div>
  )
}
