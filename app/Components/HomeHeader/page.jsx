import Link from "next/link";
import { TbGridDots } from 'react-icons/tb';
export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
        <div className= "flex justify-center space-x-4 items-center">
            <Link className="hover:underline text-1xl color-black" href="#"> Gmail </Link>
            <Link className="hover:underline text-1xl" href="#"> Image </Link>
            <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl color-black"  />
            <button className="bg-blue-500 text-white py-2 px-6 rounded-md font-medium hover:shadow-md hover:brightness-105 transition-shadow"> Sign in </button>
        </div>
    </header>
  )
}

