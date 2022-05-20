const theme = {
  fontFamily: {
    sans: `'Interstate', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    heading: `'degular-display', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`
  },

  fontSizes: {
    sm: 12,
    regular: 16,
    lg: 24,
    heading: 48
  },

  colors: {
    bg: '#fff',

    neutral: {
      50: '#fafafa',
      100: '#f4f4f4',
      200: '#e4e4e7',
      300: '#d4d4d8',
      400: '#a1a1aa',
      500: '#71717a',
      600: '#52525b',
      700: '#3f3f46',
      800: '#27272a',
      900: '#18181b'
    }
  },

  breakpoints: {
    md: `(min-width: 768px)`
  }
}

export { theme }
