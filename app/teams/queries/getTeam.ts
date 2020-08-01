import db, { FindOneTeamArgs } from "db"

type GetTeamInput = {
  where: FindOneTeamArgs["where"]
  // Only available if a model relationship exists
  // include?: FindOneTeamArgs['include']
}

export default async function getTeam(
  { where /* include */ }: GetTeamInput,
  ctx: Record<any, any> = {}
) {
  const team = await db.team.findOne({ where })

  return team
}
