import { Explore } from "@/components";

type props = {
  searchParams?: {
    page?: number;
  };
};

export default async function Home({ searchParams }: props) {
  const page = searchParams?.page || 1;
  return (
    <main>
      {/* explore section */}
      <Explore page={page} />
    </main>
  );
}
