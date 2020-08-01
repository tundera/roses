import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage } from "blitz"
import getTeam from "app/teams/queries/getTeam"
import deleteTeam from "app/teams/mutations/deleteTeam"

export const Team = () => {
  const router = useRouter()
  const teamId = useParam("teamId", "number")
  const [team] = useQuery(getTeam, { where: { id: teamId } })

  return (
    <div>
      <h1>Team {team.id}</h1>
      <pre>{JSON.stringify(team, null, 2)}</pre>

      {
        <Link href="/teams/[teamId]/edit" as={`/teams/${team.id}/edit`}>
          <a>Edit</a>
        </Link>
      }

      <button
        type="button"
        onClick={async () => {
          if (window.confirm("This will be deleted")) {
            await deleteTeam({ where: { id: team.id } })
            router.push("/teams")
          }
        }}
      >
        Delete
      </button>
    </div>
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
          {
            <Link href="/teams">
              <a>Teams</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <Team />
        </Suspense>
      </main>
    </div>
  )
}

export default ShowTeamPage
