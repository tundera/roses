import React, { Suspense } from "react"
import { Head, Link, useRouter, useQuery, useParam, BlitzPage } from "blitz"
import getTeam from "app/teams/queries/getTeam"
import updateTeam from "app/teams/mutations/updateTeam"
import TeamForm from "app/teams/components/TeamForm"

export const EditTeam = () => {
  const router = useRouter()
  const teamId = useParam("teamId", "number")
  const [team, { mutate }] = useQuery(getTeam, { where: { id: teamId } })

  return (
    <div>
      <h1>Edit Team {team.id}</h1>
      <pre>{JSON.stringify(team)}</pre>

      <TeamForm
        initialValues={team}
        onSubmit={async () => {
          try {
            const updated = await updateTeam({
              where: { id: team.id },
              data: {
                name: "MyTeam",
                city: "Default City",
                division: "Default Division",
                coach: "Default Coach",
              },
            })
            mutate(updated)
            alert("Success!" + JSON.stringify(updated))
            router.push("/teams/[teamId]", `/teams/${updated.id}`)
          } catch (error) {
            console.log(error)
            alert("Error creating team " + JSON.stringify(error, null, 2))
          }
        }}
      />
    </div>
  )
}

const EditTeamPage: BlitzPage = () => {
  return (
    <div>
      <Head>
        <title>Edit Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <EditTeam />
        </Suspense>

        <p>
          {
            <Link href="/teams">
              <a>Teams</a>
            </Link>
          }
        </p>
      </main>
    </div>
  )
}

export default EditTeamPage
