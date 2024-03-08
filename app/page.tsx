import { GameCard } from "@/components";
import { IGame, IGameList } from "@/types";

export default async function Home() {
  const games = await getGameList();

  async function getGameList(): Promise<IGameList> {
    const response = await fetch(
      `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}`,
    );

    if (response.ok) {
      const data = response.json();
      return data;
    }

    throw new Error("Failed to fetch games");
  }

  return (
    <main>
      {/* explore section */}
      <section>
        <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-sky-400 via-violet-500 to-fuchsia-500 bg-clip-text inline-block">
          Explore
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-10 overflow-scroll p-4">
          {games.results.map((game: IGame) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </main>
  );
}
