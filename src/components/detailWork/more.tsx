import Image from "next/image";

export default function MoreProjects() {
    return(
        <div className="mt-20">
            <div className="flex items-center justify-center">
                <a href="">
                    <Image 
                    src="/images/projects/aeternum/aeternum.png" 
                    width={100} 
                    height={50} 
                    objectFit="cover" 
                    alt="more" 
                    className="hover:w-40 hover:h-20 transition-all duration-500 ease-linear"
                    />
                </a>
            </div>
        </div>
    )
}