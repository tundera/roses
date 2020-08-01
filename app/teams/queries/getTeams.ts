import db, { FindManyTeamArgs } from "db"

type GetTeamsInput = {
  where?: FindManyTeamArgs["where"]
  orderBy?: FindManyTeamArgs["orderBy"]
  cursor?: FindManyTeamArgs["cursor"]
  take?: FindManyTeamArgs["take"]
  skip?: FindManyTeamArgs["skip"]
  // Only available if a model relationship exists
  // include?: FindManyTeamArgs['include']
}

export default async function getTeams(
  { where, orderBy, cursor, take, skip }: GetTeamsInput,
  ctx: Record<any, any> = {}
) {
  const teams = await db.team.findMany({
    where,
    orderBy,
    cursor,
    take,
    skip,
  })

  return teams
}
