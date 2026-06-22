import Link from "next/link";
import Image from "next/image";

interface PhoneCardProps {
  name: string;
  image: string;
  href: string;
}

export default function PhoneCard({
  name,
  image,
  href,
}: PhoneCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center border-r border-gray-200 px-3 py-4"
    >
      {/* Image Container */}
      <div className="relative h-42.5 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="
            object-contain
            transition-transform
            duration-300
            ease-out
            group-hover:scale-105
          "
        />
      </div>

      {/* Title */}
      <h3
        className="
          mt-4
          text-center
          text-[14px]
          font-semibold
          uppercase
          tracking-tight
        "
      >
        {name}
      </h3>
    </Link>
  );
}