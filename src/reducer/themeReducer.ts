export type ThemeType = {
  status: 'dark' | 'light'
}

export const themeReducer = (state: ThemeType, action: any) => {
  switch (action.type) {
    case 'SWITCH_THEME': {
      return { ...state, status: action.payload.status }
    }
  }
  return state
}
