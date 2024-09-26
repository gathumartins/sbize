"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import { FaFacebookF,FaInstagram, FaLinkedinIn,FaYoutube } from "react-icons/fa";


function Footer() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("idle");
  const [errorMsg, setErrorMsg] = useState<{ title: string} | null>(null);

  const subscribe = async (e:any) => {
    e.preventDefault();
    setState("Loading");
    const res = await fetch(`/api/subscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    });
    const data = await res.json();
    if (data.error) {
      console.log(data.error);
      setErrorMsg(data.error);
      setState("Error");
      return;
    }
    setState("Success");
    setEmail("");
  };
  return (
    <footer className="font-mainFont">
        <article className="">
            <section className="footerTop bg-sdarkblue py-8">
                <div className="container gap-y-6 grid xs:grid-cols-2 lg:grid-cols-4  [&_h6]:text-sorange [&_h6]:uppercase [&_h6]:mb-2 [&_h6]:text-lg [&_h6]:font-semibold">
                    <div>
                        <h6>quick links</h6>
                        <ul className='text-white'>
                            <li>
                                <Link href="/" className='text-white text-base hover:text-sorange uppercase leading-9'>Home</Link>
                            </li>
                            <li>
                                <Link href="/cohorts" className='text-white text-base hover:text-sorange uppercase leading-9'>Meet The Cohorts</Link>
                            </li>
                            <li>
                                <Link href="/explore" className='text-white text-base hover:text-sorange uppercase leading-9'>Explore Kenya</Link>
                            </li>
                            <li>
                                <Link href="#top" className='text-saccent font-bold text-base hover:text-swhite uppercase leading-9'>Back To Top</Link>
                            </li>
                        </ul>
                    </div>
                    <div    >
                        <h6>contact us</h6>
                        <ul className='leading-8 text-base'>
                            <li><Link href="mailto:info@nairobits.com" className="text-white hover:text-sorange">info@nairobits.com</Link></li>
                            <li><Link href="tel:+254720040975" className="text-white hover:text-sorange">(+254) 720 040 975</Link></li>
                            <li className='leading-6 text-white text-base'>Covenant Guest House, <br/>Gate No. 18, Off Ngong Road</li>
                            <li className='max-w-[150px]'>
                                <ul className='flex justify-between gap-4 mt-2'> 
                                    <li>
                                        <Link href="" target='_blank' className="text-white hover:text-sorange cursor-pointer">
                                        <FaFacebookF className='h-5 w-5' />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" target='_blank' className="text-white hover:text-sorange cursor-pointer">
                                        <FaInstagram className='h-5 w-5'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" target='_blank' className="text-white hover:text-sorange cursor-pointer">
                                        <FaLinkedinIn className='h-5 w-5'/>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="" target='_blank' className="text-white hover:text-sorange cursor-pointer">
                                        <FaYoutube className='h-5 w-5'/>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="[&_h6]:text-sorange [&_h6]:uppercase [&_h6]:mb-4 [&_h6]:text-lg [&_h6]:font-semibold">
                        <h6 className='inline-block lg:hidden'>Action Buttons</h6>
                        <ul className="grid grid-cols-1 gap-y-4">
                            <li><Link href="https://www.nairobits.com" className='inline-block min-w-[140px] orangeBtn' target="_blank">NairoBits</Link></li>
                            <li><Link href="https://www.nairobits.com/donate" className='inline-block min-w-[140px] accentBtn' target="_blank">Donate</Link></li>
                            <li><Link href="https://forms.gle/QKHVTpZZAcxdnfjC7" className='inline-block min-w-[140px] rangeBtnSec' target="_blank">Apply</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h6>newsletter</h6>
                        <p className='text-white mb-4 text-lg'>Subscribe to our newsletter<br className='xs:inline-block hidden'/> & stay updated</p>
                        <form action="" className='flex flex-col gap-2 sm:max-w-[300px]'>
                            <section className="flex flex-col gap-4 lg:flex-row lg:gap-2">
                                  <label htmlFor="email" className='sr-only'>Email Address</label>
                                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' className='p-2 focus:ring-0 focus:shadow-none placeholder:text-sdarkblue text-foreground rounded-lg flex-grow'/>
                                    <input type="submit" value="Subscribe" className='orangeBtn' disabled={state === "Loading"} onClick={subscribe}/>
                            </section>
                            <section className='text-left h-4'>
                            {state === "Error" && errorMsg && (
                                <div className="text-red-500 text-md">*{errorMsg.title}</div>
                                    )}
                                    {state === "Success" && (
                                    <div className="text-saccent text-md">
                                        Success. Thank You Subscribing our Newsletter
                                    </div>
                                )}
                            </section>
                        </form>
                    </div>
                </div>
            </section>
            <section className="bg-sprimary py-4">
                <div className="container text-center">
                    <p className='text-white text-base sm:text-lg font-mainFont'>Copyright &copy; {new Date().getFullYear()} <Link href="https://www.nairobits.com" target="_blank" className="text-sorange font-semibold hover:text-saccent">NairoBits Trust. </Link> All Rights Reserved</p>
                </div>
            </section>
        </article>
    </footer>
  )
}

export default Footer