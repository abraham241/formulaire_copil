import React from "react";

export default function(){
    return(
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
    )
}