import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

export default function HomeSearchBar() {
  return (
    <>
      <form className='flex w-full mt-8 mx-auto max-w-[90%] border border-gray-200 items-center px-5 py-3 rounded-full hover:shadow-sm transition-shadow focus-within:shadow gap-4 sm:max-w-xl md:max-2xl'>
        <AiOutlineSearch />
        <input className='flex-grow focus:outline-none' type="text" />
        <BsFillMicFill />
      </form>
      <div className="mt-4 flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
        <button className='btn'> Google Search </button>
        <button className='btn'> I am felling lucky </button>
      </div>
    </>
  )
}
