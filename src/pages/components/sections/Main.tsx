import Image from "next/image";
import Cards from "../Cards";

export default function Main() {
  const photography = [
    {
      src: "/images/feature-1.png",
      title: "Advanced, automatic, instant",
      description:
        "Shutter speed, apperture and flash output adjust automatically",
      alt: "Shutter lens being held by a hand",
      pririty: true,
    },
    {
      src: "/images/feature-2.png",
      title: "Beautifully crafted inside-out",
      description:
        "From the paint outside to the tiny screw inside, Fotomatic is crafted with love and 20-year of expertise",
      alt: "lens description of craft",
      pririty: true,
    },
  ];

  return (
    <div className="w-screen h-full pt-16">
      <div className="flex flex-col w-full relative">
        <Image
          src="/images/banner-landingpage.jpg"
          width={2000}
          height={100}
          priority={true}
          alt="main Image"
        />

        <div className="absolute top-64 left-48 w-[450px] h-80 bg-lime-500 text-white flex-col text-center rounded-xl p-4 hidden md:block">
          <h1 className="text-4xl mt-6">Instant</h1>
          <h2 className="text-5xl mt-4">FORMAT CAMERA</h2>
          <h3 className="text-xl mt-4">
            Email us to request a demo and be in our waiting list for the
            Febuary 2017 release!
          </h3>
          <div className="mt-4">
            <button className="bg-gray-500 hover:bg-lime-800 rounded-md w-fit p-4 px-12 font-bold">
              Join the Waitlist!
            </button>
          </div>
        </div>
        <div className="md:hidden flex flex-col justify-center items-center text-center absolute top-0 left-0 right-0 bottom-0 text-white">
          <h1 className="text-3xl mt-6">Instant</h1>
          <h2 className="text-4xl mt-4">FORMAT CAMERA</h2>
        </div>
      </div>
      <div className="flex md:flex-row gap-6 flex-col">
        {photography.map((photography, index) => (
          <div key={index} className="w-full md:w-1/2">
            <Cards
              src={photography.src}
              title={photography.title}
              description={photography.description}
              alt={photography.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
