import db, { FindOnePlayerArgs } from "db"

type GetPlayerInput = {
  where: FindOnePlayerArgs["where"]
  // Only available if a model relationship exists
  // include?: FindOnePlayerArgs['include']
}

export default async function getPlayer(
  { where /* include */ }: GetPlayerInput,
  ctx: Record<any, any> = {}
) {
  const player = await db.player.findOne({ where })

  return player
}
