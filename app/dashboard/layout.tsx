import { Footer, Navbar } from "@/components";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="px-6 h-screen overflow-scroll">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
