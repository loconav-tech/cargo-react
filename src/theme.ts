type Theme = any;

export const theme: Theme = {
  breakpoints: ['38em'],
  space: [0, 5, 10, 15, 30, 60],
  fonts: {
    body:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
  },
  fontSizes: ['16px', '20px'],
  lineHeights: {
    normal: 1.5
  },
  colors: {
    black: 'hsl(0, 0%, 0%)',
    white: '#fff',
    grey: 'hsl(208, 16%, 90%)',
    green: 'hsl(142, 68%, 80%)',
    blue: 'hsl(216.2, 98%, 61.2%)',
    yellow: 'hsl(54, 100%, 97%)'
  },
  easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
  headingStyles: {
    bordered: {
      padding: 10,
      border: '2px solid red'
    },
    underlined: {
      textDecoration: 'underline',
      textDecorationColor: '#E18728'
    }
  }
};
