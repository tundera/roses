import React from "react"

import { Flex, Box } from "theme-ui"
// import Select, { Option } from "rc-select"

type TeamFormProps = {
  initialValues: any
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const TeamForm = ({ initialValues, onSubmit }: TeamFormProps) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event)
      }}
    >
      <h1>Update Team</h1>
      {/* <Flex>
        <Box>
          <Select>
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </Box>
      </Flex> */}
      <input placeholder="Team ID" />
      <input placeholder="Team Name" />
      <input placeholder="City" />
      <input placeholder="Division" />
      <input placeholder="Coach" />
      <div>{JSON.stringify(initialValues)}</div>
      <button>Submit</button>
    </form>
  )
}

export default TeamForm
