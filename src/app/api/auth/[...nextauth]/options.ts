// @Next Auth
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

interface ICredentials {
    email: string;
    password: string;
}

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),

        CredentialsProvider({
            name: "Credentials",
            credentials: {},

            async authorize(credentials, req) {
                const { email, password } = credentials as ICredentials;

                const response = await fetch("http://127.0.0.1:1337/api/auth/local", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        identifier: email,
                        password: password,
                    }),
                });

                const user = await response.json();
                console.log("user--->", user);

                if (response.ok && user) {
                    console.log("response.ok-->", response.ok);
                    console.log("usuario logueado");
                    return user.user;
                } else {
                    console.log("response.ok-->", response.ok);
                    console.log("usuario no logueado");
                    return null;
                }
            },
        }),
    ],

    // callbacks: {
    //     jwt({account, token, user, profile, session}){
    //         console.log({
    //             account,
    //             token,
    //             user,
    //             profile,
    //             session
    //         });

    //         return token

    //     },
    //     session() {

    //     }
    // },

    pages: {
        signIn: "/login",
    },

    session: {
        strategy: "jwt",
    },

    secret: process.env.NEXTAUTH_SECRET,
};
