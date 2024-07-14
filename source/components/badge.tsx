import React, { type ReactNode } from 'react'
import { Text, TextProps } from 'ink'

function Badge({
  children,
  backgroundColor,
  textColor,
}: {
  children: ReactNode
  backgroundColor?: TextProps['backgroundColor']
  textColor?: TextProps['color']
}) {
  return (
    <Text backgroundColor={backgroundColor}>
      <Text color={textColor}> {children} </Text>
    </Text>
  )
}

export { Badge }
