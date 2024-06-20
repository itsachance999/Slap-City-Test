/* eslint-disable new-cap */
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import * as Prisma from '@prisma/client';
import NextAuth from 'next-auth';

const prisma = new Prisma.PrismaClient();

export default NextAuth({
    providers: [],
    adapter: PrismaAdapter(prisma),
});
