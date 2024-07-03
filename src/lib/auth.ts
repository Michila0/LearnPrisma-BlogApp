import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import 'dotenv/config';

import prisma from "@/lib/db";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
}