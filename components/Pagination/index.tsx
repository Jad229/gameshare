import React from "react";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";

export default function Pagination() {
  return (
    <div>
      <button className="flex justify-center items-center text-lg font-bold gap-5 border-2 border-violet-500 p-2 rounded-lg shadow-2xl">
        <MdKeyboardDoubleArrowLeft className="text-3xl hover:scale-105 transition-all hover:text-sky-500" />
      </button>
      1
      <button>
        <MdKeyboardDoubleArrowRight className="text-3xl hover:scale-105 transition-all hover:text-sky-500" />
      </button>
    </div>
  );
}
