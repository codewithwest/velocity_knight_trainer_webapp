import Image from "next/image";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  AwaitedReactNode,
  useContext,
  useEffect,
} from "react";
import ProgramCards from "./components/programCard";
import { usePrograms } from "./resolvers/usePrograms";
import { ApolloProvider } from "@apollo/client";
import client from "./providers/apollo";

export default async function Home() {
  // const programs_data = await fetch(`${process.env.GRAPHQL_API_URL}`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     query: `
  //  query {
  //   getPrograms(keys:1){
  //     id
  //     data
  //     keys
  //     type
  //     created_at
  //     updated_at
  //     private
  //   }
  // }
  // `,
  //   }),
  //   next: { revalidate: 10 },
  // })
  // .then((res) => res.json())
  // .catch((err) => console.log(err));

  // let all_programs = programs_data?.data?.getPrograms;

  return (
    <ApolloProvider client={client}>
      <main className="flex min-h-screen flex-col items-center justify-between p-5">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p
            className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 
        bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 text-2xl text-bold
        dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30"
          >
            Velocity Knight Trainer
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By <p className="text-xl">{" WestDynamics"}</p>
              {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            /> */}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap mx-auto container">
          {ProgramCards(usePrograms(client).all_programs)}
        </div>

        <div
          className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full 
      before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent
      before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3
      after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br
       before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff]
       after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"
        >
          {/* <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
        </div>
      </main>
    </ApolloProvider>
  );
}
