import { AppProps } from "blitz"

import { ThemeProvider } from "theme-ui"
import { Global } from "@emotion/core"
import NProgress from "next-nprogress-emotion"

import Header from "../components/Header"
import theme from "../themes"
import GlobalStyles from "app/styles/GlobalStyles"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NProgress color={theme.colors.primary} />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
