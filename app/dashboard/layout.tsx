import { Footer, Navbar } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-6 h-screen overflow-scroll">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
