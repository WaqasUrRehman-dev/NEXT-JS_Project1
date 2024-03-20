"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function page() {


  const { status: sessionStatus, data: session } = useSession();
  const router = useRouter();
  console.log(sessionStatus, session);
  return (
    <div>
      <h1>Welcome to my Next.js App</h1>

      {sessionStatus === "loading" ? (
        "Loading..."
      ) : session ? (
        <>
          <div className="flex justify-between items-center mx-3">
          Hi, {session.user.name} <br />
          <Image className="rounded-full" src={session.user.image} width="30" height="30" />
        
          </div>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <button onClick={() => router.push('/login')}>Sign in</button>
        </>
      )}
    </div>
  );
}
