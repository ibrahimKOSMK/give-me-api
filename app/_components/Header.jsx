import React from 'react'
import Image from 'next/image'
import { IoMdSearch } from "react-icons/io";


function Header() {
  return (
   

<nav class="border-teal bg-niga dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://i.ibb.co/2dmdYHr/72-AD5332-C123-44-EF-B8-EA-D0-C1-E8-F967-F7.png" class="h-10" alt=" Logo" />
        <img src='https://i.ibb.co/StHP6sM/2316-B015-46-D6-44-E8-A030-022-AD938-CE2-A.png' alt='' class="self-center w-36 h-16"/>
    </a>
    <button data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">

    <div class="relative inline-block text-left">
      
   
</div>
      

      <ul class="flex flex-col  font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">


      <div className="relative group hidden  sm:block">
              <input
                type="text"
                placeholder="ابحث هنا"
                className="
              search-bar
              "
              />
              <IoMdSearch className=" text-3xl  text-white group-hover:text-teal  absolute top-4  -translate-y-1/2 right-1 duration-200" />
            </div>
      
  
      <div class="group " >
        <li>
        <a href="#" class="block py-2 px-3 md:p-0 text-white rounded hover:text-teal   md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">مسلسلات</a>

          <svg class="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
                <path  fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
            <div id="dropdownInformation" class="absolute z-50  w-40 mt-0 origin-top-left bg-teal divide-y divide-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>ضحك افلام</div>
      <div class="font-medium truncate">d7k@aflam.com</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">مسلسلات عربية</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">مسلسلات اجنبية</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-white dark:hover:bg-gray-600 dark:hover:text-white">احدث الحلقات</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-white dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">قائمة المسلسلات</a>
    </div>
</div>

        </li>
    </div>
        

      <div class="group">
        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-white rounded hover:text-teal md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">افلام</a>
            <svg class="w-4 h-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white">
                <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
             <div
            class="absolute z-50  w-40 mt-0 origin-top-left bg-teal divide-y divide-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div class="py-1">
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-white">افلام اجنبية</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-white">افلام نتفليكس</a>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-white">الاعلى تقييما</a>
            </div>
        </div>
        </li>
      </div>
      <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-white rounded hover:text-teal md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">من نحن</a>
        </li>

        <li>
          <a href="#" class="block py-2 px-3 md:p-0 text-white hover:text-teal  rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">الرئيسية</a>

        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header
