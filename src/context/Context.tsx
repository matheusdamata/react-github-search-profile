import React, { createContext, ReactNode, useReducer } from 'react'
import { themeReducer, ThemeType } from '../reducer/themeReducer'

type ContextType = {
  status: ThemeType
  dispatch: React.Dispatch<any>
}

interface ContextProviderType {
  children: ReactNode
}

export const Context = createContext({} as ContextType)

export const ContextProvider = ({ children }: ContextProviderType) => {
  const [themeState, dispatch] = useReducer(themeReducer, {
    status: 'light',
  })

  const { status } = themeState

  return (
    <Context.Provider value={{ status, dispatch }}>{children}</Context.Provider>
  )
}
