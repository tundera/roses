import db, { PlayerUpdateArgs } from "db"

type UpdatePlayerInput = {
  where: PlayerUpdateArgs["where"]
  data: PlayerUpdateArgs["data"]
}

export default async function updatePlayer(
  { where, data }: UpdatePlayerInput,
  ctx: Record<any, any> = {}
) {
  // Don't allow updating
  //   delete data.id

  const player = await db.player.update({ where, data })

  return player
}
