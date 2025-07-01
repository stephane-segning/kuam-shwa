import React from 'react';
import {Mail, MapPin, PhoneCall} from "react-feather";

export const GetInTouch: React.FC = () => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto">
                <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
                <p className="text-lg  mb-12">
                    Ready to start your project? Contact us today and let's discuss how we can help you succeed.
                </p>

                <ul className="list">
                    <li className="list-row">
                        <div className='rounded-xl bg-primary size-12 flex items-center justify-center'>
                            <Mail/>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <div className="text-xs uppercase font-semibold opacity-60">Email</div>
                            <a href='mailto:info@beltineboss.com' className="text-lg">
                                info@beltineboss.com
                            </a>
                        </div>
                    </li>

                    <li className="list-row">
                        <div className='rounded-xl bg-primary size-12 flex items-center justify-center'>
                            <PhoneCall/>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <div className="text-xs uppercase font-semibold opacity-60">Phone</div>
                            <div className="text-lg">
                                +1 (555) 123-4567
                            </div>
                        </div>
                    </li>

                    <li className="list-row">
                        <div className='rounded-xl bg-primary size-12 flex items-center justify-center'>
                            <MapPin/>
                        </div>
                        <div className='flex flex-col justify-center'>
                            <div className="text-xs uppercase font-semibold opacity-60">Location</div>
                            <div className="text-lg">
                                Serving nationwide
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </section>
    );
};
