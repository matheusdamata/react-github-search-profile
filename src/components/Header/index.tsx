import { useState } from 'react'

import { SunDim, Moon } from 'phosphor-react'
import { Container } from './styles'

export function Header() {
  const [isLight, setIsLight] = useState(false)

  return (
    <Container>
      <h1>Github Search Profile</h1>

      {isLight ? (
        <button onClick={() => setIsLight(!isLight)}>
          DARK
          <Moon size={24} weight="fill" />
        </button>
      ) : (
        <button onClick={() => setIsLight(!isLight)}>
          LIGHT
          <SunDim size={24} weight="fill" />
        </button>
      )}
    </Container>
  )
}
