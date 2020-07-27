import React from "react"

import { Global } from "@emotion/core"

const GlobalStyles = (props) => (
  <Global
    styles={(theme) => ({
      "*": {
        boxSizing: "border-box",
      },
    })}
  />
)

export default GlobalStyles
