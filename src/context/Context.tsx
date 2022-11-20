import React, { createContext, ReactNode, useReducer } from 'react'
import { themeReducer, ThemeProps } from '../reducer/themeReducer'

type ContextType = {
  theme: ThemeProps
  dispatch: React.Dispatch<any>
}

interface ContextProviderType {
  children: ReactNode
}

export const Context = createContext({} as ContextType)

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [themeState, dispatch] = useReducer(themeReducer, {
    theme: {
      status: 'dark',
    },
  })

  const { theme } = themeState

  return (
    <Context.Provider value={{ theme, dispatch }}>{children}</Context.Provider>
  )
}
