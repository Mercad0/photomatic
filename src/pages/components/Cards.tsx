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
    <div className="md:w-[550px] md:h-[520px] bg-white text-black flex text-center flex-col rounded-lg mt-14 shadow-md mx-auto p-8">
      <Image
        src={src}
        alt={alt}
        width={600}
        height={100}
        className="pb-2 md:pb-3 rounded-lg"
        priority={true}
      />

      <div className="text-xl md:text-2xl my-4">{title}</div>
      <div className="text-md md:text-xl">{description}</div>
    </div>
  );
}
