import React from "react";
import {BiChevronDown, BiMenu, BiSearch} from 'react-icons/bi'
const NavSm=()=>{
return <>
    <div className="text-white flex items-center justify-between">
        <div>
         <h3 className="text-xl font-bold">It all start Here!!</h3>
         <div className="text-gray-400 flex items-center text-xs">
                   Delhi NCR <BiChevronDown/>
               </div>
        </div>
        <div className="w-8 h-8">
            <BiSearch className="w-full h-full"/>
        </div>
    </div>
</>;
}

const NavMd=()=>{
    return <>
    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                    <BiSearch/>
                    <input type="text" className="w-full bg-transparent border-none focus:outline-none " placeholder="search for movies"/>
                </div>
    </>
}

const NavLg=()=>{
    return<>
    <div className="container  flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
            <div className="w-10 h-10">
              <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full"/>
            </div>
           <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
                    <BiSearch/>
                    <input type="text" className="w-full bg-transparent border-none focus:outline-none " placeholder="search for movies"/>
                </div>
           </div>
           <div className="flex items-center gap-3">
               <div className="text-gray-400 flex items-center text-base cursor-pointer hover:text-white">
                   Delhi NCR <BiChevronDown/>
               </div>
               <button className="bg-red-600 text-white px-2 py-1 text-sm rounded ">
                   Sign In
               </button>
              <div className="text-white text-xl px-1 py-1">
                <BiMenu className="w-full h-full"/>
              </div>
           </div>
        </div>

    </>;
}

const Navbar =()=>{
    return (
        <>
         <nav className="bg-darkBackground-700 px-4 py-3 text-white">
             <div className="md:hidden">
                 {/* /Mobile screen*/}
                 <NavSm/>
             </div>

             <div className="hidden md:flex lg:hidden">
                 {/* Medium/tab */}
                 <NavMd/>
             </div>
             <div className="hidden w-full lg:flex">
                  {/* large screen */}
                  <NavLg/>
             </div>
         </nav>
        </>

    )
}
export default Navbar;