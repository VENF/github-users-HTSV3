import { useEffect, useState } from "react"

import { ThemeProvider, StylesProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"

import { useTheme } from "hooks"

const MyApp = ({ Component, pageProps }) => {
  const { theme } = useTheme(0);
  const [key, setKey] = useState()

  useEffect(() => {
    setKey(1)
  }, [])

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <StylesProvider key={key}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
    </StylesProvider>
  )
}

export default MyApp;