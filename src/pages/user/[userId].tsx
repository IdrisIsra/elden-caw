import { type NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import Caw from "~/components/Caw";
import CawInput from "~/components/CawInput";
import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const router = useRouter();
  const userId = router.query.userId as string;
  
  const { data: cawData, isLoading: isCawLoading } = api.main.getOne.useQuery({ userId: userId ?? '' });
  const { data: authorData, isLoading: isAuthorLoading } =
    api.main.getUser.useQuery({ userId: userId ?? "" });
  
  
  if (isCawLoading || isAuthorLoading) return <div>Loading...</div>;

  return (
    <>
      <Head>
        <title>Elden Caw</title>

        <meta name="description" content="A souls-like-twitter-lite" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#181918] to-[#2f312a]">
        <div className="container flex flex-col items-center justify-center gap-6 py-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            <Link href="/">
              <span className="text-[hsl(41,32%,63%)]">Elden</span> Caw
            </Link>
          </h1>
          
          <div className="flex w-full flex-col gap-2 md:w-1/2">
            <div className="flex items-center gap-2 m-5">
              <Image
                src={authorData?.image || "/default-profile.png"}
                width={48}
                height={48}
                alt="Profile image"
                className="h-12 w-12 rounded-full"
              />
              <h2 className="text-2xl font-bold text-white">
                {authorData?.name}
              </h2>
            </div>
            {sessionData?.user.id == userId && <CawInput />}
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
