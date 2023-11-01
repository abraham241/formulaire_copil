import React from "react";
import Profile from "../components/Profile";
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
            <Profile/>
            <Profile/>
            <Profile/>

            
        </main>
    )
}