import Image from 'next/image';
import Link from 'next/link';

interface CardData {
  backgroundImage: string;
  overlayImage: string;
  link: string;
}

const cardData: CardData[] = [
  {
    backgroundImage: 'https://img.freepik.com/premium-photo/dark-green-color-block-brick-wall-texture-pattern-st-patrick-s-day-card-background-also-have-copy-space-text_685067-3709.jpg',
    overlayImage: '/images/projects/aeternum.png',
    link: '/aeternum'
  },
  {
    backgroundImage: 'https://png.pngtree.com/thumb_back/fw800/background/20231219/pngtree-blue-workplace-business-office-background-image_15522876.png',
    overlayImage: '/images/projects/projecthub.png',
    link: '/'
  },
  {
    backgroundImage: 'https://img.freepik.com/premium-photo/3d-illustration-agriculture-field-isolated-white-background-farming-concept_439318-585.jpg',
    overlayImage: '/images/projects/solusiternak.png',
    link: '/'
  },
  {
    backgroundImage: 'https://png.pngtree.com/background/20230424/original/pngtree-person-walking-in-a-red-library-hall-with-bookshelves-picture-image_2460379.jpg',
    overlayImage: '/images/projects/pustakacerdas.png',
    link: '/'
  },
];

export default function CardProjects() {

    return (
        <>
        {cardData.map((card, index) => (
            <Link key={index} href={card.link} passHref>
                <div className="w-full h-[420px] relative group cursor-pointer">
                <img className="w-full h-full object-cover" src={card.backgroundImage} alt="" />
                <div className="w-[400px] h-[200px] bg-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg">
                    <Image 
                    src={card.overlayImage} 
                    alt="Website" 
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority
                    />
                </div>
                <div className="bg-white p-4 hover:bg-black hover:text-white rounded-full absolute bottom-5 right-4 z-10 scale-0 group-hover:scale-100 group-hover:translate-x-0 group-hover:translate-y-0 -translate-x-10 -translate-y-10 transition-all duration-300 ease-linear">
                    <svg className="rotate-45" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 20V4m0 0l6 6m-6-6l-6 6" />
                    </svg>
                </div>
                </div>
            </Link>
        ))}
        </>
    )
}