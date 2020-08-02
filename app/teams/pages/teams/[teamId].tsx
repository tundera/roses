import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage } from "blitz"

import { Button, Flex, Box } from "theme-ui"
import getTeam from "app/teams/queries/getTeam"
import deleteTeam from "app/teams/mutations/deleteTeam"
import updatePlayer from "app/players/mutations/updatePlayer"

export const Team = () => {
  const router = useRouter()
  const teamId = useParam("teamId", "number")
  const [team] = useQuery(getTeam, { where: { id: teamId } })

  const handleVote = async (id, votes) => {
    try {
      const updated = await updatePlayer({
        where: { id },
        data: { votes: votes + 1 },
      })
      alert("Success!" + JSON.stringify(updated))
    } catch (error) {
      alert("Error creating team " + JSON.stringify(error, null, 2))
    }
  }

  return (
    <Flex>
      <Box>
        <h1>{team.name}</h1>
        <ul>
          {team.players.map((player) => (
            <li key={player.id}>
              {player.name} - {player.votes} votes
              <button onClick={() => handleVote(player.id, player.votes)}>Vote</button>
            </li>
          ))}
        </ul>
      </Box>

      <Link href="/teams/[teamId]/edit" as={`/teams/${team.id}/edit`}>
        <a>Edit</a>
      </Link>

      <Button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteTeam({ where: { id: team.id } })
            router.push("/teams")
          }
        }}
      >
        Delete
      </Button>
    </Flex>
  )
}

const ShowTeamPage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>
          <Link href="/teams">
            <a>Teams</a>
          </Link>
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <Team />
        </Suspense>
      </main>
    </div>
  )
}

export default ShowTeamPage
