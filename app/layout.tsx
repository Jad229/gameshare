import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GameShare",
  description:
    "GameShare is a vibrant community platform where gamers can connect, share, and discover their favorite games. With a diverse library of titles and interactive features, GameShare brings gamers together to explore new releases, share gaming experiences, and build lasting friendships. Whether you're a casual player or a hardcore enthusiast, GameShare offers something for everyone, from personalized recommendations to lively community discussions. Join the adventure and level up your gaming experience with GameShare today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-isometric-pattern text-white ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
