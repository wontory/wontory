import React from 'react'
import { Box, Text } from 'ink'
import Gradient from 'ink-gradient'
import BigText from 'ink-big-text'
import { Badge } from './components/badge.js'
import { LabelText } from './components/label-text.js'

const techStack = [
  {
    name: 'TypeScript',
    colors: { backgroundColor: '#3178C6', textColor: 'white' },
  },
  { name: 'React', colors: { backgroundColor: '#61DAFB', textColor: 'black' } },
  {
    name: 'Next.js',
    colors: { backgroundColor: '#000000', textColor: 'white' },
  },
  {
    name: 'Tailwind CSS',
    colors: { backgroundColor: '#06B6D4', textColor: 'black' },
  },
]

const socialLinks = [
  {
    name: 'Email',
    url: 'devwontory@gmail.com',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/wontory',
  },
  {
    name: 'Website',
    url: 'https://www.wontory.dev',
  },
]

export default function App({ name = 'wontory' }: { name?: string }) {
  return (
    <>
      <Gradient name="mind">
        <BigText text={name} align="center" font="tiny" />
      </Gradient>
      <Box borderStyle="round" padding={1} flexDirection="column" gap={1}>
        <Box alignItems="center" flexDirection="column">
          <Text>Hey, you found me!</Text>
          <Text>
            I'm
            <Text bold>
              <Gradient name="atlas"> Wontory</Gradient>
            </Text>
            , Frontend Developer.
          </Text>
        </Box>
        <Box justifyContent="center" gap={1}>
          {techStack.map((tech) => (
            <Badge key={tech.name} {...tech.colors}>
              {tech.name}
            </Badge>
          ))}
        </Box>
        <Box alignItems="center" flexDirection="column">
          {socialLinks.map((social) => (
            <LabelText key={social.name} label={social.name}>
              {social.url}
            </LabelText>
          ))}
        </Box>
      </Box>
    </>
  )
}
