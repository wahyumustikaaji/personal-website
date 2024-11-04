import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    img: "https://static-00.iconduck.com/assets.00/tailwind-icon-512x309-a8f1tun1.png",
  },
  {
    img: "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo-black.svg",
  },
  {
    img: "https://cdn-icons-png.freepik.com/512/5968/5968509.png",
  },
  {
    img: "https://static-00.iconduck.com/assets.00/laravel-icon-249x256-htls1yg6.png",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbodQVEoT0TbrcZxQsUDnBhAEdVBN9XvmNMQ&s",
  },
  {
    img: "https://ih1.redbubble.net/image.3013846881.2138/st,small,507x507-pad,600x600,f8f8f8.u2.jpg",
  },
];

const ReviewCard = ({ img }: { img: string }) => {
  return (
    <figure className={cn("relative w-40 overflow-hidden")}>
      <div className="flex items-center">
        <img className="object-contain w-14 h-14" alt="Brand logo" src={img} />
      </div>
    </figure>
  );
};

export function Brands() {
  return (
    <div className="relative">
      <Marquee className="[--duration:20s]">
        {reviews.map((review, index) => (
          <ReviewCard key={index} img={review.img} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
