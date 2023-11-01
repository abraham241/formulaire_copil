import React from "react";
import { Link } from "react-router-dom";

export default function(){
    return(
        <nav className="bg-gray-100 h-28 w-full flex justify-between px-14  ">
            <div className="flex justify-between items-center w-[200px] " >
            <li className="list-none"><Link to="/"><img src="src/assets/images/REF.png" alt="logo-navbar" className="mx-auto mb-4 w-20 h-20" /></Link></li>
                <button className="h-12 w-28 bg-sky-500  rounded mb-4 text-white font-semibold">
                    <li className="list-none"><Link to="/Dashbord">Dashbord</Link></li>
                </button>
            </div>
            <div className="flex justify-between items-center w-[150px] gap-3 font-bold">
                <p >Abraham Nyoundou</p>
                <img src="src/assets/images/alex.jpg" alt="profil user" className="h-16 w-16 rounded-full"/>
            </div>
        </nav>
    )
}