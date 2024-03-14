"use client";

import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";

type props = {
  direction: "left" | "right";
};

export default function PaginationArrow({ direction }: props) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentPage = Number(searchParams.get("page")) || 1;

  function createPageURL(page: number | string) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  }

  return (
    <div className="flex my-auto justify-center items-center text-lg font-bold border border-violet-500 h-28 p-2 rounded-lg shadow-2xl">
      {direction === "left" ? (
        <Link href={createPageURL(currentPage - 1)}>
          <MdKeyboardDoubleArrowLeft className="text-3xl hover:scale-105 transition-all hover:text-sky-500" />
        </Link>
      ) : (
        <Link href={createPageURL(currentPage + 1)}>
          <MdKeyboardDoubleArrowRight className="text-3xl hover:scale-105 transition-all hover:text-sky-500" />
        </Link>
      )}
    </div>
  );
}
