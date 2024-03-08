import React from "react";
import { SiGithub } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="flex gap-4 text-neutral-500">
      <a
        className="flex items-center gap-1 font-semibold"
        href="https://github.com/jad229"
      >
        Justin Diaz <SiGithub />
      </a>
      |<p>API provided by</p>
      <a className="font-semibold" href="https://rawg.io/">
        RAWG
      </a>
    </footer>
  );
}
