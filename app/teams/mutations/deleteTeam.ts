import db, { TeamDeleteArgs } from "db"

type DeleteTeamInput = {
  where: TeamDeleteArgs["where"]
}

export default async function deleteQuestion(
  { where }: DeleteTeamInput,
  ctx: Record<any, any> = {}
) {
  // TODO: remove once Prisma supports cascading deletes
  await db.player.deleteMany({ where: { team: { id: where.id } } })
  const team = await db.team.delete({ where })
  return team
}
