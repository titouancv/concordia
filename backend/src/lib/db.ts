import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const adapter = new PrismaPg(pool);

export const prisma = new PrismaClient({ adapter });

let isDbConnected = false;

// Test de connexion à la base de données
export async function testDbConnection(): Promise<boolean> {
  try {
    await prisma.$connect();
    // Vérifier que les tables existent
    await prisma.user.count();
    isDbConnected = true;
    console.log("Base de données connectée et opérationnelle.");
    return true;
  } catch (error) {
    console.error("Mode offline activé (Base de données inaccessible):", error);
    isDbConnected = false;
    return false;
  }
}

export function isDbAvailable(): boolean {
  return isDbConnected;
}

// Initialiser la connexion au démarrage
testDbConnection();
