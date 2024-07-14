import React from 'react'
import { Text } from 'ink'

function LabelText({
  children,
  label,
}: {
  children: string
  label: string
}) {
  return (
    <Text>
      <Text bold>{label} </Text>
      <Text underline>{children}</Text>
    </Text>
  )
}

export { LabelText }
