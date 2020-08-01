import db, { TeamCreateArgs } from "db"

type CreateTeamInput = {
  data: TeamCreateArgs["data"]
}
export default async function createTeam({ data }: CreateTeamInput, ctx: Record<any, any> = {}) {
  const team = await db.team.create({ data })

  return team
}
