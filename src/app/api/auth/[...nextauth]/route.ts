import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        CredentialsProvider({

            name: "Credentials",
            credentials: {
                email: {
                    label: "email",
                    type: "text"
                },
                password: {
                    label: "password",
                    type: "password"
                },
            },
            async authorize(credentials, req) {

                console.log('credentials--->', credentials);
           

                return {} as any
            }
        }),
    ],

    pages: {

        signIn: '/auth/login',
//        signOut: '/auth/signout',
       

    }
});

export { handler as GET, handler as POST };
