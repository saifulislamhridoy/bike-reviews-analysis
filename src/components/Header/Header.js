import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Header = () => {
    const [open,setOpen]=useState(false)
    return (
        <nav className=' bg-slate-500'>
            <div onClick={()=>setOpen(!open)} className='w-14 h-14 text-white md:hidden'>
               {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
            </div>
            <ul className={`md:flex justify-center text-xl font-bold p-4  md:h-[80px] items-center md:static absolute duration-500 ease-in bg-slate-500 w-full ${open? 'top-12': 'top-[-230px]'}`}>
                <CustomLink className='mr-8' to='/home'>HOME</CustomLink>
                <CustomLink className='mr-8' to='/reviews'>REVIEWS</CustomLink>
                <CustomLink className='mr-8' to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink className='mr-8' to='/about'>ABOUT</CustomLink>
            </ul>
        </nav>
    );
};

export default Header;