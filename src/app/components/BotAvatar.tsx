import Image from "next/image"
import Avatar from '@/app/assets/BotAvatar.jpg';
import React from "react";

type Props = {
    width?: string;
    height?: string;
}

const BotAvatar: React.FC<Props> = ({ width = 'w-12', height ='h-12' }) => {
    return (
        <div className={`mr-3 bg-white/20 backdrop-blur-md rounded-full p-1 flex items-center justify-center flex-shrink-0 border border-white/30 shadow-lg ${width} ${height}`}>
            <Image 
                src={Avatar}
                alt="Bot Avatar"
                width={60}
                height={60}
                className="rounded-full object-cover w-full h-full"
                priority
            />
        </div>
    )
}

export default BotAvatar