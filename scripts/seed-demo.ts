import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("password", 10);

  const demoAccounts = [
    {
      email: "manufacturer@demo.com",
      firstName: "Demo",
      lastName: "Manufacturer",
      role: "MANUFACTURER",
      segment: "Manufacturer",
      companyName: "Global Manufacturing Node",
    },
    {
      email: "individual@demo.com",
      firstName: "Demo",
      lastName: "Individual",
      role: "INDIVIDUAL_BUYER",
      segment: "Individual",
      companyName: "Private Sourcing",
    },
    {
      email: "wholesaler@demo.com",
      firstName: "Demo",
      lastName: "Wholesaler",
      role: "BUSINESS_BUYER",
      segment: "Wholesaler",
      companyName: "Wholesale Distribution Corp",
    },
    {
      email: "corporate@demo.com",
      firstName: "Demo",
      lastName: "Corporate",
      role: "BUSINESS_BUYER",
      segment: "Corporate",
      companyName: "Fortune 500 Enterprise",
    },
    {
      email: "supplier@demo.com",
      firstName: "Demo",
      lastName: "Supplier",
      role: "BUSINESS_BUYER",
      segment: "Supplier",
      companyName: "Strategic Supply Chain Ltd",
    },
    {
      email: "government@demo.com",
      firstName: "Demo",
      lastName: "Government",
      role: "BUSINESS_BUYER",
      segment: "Government",
      companyName: "National Procurement Agency",
    },
  ];

  console.log("Seeding demo accounts...");

  for (const account of demoAccounts) {
    try {
      await prisma.user.upsert({
        where: { email: account.email },
        update: {},
        create: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(account as any),
          password,
          status: "VERIFIED",
        },
      });
      console.log(`Created/Verified: ${account.email}`);
    } catch (err: unknown) {
      const error = err as Error;
      if (error.message.includes("Unknown argument")) {
        console.log(`Bypassing client check for ${account.email}...`);
        await prisma.$executeRawUnsafe(
          `INSERT INTO "User" ("id", "email", "password", "firstName", "lastName", "companyName", "segment", "role", "status", "updatedAt") 
           VALUES (gen_random_uuid()::text, $1, $2, $3, $4, $5, $6, $7::"UserRole", 'VERIFIED', NOW())
           ON CONFLICT ("email") DO NOTHING`,
          account.email, password, account.firstName, account.lastName, account.companyName, account.segment, account.role
        );
         console.log(`Created via Raw: ${account.email}`);
      } else {
        throw err;
      }
    }
  }

  console.log("Seeding completed successfully.");
}

main()
  .catch((e: unknown) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
