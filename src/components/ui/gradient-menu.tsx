"use client";

import React from 'react';
import { IoHomeOutline, IoCloudDownloadOutline } from 'react-icons/io5';

const menuItems = [
    { title: 'Home', icon: <IoHomeOutline />, gradientFrom: '#a955ff', gradientTo: '#ea51ff', href: '/' },
    { title: 'Download', icon: <IoCloudDownloadOutline />, gradientFrom: '#56CCF2', gradientTo: '#2F80ED', href: '/downloads' },
];

export default function GradientMenu() {
    return (
        <div className="flex justify-center items-center py-2">
            <ul className="flex gap-6">
                {menuItems.map(({ title, icon, gradientFrom, gradientTo, href }, idx) => (
                    <a key={idx} href={href}>
                        <li
                            style={{ '--gradient-from': gradientFrom, '--gradient-to': gradientTo } as React.CSSProperties}
                            className="relative w-[60px] h-[60px] bg-white shadow-lg rounded-full flex items-center justify-center transition-all duration-500 hover:w-[150px] hover:shadow-none group cursor-pointer"
                        >
                            {/* Gradient background on hover */}
                            <span className="absolute inset-0 rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] opacity-0 transition-all duration-500 group-hover:opacity-100"></span>
                            {/* Blur glow */}
                            <span className="absolute top-[10px] inset-x-0 h-full rounded-full bg-[linear-gradient(45deg,var(--gradient-from),var(--gradient-to))] blur-[15px] opacity-0 -z-10 transition-all duration-500 group-hover:opacity-50"></span>

                            {/* Icon */}
                            <span className="relative z-10 transition-all duration-500 group-hover:scale-0 delay-0">
                                <span className="text-2xl text-gray-500 group-hover:text-white transition-colors">{icon}</span>
                            </span>

                            {/* Title */}
                            <span className="absolute text-white uppercase tracking-wide text-sm font-bold transition-all duration-500 scale-0 group-hover:scale-100 delay-150 whitespace-nowrap">
                                {title}
                            </span>
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    );
}
