import Image from 'next/image'
import React from 'react'
import { SearchIcon,PlusCircleIcon } from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'

export default function Header() {
  return (
        <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
            {/* Left */}
            <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
                <Image src={"https://cdn.pixabay.com/photo/2016/08/15/01/29/instagram-1594387_960_720.png"}
                layout="fill"
                className='object-contain'
                />
            </div>
            <div className='cursor-pointer h-24 w-10 relative lg:hidden'>
                <Image src={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png"}
                layout="fill"
                className='object-contain'
                />
            </div>
            {/* Middle */}

            <div className="relative mt-1">
                <div className="absolute top-2 left-2">
                    <SearchIcon className='h-5 text-gray-500'/>
                </div>
                <input type="text" placeholder='Search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md' />
            </div>


            {/* Right */}
            <div className="flex space-x-4 items-center cursor-pointer ">
               <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
               <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125 transition-transform duration-200 ease-out'/>
               <img className='h-10 rounded-full' src="https://sokchansocheat.web.app/static/media/frame.12c9e2abd37f5f717e64.jpg" alt="" />
            </div>
        </div>

  
  )
}
