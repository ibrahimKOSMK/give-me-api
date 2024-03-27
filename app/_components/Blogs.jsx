'use client'
import React, { useEffect, useState } from 'react'
import BlogsApis from '../_utils/BlogsApis';
import blogtest from './blogtest';
import { ServiceData } from '../constants/list';
import { FaPlay } from "react-icons/fa";
import { RxArrowTopRight } from "react-icons/rx";
import { FaStar } from "react-icons/fa6";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiTelevisionSimpleFill } from "react-icons/pi";


function Blogs({}) {
  const[blogs,setblogtest]= useState ([])
  
    useEffect(()=>{
      getLatestBlogs_();
    },[])

    const getLatestBlogs_=()=>{
      BlogsApis.getLatestBlogs().then(res=>{
        
        console.log(res.data);
        setblogtest(res.data)
      
      })
    }

    return (
<div>
      <div >
        <nav className=' bg-second w-full h-20 '>
<p className='text-4xl flex flex-row ml-[1250px]  pt-5 gap-5 text-white text-balance '> 

اخر الحلقات
<BiSolidCameraMovie />

</p>

        </nav>
      </div>
 


<div className='   -z-10 grid grid-rows-4 grid-cols-6  pt-4 pl- pb-8 bg-second shadow-white drop-shadow-2xl'>
{ServiceData.map((item) => (
  
          <list  key={item.title}>
            <div  className="flex flex-col  text-center ml-2  gap-  mb-10 border-teal1 border-x-2 group relative shadow-lg text-niga rounded-md  h-[250px] w-[215px] lg:h-[300px] lg:w-[230px] overflow-hidden cursor-pointer  ">
              <a href={`/episode/${item.url}`}>
              <div
                className="absolute inset-0 bg-cover  bg-center    "  

              style={{backgroundImage: `url(${item.backgroundImage})` }}  
              />


              <div  className="absolute inset-0  opacity-100  bg-gradient-to-t from-niga to-white)  " />

              <span className="absolute flex flex-row  text-second tracking-[2px] text-[0.8rem] font-bold shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px] bg-teal m-2.5 px-[15px] py-[7px] rounded-[20px] right-0 top-0 ">
              <FaStar className='mt-0.5 mr-1'/> 
               {item.rate}
               
                </span>
         
          <div  className=" opacity-0 bg-niga   translate-y-full pb-5  z-50  group-hover:opacity-100  group-hover:transition-all group-hover:translate-y-0 duration-1000 ">

              <div className="relative flex flex-col gap-3 text-center z-50 ">

                <FaPlay className="text-white text-3xl ml-[100px] transition-all ease-in duration-1000 mt-36 z-50 " />
                
                <p className="lg:text-[12px]  mt-8 text-gray line-clamp-2 z-50">{item.content} </p>

              </div>
             

          </div>
          </a>
          <h1  className=" line-clamp-1 text-center  lg:text-sm text-white  z-50  ">{item.title} </h1>


            </div>


          
          
          </list>
        ))}

   

<button className='absolute bg-teal text-niga h-10 w-24 left-[710px] mt-[1355px] justify-center z-50 rounded-lg hover:shadow-sm hover:shadow-teal hover:bg-teal1 duration-100'> عرض المزيد </button>

    
  </div>

  <div>
        <nav className=' bg-second w-full h-20 '>
<p className='text-4xl flex flex-row gap-3 ml-[1250px] pt-5 text-white text-balance'> 
الاكثر مشاهدة
<PiTelevisionSimpleFill />

</p>
        </nav>
      </div>
 


<div className=' grid grid-rows-4 grid-cols-6  pt-4 pl- pb-8 bg-second shadow-white drop-shadow-2xl'>
{ServiceData.map((item) => (
          <list key={item.title}>
            <div className="flex flex-col  text-center ml-2  gap-6  mb-10 border-teal border-x-2 group relative shadow-lg text-niga rounded-md px-6 py-8 h-[250px] w-[215px] lg:h-[300px] lg:w-[230px] overflow-hidden cursor-pointer  ">
              
              <div
                className="absolute inset-0 bg-cover  bg-center   "  

              style={{backgroundImage: `url(https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781608872251/the-walking-dead-9781608872251_hr.jpg)` } }  
              />


              <div className="absolute inset-0   opacity-100 bg-gradient-to-t from-niga to-white)" />

              <span className="absolute text-white tracking-[2px] text-[0.8rem] font-bold shadow-[inset_2px_-2px_20px_rgba(214,214,214,0.2),inset_-3px_3px_3px_rgba(255,255,255,0.4)] backdrop-blur-[74px] m-2.5 px-[18px] py-[7px] rounded-[20px] right-0 top-0">{item.rate}</span>
          <div className=" opacity-0   group-hover:opacity-100 hover:transition-all ease-in-out duration-500 ">

              <div className="relative flex flex-col gap-3 text-center ">

                <FaPlay className="text-white text-3xl ml-24 transition-all ease-in duration-1000 mt-36  " />
                
                <p className="lg:text-[15px] mt-8 text-white">{item.content} </p>

              </div>

          </div>
          <h1 className="line-clamp-1 text-center text-lg lg:text-sm text-white  absolute justify-center  ">{item.title} </h1>

              <RxArrowTopRight className="absolute bottom-5 left-5 w-[25px] h-[25px] text-white  group-hover:text-blue-500 group-hover:rotate-45 duration-100" />

            </div>


          </list>
          
        ))}

   

<button className='absolute bg-teal text-niga h-10 w-24 left-[710px] mt-[1355px] justify-center z-50 rounded-lg hover:shadow-sm hover:shadow-teal hover:bg-teal1 duration-100'> عرض المزيد </button>

    
  </div>
  </div>
  )
}

export default Blogs
