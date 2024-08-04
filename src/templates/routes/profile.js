import { useQuery } from "@apollo/client";
import { get_user } from "../../providers/data_schema/graphql/user.js";
import { useMemo } from "react";
import ProfileCard from "../components/user_profile/profile_card.js";


export function AthleteProfile() {
    const { data, loading } = useQuery(get_user, {
        variables: { id: parseInt(localStorage.getItem("id")) },
        fetchPolicy: "cache-and-network",
        nextFetchPolicy: "cache-first",
    });

    let user_data = useMemo(() =>
        loading ? [" "] : data?.getUser
        , [loading, data]);
    return (
        <>
            <div class="flex flex-col items-center justify-center min-h-screen w-100">
                {/* <!-- dark theme --> */}
                <div class="container w-100  m-2">
                    <div class="w-100 mx-auto grid gap-4 grid-cols-1">
                        {/* <!-- alert --> */}
                        {ProfileCard(user_data)}

                        {/* <!---stats--> */}
                        <div class="grid grid-cols-12 gap-4 ">
                            <div class="col-span-12 sm:col-span-4">
                                <div class="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14  absolute bottom-4 right-3 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                    </svg>
                                    <div class="flex justify-between items-center ">
                                        <img class="w-7 filter grayscale" src="https://v1.tailwindcss.com/_next/static/media/tailwindcss-mark.6ea76c3b72656960a6ae5ad8b85928d0.svg" alt="taiwind css" />
                                    </div>
                                    <div class="text-2xl text-gray-100 font-medium leading-8 mt-5">20</div>
                                    <div class="text-sm text-gray-500">Components</div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-4">
                                <div class="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14  absolute bottom-4 right-3 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                    </svg>
                                    <div class="flex justify-between items-center ">
                                        <i class="fab fa-behance text-xl text-gray-400"></i>
                                    </div>
                                    <div class="text-2xl text-gray-100 font-medium leading-8 mt-5">99</div>
                                    <div class="text-sm text-gray-500">Projects</div>
                                </div>
                            </div>
                            <div class="col-span-12 sm:col-span-4">
                                <div class="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-14 w-14  absolute bottom-4 right-3 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>
                                    <div class="flex justify-between items-center ">
                                        <i class="fab fa-codepen text-xl text-gray-400"></i>
                                    </div>
                                    <div class="text-2xl text-gray-100 font-medium leading-8 mt-5">50</div>
                                    <div class="text-sm text-gray-500">Pen Items</div>
                                </div>
                            </div>
                        </div>
                        <div class="grid gap-4 grid-cols-1 md:grid-cols-2">

                            {/* <!--confirm modal--> */}
                            <div class="flex flex-col p-4 relative items-center justify-center bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
                                <div class="">
                                    <div class="text-center p-5 flex-auto justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-blue-400 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-gray-600 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                        </svg>
                                        <h2 class="text-xl font-bold py-4 text-gray-200">Are you sure?</h2>
                                        <p class="text-sm text-gray-500 px-8">Do you really want to delete your account?
                                            This process cannot be undone</p>
                                    </div>
                                    <div class="p-3  mt-2 text-center space-x-4 md:block">
                                        <button class="mb-2 md:mb-0 bg-gray-700 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border-2 border-gray-600 hover:border-gray-700 text-gray-300 rounded-full hover:shadow-lg hover:bg-gray-800 transition ease-in duration-300">
                                            Cancel
                                        </button>
                                        <button class="bg-green-400 hover:bg-green-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300 hover:border-green-500 text-white rounded-full transition ease-in duration-300">Confirm</button>
                                    </div>
                                </div>
                            </div>
                            {/* <!--elements--> */}
                            <div class="flex flex-col space-y-4">
                                {/* <!-- elements 1 --> */}
                                <div class="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">

                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center mr-auto">

                                            <div class="inline-flex w-12 h-12">
                                                <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" relative w-12 h-12 object-cover rounded-2xl" /><span class="animate-ping absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75" ></span>
                                                <span></span>
                                            </div>

                                            <div class="flex flex-col ml-3">
                                                <div class="font-medium leading-none text-gray-100">Aji</div>
                                                <p class="text-sm text-gray-500 leading-none mt-1">UI/UX Designer</p>
                                            </div>
                                        </div>
                                        <a href="#" class="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                                        </svg></a>
                                        <a href="#" class="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 ml-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path>
                                        </svg></a>
                                    </div>
                                </div>
                                {/* <!--elements 2--> */}
                                <div class="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">

                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center mr-auto">

                                            <div class="inline-flex w-12 h-12">
                                                <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" relative p-1 w-12 h-12 object-cover rounded-2xl" />
                                                <span class="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-green-400 opacity-75"></span>
                                                <span></span>
                                            </div>

                                            <div class="flex flex-col ml-3 min-w-0">
                                                <div class="font-medium leading-none text-gray-100">Groupname</div>
                                                <p class="text-sm text-gray-500 leading-none mt-1 truncate">Beautiful hand-crafted SVG icons</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-col ml-3 min-w-0">
                                            <span class="text-xs text-gray-500 text-right mb-1">9:02pm</span>
                                            <div class="flex">
                                                <a class="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                                    </svg></a>
                                                <span class="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-green-100 bg-green-400 rounded-full ml-2">99</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!--elements 2--> */}
                                <div class="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-500  transform hover:scale-105">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center mr-auto">
                                            <div class="inline-flex w-12 h-12"><img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" relative p-1 w-12 h-12 object-cover rounded-2xl" /><span class="absolute w-12 h-12 inline-flex border-2 rounded-2xl border-gray-600 opacity-75"></span>
                                                <span></span>
                                            </div>

                                            <div class="flex flex-col ml-3 min-w-0">
                                                <div class="font-medium leading-none text-gray-100">Ajimon</div>
                                                <p class="text-sm text-gray-500 leading-none mt-1 truncate">Jul 066, 2021, 8.25 PM</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-col ml-3 min-w-0">
                                            <div class="flex">
                                                <h5 class="flex items-center font-medium text-gray-300 mr-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg> 1800
                                                </h5>
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 ml-2" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex flex-col p-4 bg-gray-800 border border-gray-800 shadow-md hover:text-green-500 text-gray-400 hover:shodow-lg rounded-2xl transition ease-in duration-500  transform hover:scale-105 cursor-pointer">
                                    <div class="flex items-center justify-between">
                                        <div class="flex items-center mr-auto">
                                            <div class="-space-x-5 flex ">
                                                <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji"
                                                    class=" relative p-1 w-12 h-12 object-cover rounded-2xl border-2 border-gray-600 bg-gray-800" />
                                                <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" class=" relative p-1 w-12 h-12 object-cover rounded-2xl border-2 border-gray-600 bg-gray-800 shadow" />
                                            </div>

                                            <div class="flex flex-col ml-3 min-w-0">
                                                <div class="font-medium leading-none text-gray-100">Pending Request </div>
                                                <p class="text-sm text-gray-500 leading-none mt-1 truncate">Jul 066, 2021, 8.25 PM</p>
                                            </div>
                                        </div>
                                        <div class="flex flex-col ml-3 min-w-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col justify-center p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center">
                                        <div class="flex flex-col">
                                            <div class="font-medium leading-none text-gray-100">Delete Your Acccount?</div>
                                            <p class="text-sm text-gray-500 leading-none mt-1">By deleting your account.</p>
                                        </div>
                                    </div>
                                    <a class="flex-no-shrink text-xs  font-medium tracking-wider  text-gray-400 hover:text-green-400 transition ease-in duration-300"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg></a>
                                </div>
                            </div>
                            <div class="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                                <div class="flex">
                                    <img src="https://images.unsplash.com/photo-1575390730294-dfc5efa5250b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=255&q=80" alt="Just a flower" class=" w-16  object-fit  h-16 rounded-2xl" />
                                    <div class="flex flex-col justify-center w-full px-2 py-1">
                                        <div class="flex justify-between items-center ">
                                            <div class="flex flex-col">
                                                <h2 class="font-medium leading-none text-gray-100">Massive Dynamic</h2>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                                            </svg>
                                        </div>
                                        <div class="flex pt-2  text-sm text-gray-500">
                                            <div class="flex items-center mr-auto">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                                <p class="font-normal">4.5</p>
                                            </div>
                                            <div class="flex items-center font-medium text-gray-300 ">
                                                $1800
                                                <span class="text-gray-600 text-sm font-normal"> /wk</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <div class="lg:w-3/5 p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl">
                                <div class="flex-none lg:flex">
                                    <div class=" h-full w-full lg:h-36 lg:w-36   lg:mb-0 mb-3">
                                        <img src="https://images.unsplash.com/photo-1515362778563-6a8d0e44bc0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="unsplash images" class=" w-full  object-scale-down lg:object-cover  lg:h-36 rounded-2xl" />
                                    </div>
                                    <div class="flex-auto lg:ml-3 justify-evenly py-2">
                                        <div class="flex flex-col ">
                                            <div class="flex items-center mr-auto text-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-300 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                                    </path>
                                                </svg>
                                                <p class="font-normal text-gray-500">4.5</p>
                                            </div>
                                            <div class="flex items-center  justify-between min-w-0">
                                                <h2 class="mr-auto   text-base text-gray-100 font-medium truncate">Massive Dynamic</h2>
                                                <div class="flex items-center font-medium text-gray-300 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                    800
                                                    <span class="text-gray-500 text-sm font-normal"> /Day</span>
                                                </div>
                                            </div>
                                            <p class="flex items-center text-sm text-gray-400">Fortcochi,Cochin . 7km <span class="relative inline-flex rounded-md shadow-sm ml-2">
                                                <span class="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
                                                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                    <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                                </span>
                                            </span>

                                            </p>
                                        </div>
                                        <div class="flex my-3 border-t border-gray-800 "></div>
                                        <div class="flex space-x-3 text-sm font-medium">
                                            <div class="flex-auto items-center flex space-x-3 text-xs text-gray-500">
                                                <span>2 Bedroom</span><span>4 Guest</span>

                                            </div>
                                            <button class="mb-2 md:mb-0 flex-no-shrink bg-green-400 hover:bg-green-500 px-5 py-2 
                                                text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-green-300
                                                 hover:border-green-500 text-white rounded-full transition ease-in duration-300"
                                                type="button" aria-label="like">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="lg:w-2/5 ..."></div>
                        </div>
                    </div>

                </div>
            </div >
            {/* </div > */}

        </>
    )
}


