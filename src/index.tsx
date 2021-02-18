import React from 'react'
import * as reactDOM from 'react-dom'
// import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core'
import { ReactRouter } from './GlobalFiles/ReactRouter'
import { Provider } from 'react-redux'
import generateStore from './Redux/store'
// import { SnackbarProvider } from 'notistack'
// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#6ab7ff',
//       main: '#1e88e5',
//       dark: '#005cb2',
//       contrastText: '#ffffff',
//     },
//     secondary: {
//       light: '#ff6659',
//       main: '#d32f2f',
//       dark: '#9a0007',
//       contrastText: '#000000',
//     },
//   },
// })

let store = generateStore()

const Component: React.FC<{}> = () => (
  <Provider store={store}>
    <ReactRouter />
  </Provider>
)

reactDOM.render(<Component />, document.getElementById('app'))
