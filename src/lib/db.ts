export async function getDb() {
  if (typeof window !== "undefined") {
    throw new Error("DB só pode ser usado no servidor");
  }
  const dbModule = await import("../server/db");
  return dbModule.default;
}
