import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-white p-3 border-none rounded-md">
        <nav className="flex justify-between items-center">
          <Image src={`/dev-link-mobile.svg`} className="sm:hidden" alt="" width={30} height={30} />
          <Image src={`/devlink-desktop.svg`} className="hidden sm:block" alt="" width={100} height={100} />
         
          <div className="flex gap-2 items-center">
            <div className="flex items-center">
            <Link href="/" className='flex items-center'><Image src={`/clip-img.svg`} width={30} height={30} alt="links"/>
            <p className="hidden sm:block" >Links</p>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/profile"className='flex items-center'><Image src={`/user-circle.svg`} width={30} height={30} alt="user"/> 
            <p className="hidden sm:block">Profile details</p>
            </Link>
          </div>
          </div>
          <div>
          <Link href="/preview"><Image src={`/preview.svg`} className="sm:hidden" width={30} height={30} alt="preview"/></Link>
          <Link href="/preview" className="hidden sm:block text-purple border border-purple p-2 rounded-md">Preview</Link>
          </div>
        </nav>
      </header>

  )
}

export default Header