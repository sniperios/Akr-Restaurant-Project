'use client'
import Image from "next/image";
import logo from "@/public/images/logos/logo8.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Link } from "react-scroll";
import Button from "./ui/Button";

export default function NavBar() {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [isOnlineOrderLoading, setOnlineOrderLoading] = useState(false);
    const [isHomeLoading, setHomeLoading] = useState(false);


    // To check for scrolling
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollPos > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);


    function onOrderOnline() {
        setOnlineOrderLoading(true);
        setTimeout(() => {
            router.push('/OrderOnline');
            setOnlineOrderLoading(false);
        }, 2000);
    }

    function onHome() {
        setHomeLoading(true);
        setTimeout(() => {
            router.push('/');
            setHomeLoading(false);
        }, 2000);
    }

    function FullScreenModal({ isOpen, onClose }: any) {
        const [topValue, setTopValue] = useState("-100%");

        useEffect(() => {
            if (isOpen) {
                setTimeout(() => setTopValue("0"), 0);
            } else {
                setTopValue("-100%");
            }
        }, [isOpen]);

        return (
            <div
                style={{
                    position: "fixed",
                    top: topValue,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgb(225, 15, 40, 0.9)",
                    transition: "top 0.5s ease-in-out",
                    zIndex: 10000,
                }}
                onClick={onClose}
                className="container flex flex-col backdrop-blur-sm"
            >
                <div>
                    {/* Close Button */}
                    <div className="min-[1357px]:hidden conatiner flex justify-end mr-[30px]">
                        <div className="py-6 sm:py-12">
                            <div className="relative py-3 sm:max-w-xl">
                                <button
                                    className="text-white w-10 h-10 relative focus:outline-none"
                                    onClick={() => setOpen(!open)}
                                    id="hamburgerMenu" type="button" data-drawer-target="drawer-backdrop" data-drawer-show="drawer-backdrop" data-drawer-backdrop="true" aria-controls="drawer-backdrop"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                        <span
                                            aria-hidden="true"
                                            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'rotate-45' : '-translate-y-1.5'}`}
                                        ></span>
                                        <span
                                            aria-hidden="true"
                                            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'opacity-0' : ''}`}
                                        ></span>
                                        <span
                                            aria-hidden="true"
                                            className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? '-rotate-45' : 'translate-y-1.5'}`}
                                        ></span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto">
                    <h1 className="text-3xl font-medium font-mono text-white">
                        <div className="space-y-3 mb-[100px] justify-start align-baseline">
                            <button className="flex flex-row gap-2 self-center items-center container justify-around">
                                Home
                            </button>
                            <button onClick={() => router.push('/OrderOnline')} className="flex flex-row items-center">
                                Order Online
                            </button>
                            <button className="flex flex-row gap-2 items-center">
                                <Link activeClass="active" to="contact us" spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link>
                            </button>
                            <button className="flex flex-row gap-2 self-center items-center container justify-around">
                                Location
                            </button>
                        </div>
                    </h1>
                </div>
            </div>
        );
    }

    return (
        <>
            <nav className={`sticky top-0 z-10000 opacity-100 backdrop-blur-sm mx-auto my-auto ${isScrolled && 'border-b-2 border-black/10 border-opacity-40'}`}>
                <div className="items-center justify-between">
                    <div className="mx-auto flex flex-row justify-between text-center items-center">
                        <a className="cursor-pointer" onClick={() => router.push('/')}>
                            <Image src={logo} alt="logo" className=" max-[500px]:scale-75 object-contain max-sm:flex max-sm:justify-center max-sm:container" />
                        </a>
                        <div className="flex flex-row mr-2 text-base justify-center font-bold cursor-pointer max-[1357px]:hidden gap-2 transition-all ease-in-out">
                            <Button title="Home" width={157} />
                            <Button title="Menu" width={157} />
                            <Button title="Contact Us" width={157} />
                            <Button title="Order Online" width={157} />
                        </div>
                        {/* Hamburger Menu */}
                        {
                            !open &&
                            <div className="min-[1357px]:hidden">
                                <div className="py-6 sm:py-12">
                                    <div className="relative py-3 sm:max-w-xl mx-auto">
                                        <button
                                            className="text-gray-500 w-10 h-10 relative focus:outline-none"
                                            onClick={() => setOpen(!open)}
                                            id="hamburgerMenu" type="button" data-drawer-target="drawer-backdrop" data-drawer-show="drawer-backdrop" data-drawer-backdrop="true" aria-controls="drawer-backdrop"
                                        >
                                            <span className="sr-only">Open main menu</span>
                                            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                <span
                                                    aria-hidden="true"
                                                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'rotate-45' : '-translate-y-1.5'}`}
                                                ></span>
                                                <span
                                                    aria-hidden="true"
                                                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? 'opacity-0' : ''}`}
                                                ></span>
                                                <span
                                                    aria-hidden="true"
                                                    className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${open ? '-rotate-45' : 'translate-y-1.5'}`}
                                                ></span>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </nav >
            <FullScreenModal isOpen={open} onClose={() => setOpen(false)} />

        </>
    )
}