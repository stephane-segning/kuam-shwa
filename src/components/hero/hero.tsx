import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {ArrowRight} from "react-feather";

interface HeroProps {
    buttonPrimaryText: string;
    imageUrl: string;
}

const stats = [
    {value: '2', label: 'Core Services'},
    {value: '100%', label: 'Committed'},
];

export function Hero({
                         imageUrl,
                     }: HeroProps) {
    return (
        <section
            className="app-container px-4 gap-4 w-full min-h-[calc(100vh-256px)] flex flex-col lg:flex-row items-center justify-center text-primary-content overflow-hidden py-4 md:py-8">

            <div
                className="relative z-20 md:text-center lg:text-left flex flex-col items-center lg:items-start lg:w-1/2">

                <div className="badge badge-lg badge-outline mb-4 px-4 py-2">
                    Your Business Partner
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                    <span className="text-primary">&</span><br/>
                    <span>
                        <span className="text-primary">&</span>
                        Agriculture
                    </span>
                    <br/>
                    <span>
                        <span className="text-primary">&</span>
                        Transportation
                    </span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 max-w-3xl">
                    Simba Kuamshwa is dedicated to fostering growth and sustainability in Africa's vital sectors. We
                    empower communities and drive progress through innovative solutions in agriculture and
                    transportation.
                </p>
                <ul className='flex flex-col gap-4 mb-4'>
                    <li className='flex flex-row gap-4'><ArrowRight/> Professional agriculture services</li>
                    <li className='flex flex-row gap-4'><ArrowRight/> Reliable transportation solutions</li>
                    <li className='flex flex-row gap-4'><ArrowRight/> Expert consultation</li>
                    <li className='flex flex-row gap-4'><ArrowRight/> Competitive pricing</li>
                </ul>
                
                <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
                    <button className="btn btn-primary btn-lg px-8 py-3 text-lg font-semibold">
                        <span>Get Started Today</span>
                        <ArrowRight/>
                    </button>
                    <Link
                        href="#contact"
                        className="btn btn-outline btn-lg btn-primary px-8 py-3 text-lg">
                        Get in touch
                    </Link>
                </div>

            </div>

            {/* Image and Stats Card - Right side on large screens, first on small screens */}
            <div
                className="relative z-20 w-full lg:w-1/2 h-[200px] lg:h-[400px] flex items-center justify-center">
                <Image
                    src={imageUrl}
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="rounded-4xl shadow-lg w-full"
                />

                <div
                    className="absolute bottom-4 backdrop-blur-md lg:bottom-10 transform translate-y-5/8 bg-base-100 md:bg-base-100/40 text-primary card">
                    <div className='card-body'>
                        <div className='flex flex-row items-center justify-center gap-8 lg:gap-12'>
                            {stats.map((stat, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <p className="text-xl md:text-5xl font-bold text-primary">{stat.value}</p>
                                    <p className="text-lg font-medium mt-2 text-primary-content">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}