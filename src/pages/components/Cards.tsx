import React from "react";
import Image from "next/image";

interface CardProps {
  src: string;
  title: string;
  description: string;
  alt?: string;
}

export default function Cards({
  src = "",
  title = "Some Title",
  description = "Some Description",
  alt = " some alt text",
}) {
  return (
    <div className="w-[400px] h-[440px] bg-white text-black flex text-center flex-col rounded-lg mt-14 shadow-md p-4">
      <div className="flex justify-center items-center flex-col">
      <Image
        src={src}
        alt={alt}
        width={400}
        height={400}
        className="rounded-lg w-[400px]"
        priority={true}
      />

      <div className="text-xl md:text-2xl my-4">{title}</div>
      <div className="text-md md:text-xl">{description}</div>
      </div>
    </div>
  );
}
