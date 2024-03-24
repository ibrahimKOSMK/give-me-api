'use client'
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { ServiceData } from "../constants/type";


const Hero = () => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

   return ( 
<div className='bg-niga flex flex-row pb-10 justify-center items-center gap-28 w-full h-24  shadow-white drop-shadow-2xl' >
<div className="w-48 text-sm h-[1px] tracking-wider ">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-teal w-full p-3  hover:bg-teal1 duration-200 border-2 border-xteal  flex items-center justify-between rounded-2xl ${
          !selected && "text-gray-700 "
        }`}
      > 
                <BiChevronDown size={20} className={`${open && "rotate-180"}`} />

        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "تصنيف حسب "}
      </div>
      <ul
        className={`bg-white mt-2  overflow-y-auto ${
          open ? "max-h-72 rounded-md text-right " : "max-h-0 "
        } `}
      >
        <div className="flex items-center  sticky top-0  bg-white">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="ابحث عن التصنيف"
            className="placeholder:text-gray-700 text-right pl-[4px] py-2 outline-none"
          />
        </div>
        {ServiceData.map((item) => (
          <li
            key={item?.bywhat}
            className={`p-2 bg-white relative text-niga border-y-[1px] border-opacity-60 border-niga  text-sm hover:bg-teal hover:text-second
            ${
              item?.bywhat?.toLowerCase() === selected?.toLowerCase() &&
              " text-niga bg-teal"
            }
            ${
              item?.bywhat?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (item?.bywhat?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(item?.bywhat);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {item?.bywhat}
          </li>
        ))}
      </ul>
    </div>
  

  <div className="w-52 text-sm h-[1px] tracking-wider  ">
      <div
        onClick={() => setOpen1(!open1)}
        className={`bg-teal hover:bg-teal1 duration-200 border-2 border-xteal w-full p-3  flex items-center justify-between rounded-2xl ${
          !selected1 && "text-gray-700 "
        }`}
      >
                <BiChevronDown size={20} className={`${open1 && " rotate-180"}`} />

        {selected1
          ? selected?.length > 25
            ? selected1?.substring(0, 25) + "..."
            : selected1
          : "السنة "}
      </div>
      <ul
        className={`bg-white mt-2   overflow-y-auto ${
          open1 ? "max-h-72 rounded-md text-right  " : "max-h-0 "
        } `}
      >
        <div className="flex items-center   sticky top-0  bg-white">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="ابحث عن السنة"
            className="placeholder:text-gray-700 text-right py-2 pl-[11px] outline-none"
          />
        </div>
        {ServiceData.map((item) => (
          <li
            key={item?.year}
            className={`p-2 bg-white relative  text-niga border-y-[1px] border-opacity-60 border-niga  text-sm hover:bg-teal hover:text-second
            ${
              item?.year?.toLowerCase() === selected1?.toLowerCase() &&
              " text-niga bg-teal"
            }
            ${
              item?.year?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (item?.year?.toLowerCase() !== selected1.toLowerCase()) {
                setSelected1(item?.year);
                setOpen1(false);
                setInputValue("");
              }
            }}
          >
            {item?.year}
          </li>
        ))}
      </ul>
    </div>
  


  <div className="w-56 text-sm h-[1px] tracking-wider ">
      <div
        onClick={() => setOpen2(!open2)}
        className={`bg-teal w-full p-3  hover:bg-teal1 duration-200 border-2 border-xteal flex items-center justify-between rounded-2xl ${
          !selected2 && "text-gray-700 "
        }`}
      >
                <BiChevronDown size={20} className={`${open2 && "rotate-180"}`} />

        {selected2
          ? selected2?.length > 25
            ? selected2?.substring(0, 25) + "..."
            : selected2
          : "النوع "}
      </div>
      <ul
        className={`bg-white mt-2  overflow-y-auto ${
          open2 ? "max-h-72 rounded-md text-right " : "max-h-0 "
        } `}
      >
        <div className="flex items-center  sticky top-0  bg-white">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="ابحث عن النوع"
            className="placeholder:text-gray-700 text-right py-2 pl-[28px] outline-none"
          />
        </div>
        {ServiceData.map((item) => (
          <li
            key={item?.type}
            className={`p-2 bg-white relative text-niga border-y-[1px] border-opacity-60 border-niga  text-sm hover:bg-teal hover:text-second
            ${
              item?.year?.toLowerCase() === selected2?.toLowerCase() &&
              " text-niga bg-teal"
            }
            ${
              item?.type?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (item?.type?.toLowerCase() !== selected2.toLowerCase()) {
                setSelected2(item?.type);
                setOpen2(false);
                setInputValue("");
              }
            }}
          >
            {item?.type}
          </li>
        ))}
      </ul>
    </div>
  
  <div className="w-64 text-sm h-[1px] tracking-wider ">
      <div
        onClick={() => setOpen3(!open3)}
        className={`bg-teal w-full p-3  hover:bg-teal1 duration-200 border-2 border-xteal flex items-center justify-between rounded-2xl ${
          !selected3 && "text-gray-700 "
        }`}
      >
                <BiChevronDown size={20} className={`${open3 && "rotate-180"}`} />

        {selected3
          ? selected3?.length > 25
            ? selected3?.substring(0, 25) + "..."
            : selected3
          : "الاقسام  "}
      </div>
      <ul
        className={`bg-white mt-2  overflow-y-auto   ${
          open3 ? "max-h-72 rounded-md text-right relative z-50 " : "max-h-0 "
        } `}
      >
        <div className="flex items-center  sticky top-0  bg-white">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="ابحث عن القسم"
            className="placeholder:text-gray-700 text-right   pl-[58px] py-2 outline-none"
          />
        </div>
        {ServiceData.map((item) => (
          <li
            key={item?.category}
            className={`p-2  bg-white relative text-niga border-y-[1px] border-opacity-60 border-niga  text-sm hover:bg-teal hover:text-second
            ${
              item?.category?.toLowerCase() === selected3?.toLowerCase() &&
              " text-niga bg-teal"
            }
            ${
              item?.category?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (item?.category?.toLowerCase() !== selected.toLowerCase()) {
                setSelected3(item?.category);
                setOpen3(false);
                setInputValue("");
              }
            }}
          >
            {item?.category}
          </li>
        ))}
      </ul>
    </div>

    <div>
      <p className="h-1 pt-2 text-white text-2xl">التصفية</p>
    </div>
</div>
   )
}

export default Hero
