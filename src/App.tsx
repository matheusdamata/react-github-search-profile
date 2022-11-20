import { useContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Context } from './context/Context'
import { GlobalStyle } from './css/global'
import { defaultTheme } from './css/themes/default'
import { Router } from './Router'

export function App() {
  const { theme } = useContext(Context)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <div
          style={{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            backgroundColor: theme.status === 'light' ? '#f1f1f1' : '#141c30',
          }}
        >
          <Router />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
