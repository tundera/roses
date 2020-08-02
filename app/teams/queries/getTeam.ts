import db, { FindOneTeamArgs } from "db"

type GetTeamInput = {
  where: FindOneTeamArgs["where"]
  // Only available if a model relationship exists
  include?: FindOneTeamArgs["include"]
}

export default async function getQuestion(
  { where /* include */ }: GetTeamInput,
  ctx: Record<any, any> = {}
) {
  const team = await db.team.findOne({ where, include: { players: true } })
  return team
}
