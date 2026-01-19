"use client";
import React from 'react';
import { ArrowBigRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
    onClick?: () => void;
    className?: string;
}

export const DownloadButton = ({ onClick, className }: DownloadButtonProps) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                'group relative cursor-pointer p-2 w-48 border bg-white rounded-full overflow-hidden text-black text-center font-semibold select-none',
                className
            )}
        >
            <span className='translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block'>
                Download Now
            </span>
            <div className='flex gap-2 text-white bg-green-500 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none'>
                <span>Get Hytale</span> <ArrowBigRight className="w-5 h-5" />
            </div>
        </div>
    );
};
