import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='py-4 bg-slate-900 px-14 flex justify-between'>
      <div className="logo text-white font-bold cursor-pointer"><Link href={"/"}>CodeWithDarsh</Link></div>
      <ul className='flex text-white gap-6'>
        <li className='cursor-pointer hover:font-bold transition-all'><Link href={"/"}>Home</Link></li>
        <li className='cursor-pointer hover:font-bold transition-all'><Link href={"/about"}>About</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
