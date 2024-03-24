import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { ServiceData } from "../constants/type";


const Selector = () => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);



  return (
<div>
<div className="w-52 text-sm h-[1px] tracking-wider ">
      <div
        onClick={() => setOpen(!open)}
        className={`bg-teal  w-full p-3  flex items-center justify-between rounded-xl ${
          !selected && "text-gray-700 "
        }`}
      >
                <BiChevronDown size={20} className={`${open && "rotate-180"}`} />

        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "النوع "}
      </div>
      <ul
        className={`bg-white mt-2 overflow-y-auto ${
          open ? "max-h-72 rounded-md text-right z-50 " : "max-h-0 z-50 "
        } `}
      >
        <div className="flex items-center  sticky top-0  bg-white">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700  p-2 outline-none"
          />
        </div>
        {ServiceData.map((item) => (
          <li
            key={item?.year}
            className={`p-2 bg-white relative text-niga z-50 border-y-[1px] border-opacity-60 border-niga  text-sm hover:bg-teal hover:text-second
            ${
              item?.year?.toLowerCase() === selected?.toLowerCase() &&
              " text-niga bg-teal"
            }
            ${
              item?.year?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => {
              if (item?.year?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(item?.year);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {item?.year}
          </li>
        ))}
      </ul>
    </div>
  


</div>
  );
};

export default Selector;