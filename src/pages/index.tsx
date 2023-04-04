import Header from "./components/sections/Header";
import Main from "./components/sections/Main";
import Footer from "./components/sections/Footer";
import Head from "next/head";

export default function Home() {
  
  return (
    <>
    <div className="flex flex-col h-full max-w-fit w-screen bg-gray-200">
    <Head>
        <title>Fotomatic</title>
        <meta name="description" content="Fotomatic - A place where Camera lens and Filters exist!" />
        <link rel="icon" href="/images/cameraIco.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
    </>
  );
}
