import Image from "next/image";

export default function Footer() {
  return (
    <>
    <div className="w-full h-fit py-20 bg-gray-600 mt-20 text-center text-white flex flex-col items-center justify-center">
            <div className="w-full flex-col space-y-4 mb-20">
          <h2 className="md:text-5xl text-3xl font-bold">
            Over 20+ filters to choose from
          </h2>
          <h3 className="md:text-2xl text-xl">
            Feed your creativity with 20 different filter designed by our
            eclectic in-house photographers!
          </h3>
          </div>
      <div className="flex m-6">
        <div className="flex flex-wrap justify-content-center max-w-full">
          <Image
            src={"/images/filter-1.png"}
            alt={"filter 1"}
            width={340}
            height={100}
            className="rounded-lg "
            priority={true}
          />
          <Image
            src={"/images/filter-2.png"}
            alt={"filter 2"}
            width={340}
            height={100}
            className="rounded-lg "
            priority={true}
          />
          <Image
            src={"/images/filter-3.png"}
            alt={"filter 3"}
            width={340}
            height={100}
            className="rounded-lg "
            priority={true}
          />
          <Image
            src={"/images/filter-4.png"}
            alt={"filter 4"}
            width={340}
            height={100}
            className="rounded-lg "
            priority={true}
          />
        </div>
    </div>
      </div>
        <div className="w-full h-fit py-6 text-center text-white align-middle flex flex-col items-center justify-center">
          <h2 className="md:text-2xl text-xl italic font-bold">
          “It&apos;s truly something that could create a brand new photography Renaissance”
          </h2>
          <Image
            src={"/images/photography-logo.png"}
            alt={"photography logo"}
            width={100}
            height={100}
            className="ml-4"
            priority={true}
          />
          </div>
          <div className="justify-between flex space-x-4">
            <p>© 2016 Fotomatic, All Rights Reserved</p>
            <p>Designed in NYC</p>
          </div>
          </>
  );
}
