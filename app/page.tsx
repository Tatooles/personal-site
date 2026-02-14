import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            Recent Posts
          </h2>
          <div className="flex flex-col gap-3">
            <a
              href="/blog/creating-the-lifting-log"
              className="group flex flex-col gap-1 rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <h3 className="font-medium text-black dark:text-zinc-50 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                Creating The Lifting Log
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Description for creating the lifting log post
              </p>
            </a>
            <a
              href="/blog/what-is-speedcubing"
              className="group flex flex-col gap-1 rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <h3 className="font-medium text-black dark:text-zinc-50 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                What is Speedcubing
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Description for what is speedcubing post
              </p>
            </a>
            <a
              href="/blog/my-speedcubing-journey"
              className="group flex flex-col gap-1 rounded-lg border border-zinc-200 bg-white p-4 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
            >
              <h3 className="font-medium text-black dark:text-zinc-50 group-hover:text-zinc-900 dark:group-hover:text-zinc-100">
                My Speedcubing Journey
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Description for my speedcubing journey post
              </p>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
