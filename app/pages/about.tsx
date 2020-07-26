import { Styled, Flex, Box } from "theme-ui"

import { NextPage } from "next"

const About: NextPage = () => (
  <Flex>
    <Box
      sx={{
        maxWidth: 1024,
        mx: "auto",
        p: 3,
      }}
    >
      <Styled.h1>Hello</Styled.h1>
    </Box>
  </Flex>
)

export default About
