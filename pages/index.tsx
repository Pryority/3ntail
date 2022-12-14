import Head from "next/head";
// import Image from "next/image";
// import Link from "next/link";

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen w-full justify-start items-start p-8'>
      <Head>
        <title>3ntail</title>
        <meta name="description" content="Generated by 3ntail" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"flex flex-col space-y-16 w-full"}>
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex flex-col justify-end md:items-end">
            <div className="flex flex-row justify-center items-center space-x-4">
              <a href="https://nextjs.org" className='text-5xl font-extrabold lowercase tracking-tighter italic text-orange-700'>3ntail</a>
              <p className="text-4xl opacity-25 cursor-default">3️⃣🪶</p>
            </div>
            <h1 className={"font-light text-sm text-orange-100"}>
              Thirdweb, Next.js, Tailwind starter site for instant experimentation
            </h1>
          </div>
        </div>

        <div className={"grid h-full space-y-4 md:space-y-8 lg:space-y-12 cursor-default items-between"}>
          <a
            href="https://nextjs.org/docs/getting-started"
            className={"flex flex-col cursor-default"}
          >
            <h2 className='dependency-section'>HTML/React Framework: Next &rarr;</h2>
            {/* insert Next.js bio */}
            <p className="dependency-description">
              Next.js is a flexible React framework that gives you building blocks to create fast web applications.
            </p>
          </a>

          <a href="https://tailwindcss.com/docs/guides/nextjs" className={"flex flex-col cursor-default"}>
            <h2 className='dependency-section'>CSS Framework: Tailwind &rarr;</h2>
            {/* insert tailwind bio */}
            <p className="dependency-description">
              A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
            </p>
          </a>

          <a href="https://thirdweb.com/" className={"flex flex-col cursor-default"}>
            <h2 className='dependency-section'>Blockchain Dashboard, SDKs, Contracts: Thirdweb &rarr;</h2>
            {/* insert thirdweb bio */}
            <p className="dependency-description">
              The complete web3 development framework. Smart contracts you control. Powerful SDKs and intuitive tools for developers. Ship on-chain faster.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
