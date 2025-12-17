"use client";
import React from "react";
import { IoCheckmark } from "react-icons/io5";

export default function Pricing() {
  return (
  
      <div className="p-4 ">
        <div className=" flex flex-col gap-1 text-center">
          <p className="font-medium text-2xl text-[#252525]">Pricing Plans</p>
          <p className=" text-sm text-[#25252580] "> Choose a plan that's right for you  </p>
        </div>
        <div className="grid grid-cols-3 gap-8 ">
          <div className="rounded-4xl bg-white grid grid-rows-2 shadow-black/8 shadow-xl ">
            <div className="shadow-black/8 shadow-lg rounded-2xl p-2">
              <div className="bg-[#EBF3FF] rounded-xl p-3 ">
                <div className="flex justify-start">
                  <div className="rounded-xl bg-white px-5 ">
                    <p className=" ">Basic plans</p>
                </div>
               </div>
               <div className="mt-3 text-[#25252580] text-sm">
               <span className=" text-[#252525]  text-[Futura PT] text-2xl ">$19/</span>
                <span className="text-[Futura PT] text-[#252525] ">month</span>
                <p className="text-[Futura PT]"> or $199 yearly </p>
               </div>
              </div>
              <p className="px-4 py-4 text-[#25252599] text-sm ">Lorem ipsum dolor sit amet.</p>
            <div className="bg-primary-900 rounded-full text-center px-4  ">
            <button className="text-white text-sm py-2 ">Get Started </button>
            </div>
            </div>
            <ul className=" text-m  text-[#25252599] text-[Futura PT] px-10 py-4 space-y-4 ">
              <li className="flex items-center gap-3 "><span><IoCheckmark className=""/></span>Lorem ipsum dolor sit amet</li>

              <li className="flex items-center gap-3 "><span><IoCheckmark className=""/></span>Lorem ipsum dolor sit amet</li>

              <li className="flex items-center gap-3 "><span><IoCheckmark className=""/></span>Loerm ipsum dolor sit amet</li>
            </ul>
          </div>
          <div>
          <div className="rounded-4xl bg-white grid grid-rows-2 shadow-black/8 shadow-xl ">
            <div className="shadow-black/8 shadow-lg rounded-2xl p-2">
              <div className="bg-[#FFF7E9] rounded-xl p-3 ">
                <div className="flex justify-start">
                  <div className="rounded-xl bg-white px-5 ">
                    <p className=" ">Business plans</p>
                </div>
               </div>
               <div className="mt-3 text-[#25252580] text-sm">
               <span className=" text-[#252525]  text-[Futura PT] text-2xl ">$29/</span>
                <span className="text-[Futura PT] text-[#252525] ">month</span>
                <p className="text-[Futura PT]"> or $199 yearly </p>
               </div>
              </div>
              <p className="px-4 py-4 text-[#25252599] text-sm ">Lorem ipsum dolor sit amet.</p>
            <div className="bg-primary-900 rounded-full text-center px-4  ">
            <button className="text-white text-sm py-2 ">Get Started </button>
            </div>
            </div>
            <ul className=" text-m  text-[#25252599] px-10 py-4 space-y-4 ">
              <li className="flex items-center gap-3 "><span><IoCheckmark className=""/></span>Lorem ipsum dolor sit amet</li>

              <li className="flex items-center gap-3 "><span><IoCheckmark className=""/></span>Lorem ipsum dolor sit amet</li>

              <li className="flex items-center gap-3 "><span><IoCheckmark className=""/></span>Loerm ipsum dolor sit amet</li>
            </ul>
          </div>
          </div>
          <div>
          </div>
        </div>
      </div>

  );
}
