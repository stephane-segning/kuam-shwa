import {Logo} from "@/components/site/logo";
import Link from "next/link";

const menuItems = [
    {
        label: "Home",
        href: "/",
    },

    {
        label: "Agriculture",
        href: "/services/agriculture",
    },

    {
        label: "Logistics",
        href: "/services/logistics",
    },

    {
        label: "Poultry Infrastructure",
        href: "/services/poultry-infra",
    },
    
]

export function Navbar() {
    return (
        <div className='bg-base-200 md:bg-transparent top-0 sticky z-50'>
            <div
                className='transition delay-150 duration-300  app-container  md:py-4 ease-in-out'>
                <nav
                    className='navbar md:bg-base-200/30 md:rounded-2xl md:border backdrop-blur-md px-4'>
                    <div className="navbar-start">
                        <Logo/>
                    </div>
                    <div className="navbar-center"/>
                    <div className="navbar-end">
                        <div className='flex items-center gap-1 md:gap-2 lg:gap-3'>
                            {menuItems.map((item) => (
                                <Link key={item.label} href={item.href}
                                      className='transition btn btn-accent btn-ghost hidden md:flex px-1 lg:px-2 text-xs lg:text-sm whitespace-nowrap'>
                                    {item.label}
                                </Link>
                            ))}

                            <Link href="#contact" className='btn btn-primary text-xs lg:text-sm px-2 lg:px-4'>
                                Contact
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}