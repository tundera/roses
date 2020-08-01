import db, { FindManyPlayerArgs } from "db"

type GetPlayersInput = {
  where?: FindManyPlayerArgs["where"]
  orderBy?: FindManyPlayerArgs["orderBy"]
  cursor?: FindManyPlayerArgs["cursor"]
  take?: FindManyPlayerArgs["take"]
  skip?: FindManyPlayerArgs["skip"]
  // Only available if a model relationship exists
  // include?: FindManyPlayerArgs['include']
}

export default async function getPlayers(
  { where, orderBy, cursor, take, skip }: GetPlayersInput,
  ctx: Record<any, any> = {}
) {
  const players = await db.player.findMany({
    where,
    orderBy,
    cursor,
    take,
    skip,
  })

  return players
}
