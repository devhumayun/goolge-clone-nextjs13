import React from 'react'
import CountryLookup from './CountryLookup'

export default function Footer() {
  return (
    <>
      <footer className='w-full absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] py-5'>
        <div className='border-b px-5'>
          <CountryLookup className="py-2" />
        </div>
        <div className='flex justify-between py-4 px-5 flex-col sm:flex-row items-center space-y-7 sm:space-y-0'>
            <ul className='flex space-x-6'>
                <li className='link'> About </li>
                <li className='link'> Advertising </li>
                <li className='link'> Business </li>
                <li className='link'> How Search works </li>
            </ul>
            <ul className='flex space-x-6'>
                <li className='link'> Privacy </li>
                <li className='link'> Terms </li>
                <li className='link'> Setting </li>
            </ul>
        </div>
      </footer>
    </>
  )
}
