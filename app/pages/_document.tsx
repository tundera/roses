import {
  Document,
  Html,
  DocumentHead,
  DocumentContext,
  Main,
  BlitzScript /*DocumentContext*/,
} from "blitz"

import { InitializeColorMode } from "theme-ui"

class MyDocument extends Document {
  // Only uncomment if you need to customize this behaviour
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <DocumentHead />
        <body>
          <InitializeColorMode />
          <Main />
          <BlitzScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
