import { AppProps } from "blitz"

import { ThemeProvider } from "theme-ui"
import NProgress from "next-nprogress-emotion"

import Header from "../components/Header"
import theme from "../themes"

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Header />
      <NProgress color={theme.colors.primary} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
