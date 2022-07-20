import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div>
        {/* Left */}
        <div className='flex items-center justify-between max-w-6xl'>
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
            <h1>Right Sides</h1>
        </div>

        {/* Middle */}

        {/* Right */}
    </div>
  )
}
