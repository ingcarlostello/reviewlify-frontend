// @Next Auth
import { getServerSession } from "next-auth";



export default async function Home() {
  // const session = await getServerSession(authOptions);
  // console.log(session);

  return (
    <main>
      Home Page
    </main>
  )
}


// /api/auth/signout