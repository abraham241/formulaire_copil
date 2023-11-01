import React from "react";
import NavBar from "../components/NavBar";

export default function(){
    return(
        <main>
            <NavBar/>
            <div className="flex justify-between px-14 py-10">
                <div>
                    <h3 className="text-3xl font-semibold">Liste des adherants</h3>
                    <p>Liste des adherents</p>
                </div>
                <button className="h-12 w-28 bg-sky-500  rounded mb-4 text-white font-semibold">
                    Ajouter
                </button>
            </div>
            {/* section des input */}

            <div className="flex justify-between gap-3 w-3/5 px-14">
                <select
                    id="example-select"
                    class="form-select block w-72 mt-1 border-2">
                        <option value="option1">Circonscription</option>
                        <option value="option2">Diasporat</option>
                        <option value="option3">Province</option>
                </select>
                <select
                    id="example-select"
                    class="form-select block w-72 mt-1 border-2">
                        <option value="option1">Circonscription</option>
                        <option value="option2">Diasporat</option>
                        <option value="option3">Province</option>
                </select>

                <div class="relative rounded-full bg-white">
                    <input
                    class="block w-72 pl-10  rounded border-2 text-gray-900 placeholder-gray-700 focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Rechercher..."
                    />
                    <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </span>
                </div>
            </div>

            {/* Profile d'ajout */}

            <div className="h-28 bg-gray-100  justify-center items-center my-10 mx-14">
                <div className="flex justify-between px-14 py-5">
                    <div className="flex justify-between w-3/6">
                        <img src="src/assets/images/alex.jpg" alt="profil user" className="h-16 w-16 rounded-full"/>
                        <div className="font-semibold">
                            <h6>Abraham Alex</h6>
                            <p>24 ans, Entrepreneur</p>
                        </div>
                        <div className="font-semibold">
                            <p>+241 XX XX XX</p>
                            <p>mon_mail_@gmail.com</p>
                        </div>
                    </div>
                    
                
                    <div className="flex justify-center items-center gap-10 w-48">
                        <div className="flex flex-col justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                            </svg>
                            <a href=""><span>Voir le profile</span></a>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16">
                            <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10H5zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </main>
    )
}