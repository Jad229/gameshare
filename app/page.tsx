import { GameCard } from "@/components";

export default function Home() {
  return (
    <main>
      {/* explore section */}
      <section>
        <h1 className="text-5xl font-bold text-sky-500">Explore</h1>
        <div className="flex flex-wrap justify-center items-center gap-4 overflow-scroll p-4">
          {/* game card */}
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </div>
      </section>
    </main>
  );
}
