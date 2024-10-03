import React from "react";

const Navbar = ()=>{

    return(
        <div class="my-3">
            <nva class="flex justify-between items-center bg-white  ">
            <div class="flex items-center">
            <img class="h-8 w-auto ml-48 " 
                src="https://www.paypalobjects.com/digitalassets/c/website/logo/full-text/pp_fc_hl.svg"></img>
            </div>
                
                <div class="flex justify-end ">
                <ul class="hidden md:flex  space-x-8 font-semibold text-gray-700" >
                        <li class="cursor-pointer ">INDIVIDUALS</li>
                        <li class="cursor-pointer ">BUSINESSES</li>
                        <li class="cursor-pointer ">PARTNERS</li>
                        <li class="cursor-pointer ">USEFUL INFO</li>
                </ul>
                </div>
                <div class="flex space-x-4 mr-48">
                <button class="px-4 py-2 border rounded-full test-sm font-semibold border-blue-600 hover:text-blue-600  ">Log In</button>
                <button class="px-4 py-2 border rounded-full test-sm font-semibold border-blue-600 hover:text-blue-600 bg-sky-600 text-white">Sign Up</button>
                </div>
                

            </nva>
        </div>
    )
};

export default Navbar;