import {social_media} from "@/assets/assets";
import {Coffee} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-black text-gray-50 text-sm py-10 text-center">
            <div className="container">
                <div className='flex gap-8 justify-center'>
                    <Link href={"#about"}>About</Link>
                    <Link href={"#services"}>Services</Link>
                    <Link href={"#works"}>Works</Link>
                    <Link href={"#pricing"}>Pricing</Link>
                </div>
                <div className="flex  justify-center gap-6 mt-6">
                    {
                        social_media.map((media,index) => (
                            <Link key={index} target="_blank" href={media.url}>
                                <Image src={media.img} alt="social media logos" width={30} height={30} />
                            </Link>
                        ))
                    }
                </div>
                <p className="mt-6 flex items-center justify-center gap-0.5">Made with <Coffee className="h-4 w-4 " /> by
                    <Link href={'https://www.instagram.com/vnas_tryiing/'} target="_blank" className="text-indigo-300 "> Anas_bd</Link>
                </p>
            </div>
        </footer>
    );
};
