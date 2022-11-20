import produce from 'immer'

export type ThemeProps = {
  status: 'dark' | 'light'
}

export type ThemeType = {
  theme: ThemeProps
}

export const themeReducer = (state: ThemeType, action: any) => {
  switch (action.type) {
    case 'SWITCH_THEME': {
      return produce(state, (draft) => {
        draft.theme.status = action.payload
      })
    }
    default:
      return state
  }
}
