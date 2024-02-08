'use client'

import React, {useState} from 'react'

import Link from 'next/link'

const NavBarAuth = () => {

    const [showDropDown, setShowDropDown] = useState(false)

    const handleDropDownClick = () => {
        setShowDropDown(!showDropDown)
    }

    return (
 
        
        <div className="flex justify-between bg-gunmetal shadow-lg items-center w-full mx-auto p-6">
            <div>
            <h2 className="text-white">
                Logo
            </h2>
            </div>
            
            <div className="flex justify-between items-center w-auto">
            <Link href="#" className="hidden md:inline-block mr-4 text-white">Home</Link>
            <Link href="#" className="hidden md:inline-block mr-4 text-white">Contact Us</Link>
            <div className="relative">
                <span 
                onClick = {handleDropDownClick}
                className="inline-block w-10 h-10 rounded-full border-white border"></span>
            
            {showDropDown && (
                            <div className="absolute z-10 bg-white top-full right-0 p-1 w-32 border rounded-lg ">
                            <ul className="flex-col">
                                <Link href="/index" className="sm:hidden mr-4 p-1">Home</Link>
                                <Link onClick={handleDropDownClick} href="/projects" className="p-1">Profile</Link>
                                <Link href="#" className="sm:hidden mr-4 p-1">Contact</Link>
                            
                                <li className="p-1">Logout</li>
                              
                            </ul>
            
                        </div>
            )}

            </div>

                </div>


            
        </div>
  
    )
}

export default NavBarAuth