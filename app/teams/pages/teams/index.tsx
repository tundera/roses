import React, { Suspense } from "react"
import { Head, Link, useQuery, BlitzPage } from "blitz"
import getTeams from "app/teams/queries/getTeams"

export const TeamsList = () => {
  const [teams] = useQuery(getTeams, { orderBy: { id: "desc" } })

  return (
    <ul>
      {teams.map((team) => (
        <li key={team.id}>
          <Link href="/teams/[teamId]" as={`/teams/${team.id}`}>
            <a>{team.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

const TeamsPage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Teams</h1>

        <p>
          {
            <Link href="/teams/new">
              <a>Create Team</a>
            </Link>
          }
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          <TeamsList />
        </Suspense>
      </main>
    </div>
  )
}

export default TeamsPage
