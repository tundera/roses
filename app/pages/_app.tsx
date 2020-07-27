import { AppProps } from "blitz"

import { ThemeProvider } from "theme-ui"

import Header from "../components/Header"
import theme from "../themes"
import GlobalStyles from "app/styles/GlobalStyles"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
