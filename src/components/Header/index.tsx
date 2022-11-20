import { useContext } from 'react'

import { SunDim, Moon } from 'phosphor-react'
import { Container } from './styles'
import { Context } from '../../context/Context'

export function Header() {
  const { theme, dispatch } = useContext(Context)

  function handleSwitchTheme() {
    if (theme.status === 'dark') {
      dispatch({
        type: 'SWITCH_THEME',
        payload: 'light',
      })
    } else {
      dispatch({
        type: 'SWITCH_THEME',
        payload: 'dark',
      })
    }
  }

  return (
    <Container variant={theme.status}>
      <h1>Github Search Profile</h1>

      {theme.status === 'dark' ? (
        <button onClick={handleSwitchTheme}>
          LIGHT
          <SunDim size={24} weight="fill" />
        </button>
      ) : (
        <button onClick={handleSwitchTheme}>
          DARK
          <Moon size={24} weight="fill" />
        </button>
      )}
    </Container>
  )
}
