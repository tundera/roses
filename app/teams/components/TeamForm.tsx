import React, { useEffect, useState } from "react"

import { Flex, Box } from "theme-ui"
import Select, { Option } from "rc-select"

import getTeams from "app/teams/queries/getTeams"

type TeamFormProps = {
  initialValues: any
  onSubmit: React.FormEventHandler<HTMLFormElement>
}

const TeamForm = ({ initialValues, onSubmit }: TeamFormProps) => {
  const [teamOptions, setTeamOptions] = useState([])
  const [teamCount, setTeamCount] = useState(0)

  useEffect(() => {
    const getTeamOptions = async () => {
      const teams = await getTeams({ where: { id: { not: undefined } } })
      const options = teams.map((team) => {
        const { name, id } = team
        return {
          value: id,
          label: name,
        }
      })

      getTeamOptions()

      setTeamOptions(options)
      setTeamCount(teams.length)
    }
  }, [])

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event)
      }}
    >
      <h1>Update Team</h1>
      <h2>Team Count: {teamCount ?? "Unavailable"}</h2>
      <Flex>
        <Box>
          <Select>
            {teamOptions
              ? teamOptions.map((teamOption) => {
                  const { value, label } = teamOption
                  return <Option value={value}>{label}</Option>
                })
              : null}
            <Option value="jack">jack</Option>
            <Option value="lucy">lucy</Option>
            <Option value="yiminghe">yiminghe</Option>
          </Select>
        </Box>
      </Flex>
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
