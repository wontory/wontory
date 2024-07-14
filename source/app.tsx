import React from 'react'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'

export default function App({ name = 'wontory' }: { name?: string }) {
  return (
    <Gradient name="mind">
      <BigText text={name} align="center" font="simple3d" />
    </Gradient>
  )
}
