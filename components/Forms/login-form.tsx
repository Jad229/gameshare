import { FaLock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function LoginForm() {
  return (
    <form className="border-2 border-sky-900 flex flex-col justify-center items-center gap-20 h-[500px] w-[400px] bg-zinc-900 rounded-xl m-auto shadow-2xl p-12">
      <div className="w-full flex items-center justify-center gap-5">
        <h1 className="text-4xl font-bold shadow-xl">Please Sign In </h1>
      </div>
      <div className="w-full  flex flex-col justify-center gap-5">
        <div className="flex items-center justify-between gap-5">
          <label htmlFor="email">
            <MdEmail size={25} />
          </label>
          <input
            className="focus:outline-none p-2 rounded-xl shadow-xl bg-zinc-700 w-full"
            type="email"
            id="email"
          />
        </div>
        <div className="flex items-center justify-between gap-5">
          <label htmlFor="password">
            <FaLock size={25} />
          </label>
          <input
            className="focus:outline-none p-2 rounded-xl shadow-xl bg-zinc-700 w-full"
            type="password"
            name="password"
            id="password"
          />
        </div>
      </div>
      <div className="w-full ">
        <button
          type="submit"
          className="py-2 w-full bg-sky-600 rounded-xl shadow-xl text-black font-bold hover:bg-fuchsia-700 transition-all duration-300 ease-in-out"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
