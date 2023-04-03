import { type NextPage } from "next";
import Head from "next/head";
import { signIn, signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import Caw from "~/components/Caw";
import CawInput from "~/components/CawInput";

const Home: NextPage = () => {
  const { data: cawData, isLoading } = api.main.getAll.useQuery();
  const { data: sessionData } = useSession();

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Elden Caw</title>
        <meta name="description" content="A souls-like-twitter-lite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#181918] to-[#2f312a]">
        <div className="container flex flex-col items-center justify-center gap-12 py-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            <span className="text-[hsl(41,32%,63%)]">Elden</span> Caw
          </h1>
          <div className="flex flex-col items-center justify-center">
            <p className="text-center text-2xl text-white">
              {sessionData && <span>Willkommen {sessionData.user?.name}</span>}
            </p>
            <button
              className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
              onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
              {sessionData ? "Sign out" : "Sign in to caw"}
            </button>
          </div>
          <div className="flex w-full flex-col gap-2 md:w-1/2">
            {sessionData && <CawInput />}
            {cawData?.map((caw) => (
              <Caw key={caw.id} {...caw} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
