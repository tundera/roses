import React from "react"
import { Head, Link, useRouter, BlitzPage } from "blitz"

import createTeam from "app/teams/mutations/createTeam"
import TeamForm from "app/teams/components/TeamForm"

const NewTeamPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Create Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Create New Team</h1>

        <TeamForm
          initialValues={{}}
          onSubmit={async (event) => {
            try {
              const team = await createTeam({
                data: {
                  name: event.target[0].value,
                  city: event.target[1].value,
                  division: event.target[2].value,
                  coach: event.target[3].value,
                },
              })

              alert("Success!" + JSON.stringify(team))
              router.push("/teams/[teamId]", `/teams/${team.id}`)
            } catch (error) {
              alert("Error creating team " + JSON.stringify(error, null, 2))
            }
          }}
        />

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

export default NewTeamPage
