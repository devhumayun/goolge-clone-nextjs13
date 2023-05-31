"use client";
import { useState } from 'react';
import {useRouter} from 'next/navigation'
import { AiOutlineSearch } from 'react-icons/ai';
import { BsFillMicFill } from 'react-icons/bs';

export default function HomeSearchBar() {
    const [input, setInput] = useState("")
    const [loadingRendomSearch, setLoadingRandomSearch] = useState(false)
    const router = useRouter()

    // search
    function handleSearchSubmit (e) {
      e.preventDefault()
     
      if(!input.trim())return

      router.push(`search?q=${input}`)
    }

    // felling lucky // Random search
    async function handleRandomSearch () {
      setLoadingRandomSearch(true)
      const response = await fetch(`https://random-word-api.herokuapp.com/word`).then((res) => res.json()).then((data) => data[0])

      if(!response) return
      router.push(`search?q=${response}`)
      setLoadingRandomSearch(false)
    }
  return (
    <>
      <form onSubmit={handleSearchSubmit} className='flex w-full mt-10 mx-auto max-w-[90%] border border-gray-200 items-center px-5 py-3 rounded-full hover:shadow-sm transition-shadow focus-within:shadow gap-4 sm:max-w-xl md:max-2xl'>
        <AiOutlineSearch />
        <input value={input} onChange={(e) => setInput(e.target.value)} className='flex-grow focus:outline-none' type="text" />
        <BsFillMicFill />
      </form>
      <div className="mt-8 flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2">
        <button onClick={handleSearchSubmit} className='btn'> Google Search </button>
        <button disabled={loadingRendomSearch} onClick={handleRandomSearch} className='btn flex items-center justify-center disabled:opacity-80%'>
          {
            loadingRendomSearch ? ( <img className='text-center h-10' src='spinner.svg' alt='loading...' />)
            : ("I am felling lucky" )
          }
        </button>
      </div>
    </>
  )
}
