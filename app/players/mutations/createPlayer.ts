import db, { PlayerCreateArgs } from "db"

type CreatePlayerInput = {
  data: PlayerCreateArgs["data"]
}
export default async function createPlayer(
  { data }: CreatePlayerInput,
  ctx: Record<any, any> = {}
) {
  const player = await db.player.create({ data })

  return player
}
