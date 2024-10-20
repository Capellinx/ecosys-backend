-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ANALISTA', 'CONDUTOR', 'PESQUISADOR', 'ATA', 'ADMIN');

-- CreateEnum
CREATE TYPE "PersonType" AS ENUM ('CONDUTOR', 'PESQUISADOR', 'VOLUNTARIO', 'ATA', 'ANALISTA');

-- CreateEnum
CREATE TYPE "RegistrationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "collaborators" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(250) NOT NULL,
    "email" VARCHAR(200) NOT NULL,
    "matricula" VARCHAR(100),
    "cpf" VARCHAR(11) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "password" TEXT NOT NULL,
    "person_type" "PersonType" NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "registration_status" "RegistrationStatus" NOT NULL DEFAULT 'PENDING',
    "first_login" BOOLEAN NOT NULL DEFAULT true,
    "public_id" VARCHAR(200),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "collaborators_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "collaborators_email_key" ON "collaborators"("email");

-- CreateIndex
CREATE UNIQUE INDEX "collaborators_cpf_key" ON "collaborators"("cpf");
