import { ContactForm } from "@/components/contact/contact-form";
import { GetInTouch } from "@/components/contact/get-in-touch";
import {Logo} from "@/components/site/logo";
import {Facebook, Twitter, Youtube} from "react-feather";

export function Footer() {
    return (
        <div className='bg-primary-content text-white py-6'>
            <div className='app-container  md:px-0 '>
                <div className='flex flex-col md:flex-row justify-around'>
                    <div className='md:flex-1/2'>
                        <GetInTouch/>
                    </div>
                    <div className='md:flex-1/2'>
                        <div id="contact">
                            <ContactForm/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='app-container px-4 md:px-0 '>
                <div className='divider divider-primary opacity-15'/>
            </div>

            <footer className="app-container mb-6 footer sm:footer-horizontal items-center p-4">
                <aside className="grid-flow-col items-center">
                    <Logo/>
                    <span>|</span>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a target='_blank' rel='noopener noreferrer' href='#' className='btn btn-soft btn-circle'>
                        <Twitter className='size-5'/>
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='#' className='btn btn-soft btn-circle'>
                        <Youtube className='size-5'/>
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='#' className='btn btn-soft btn-circle'>
                        <Facebook className='size-5'/>
                    </a>
                </nav>
            </footer>
        </div>
    );
}