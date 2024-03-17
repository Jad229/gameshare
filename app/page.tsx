import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col justify-center items-center gap-10 h-screen">
      <h1 className="text-7xl tracking-widest font-bold">
        Game
        <span className="text-transparent bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 bg-clip-text inline-block">
          Share
        </span>
      </h1>
      <p className="text-5xl font-extralight">Find Your Next Obsession.</p>
      <Link
        href="/dashboard"
        className="p-4 bg-fuchsia-500 rounded-xl shadow-xl text-black font-bold text-xl hover:bg-violet-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl"
      >
        Press Start
      </Link>
    </main>
  );
}
