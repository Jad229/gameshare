"use client";
import { useState } from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Pagination() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [page, setPage] = useState(1);
  replace(createPageURL(page));

  function createPageURL(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}`;
  }

  function pageUp() {
    setPage((prevState) => prevState + 1);
  }

  function pageDown() {
    //prevents negative page numbers
    if (page <= 1) setPage(1);
    else setPage((prevState) => prevState - 1);
  }

  return (
    <div className="flex justify-center items-center text-lg font-bold gap-5 border-2 border-violet-500 p-2 rounded-lg shadow-2xl">
      <button onClick={() => pageDown()}>
        <MdKeyboardDoubleArrowLeft className="text-3xl hover:scale-105 transition-all hover:text-sky-500" />
      </button>
      {page}
      <button onClick={() => pageUp()}>
        <MdKeyboardDoubleArrowRight className="text-3xl hover:scale-105 transition-all hover:text-sky-500" />
      </button>
    </div>
  );
}
