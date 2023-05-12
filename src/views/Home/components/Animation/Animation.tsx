import { green } from '@mui/material/colors'
import { width } from '@mui/system'
import React, { useState, useEffect } from 'react'

type ShapeType = 'red-circle' | 'yellow-triangle' | 'blue-rectangle'

interface Shape {
  type: ShapeType
  x: number
  y: number
  speed: number
  rotation: number
  color: string
}

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max)
}

function Shape({ type, x, y, speed, rotation, color }: Shape): JSX.Element {
  let shapeStyle: React.CSSProperties
  if (type === 'red-circle') {
    shapeStyle = {
      width: 20,
      height: 20,
      border: `2px solid ${color}`,
      borderRadius: '50%',
      transform: `rotate(${rotation}deg)`,
    }
  } else if (type === 'yellow-triangle') {
    shapeStyle = {
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0 15px 20px 15px',
      borderColor:`transparent transparent ${color} transparent`,
      transform: `rotate(${rotation}deg)`,
    }
  } else {
    shapeStyle = {
      width: 20,
      height: 20,
      border: `2px solid ${color}`,
      transform: `rotate(${rotation}deg)`,
    }
  }

  return (
    <div style={{ ...shapeStyle, position: 'absolute', top: y, left: x }} />
  )
}

function Animation(): JSX.Element {
  const [shapes, setShapes] = useState<any[]>([])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const colors = ['#ff2f00be', '#ffb300b2','#04ff00b7', '#0048ffb9']
      const newShape = {
        type: ['red-circle', 'yellow-triangle', 'blue-rectangle'][
          getRandomInt(7)
        ],
        x: getRandomInt(900),
        y: -getRandomInt(900),
        speed: getRandomInt(4) + 1,
        rotation: getRandomInt(360),
        color: colors[getRandomInt(colors.length)],
      }
      setShapes((shapes) => [...shapes, newShape])
    }, 500)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    const animationId = requestAnimationFrame(() => {
      setShapes((shapes) =>
        shapes
          .map((shape) => {
            return { ...shape, y: shape.y + shape.speed }
          })
          .filter((shape) => shape.y < 500)
      )
    })

    return () => cancelAnimationFrame(animationId)
  }, [shapes])

  return (

    <div style={{ height: '0', zIndex: '-9', position: 'relative' }}>
      {shapes.map((shape, i) => (
        <Shape
          key={i}
          type={shape.type}
          x={shape.x}
          y={shape.y}
          speed={shape.speed}
          rotation={shape.rotation}
          color={shape.color}
        />
      ))}
    </div>
  )
}

export default Animation
