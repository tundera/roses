import db, { TeamUpdateArgs } from "db"

type UpdateTeamInput = {
  where: TeamUpdateArgs["where"]
  data: TeamUpdateArgs["data"]
}

export default async function updateTeam(
  { where, data }: UpdateTeamInput,
  ctx: Record<any, any> = {}
) {
  // Don't allow updating
  //   delete data.id

  const team = await db.team.update({ where, data })

  return team
}
