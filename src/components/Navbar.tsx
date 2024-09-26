"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



function Navbar() {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="bg-background h-[80px] sticky top-0 shadow-sm z-10">
        <div className="container flex justify-between py-[5px]">
        <img src="/images/logo.webp" alt="S-bize header logo" className="h-[70px] inline-block"/>
        <nav className="lg:flex justify-between flex-grow place-items-center hidden">
            <ul className="flex justify-center gap-10 flex-grow">
                <li>
                    <Link href="/" className="text-sdarkblue hover:text-sorange text-md font-mediumc uppercase">Home</Link>
                </li>
                <li>
                    <Link href="/cohorts" className="text-sdarkblue hover:text-sorange text-md font-mediumc uppercase">Meet The Cohorts</Link>
                </li>
                <li>
                    <Link href="/explore" className="text-sdarkblue hover:text-sorange text-md font-mediumc uppercase">Explore Kenya</Link>
                </li>
            </ul>
            <ul className="grid grid-cols-2 gap-x-4 place-items-center">
                <li><Link href="https://www.nairobits.com" className='inline-block min-w-[120px] orangeBtn' target="_blank">NairoBits</Link></li>
                <li><Link href="https://forms.gle/QKHVTpZZAcxdnfjC7" className='inline-block min-w-[120px] accentBtn' target="_blank">Apply</Link></li>
            </ul>
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
            <div className="h-[70px] w-[70px] flex lg:hidden justify-end place-items-center">
                <SheetTrigger><HiMenuAlt3 className='text-sdarkblue hover:text-sorange h-8 w-8'/></SheetTrigger>
            </div>
            <SheetContent className="min-w-full lg:hidden [&_svg]:w-10 [&_svg]:text-sprimary [&_svg]:hover:text-sorange [&_svg]:h-8 [&_button]:top-6 [&_button]:right-6">
                <SheetHeader className="h-[50px] shadow-sm flex flex-row justify-between ">
                <SheetTitle>
                     <img src="/images/logo.webp" alt="S-bize header logo" className="h-[50px] inline-block"/>
                </SheetTitle>
                </SheetHeader>
                <SheetDescription className="py-10">
                    <ul className='flex flex-col justify-center max-w-[300px] mx-auto text-center gap-8'>
                        <li>
                           <Link href="/" className="text-sdarkblue hover:text-sorange text-lg font-semibold uppercase" onClick={()=>setOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link href="/cohorts" className="text-sdarkblue hover:text-sorange text-lg font-semibold uppercase" onClick={()=>setOpen(false)}>Meet The Cohorts</Link>
                        </li>
                        <li>
                            <Link href="/explore" className="text-sdarkblue hover:text-sorange text-lg font-semibold uppercase" onClick={()=>setOpen(false)}>Explore Kenya</Link>
                        </li>
                        <li>
                            <Link href="https://www.nairobits.com" target="_blank" className='inline-block min-w-[180px] orangeBtn text-lg' onClick={()=>setOpen(false)}>NairoBits</Link>
                        </li>
                        <li>
                            <Link href="https://www.nairobits.com/apply" target="_blank" className='inline-block min-w-[180px] accentBtn text-lg' onClick={()=>setOpen(false)}>Apply</Link>
                        </li>
                    </ul>
                </SheetDescription>
            </SheetContent>
        </Sheet>
        </div>
    </header>
  )
}

export default Navbar