import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/solid';
import { GlobeAltIcon } from '@heroicons/react/solid';
import { MenuIcon } from '@heroicons/react/solid';
import { UserCircleIcon } from '@heroicons/react/solid';


function Header() {
  return (
    <header className="sticky top-0 z-50 grid
     grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* {Left} */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src='https://links.papareact.com/qd3'
          layout="fill"
          objectFit="contain"
          objectPosition="left"



        />
      </div>

      {/* {Middle} */}
      <div className='flex items-center md:border-2
       rounded-full py-2 md:shadow-sm'
      >
        <input className='flex-grow pl-5
         bg-tansparent outline-none text-sm text-gray-600 placeholder-gray-400'
          type="text" placeholder="Sart your search" />

        <SearchIcon className='hidden md:inline-flex 
        h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 ' />

      </div>

      {/* {Right} */}
      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p>Become a host</p>
        <GlobeAltIcon className="h-6" />
        
      <div className='flex'>
        <MenuIcon className="h-6" />
        <UserCircleIcon className="h-6" />
      </div>
      </div>
    </header>
  )
}

export default Header;
