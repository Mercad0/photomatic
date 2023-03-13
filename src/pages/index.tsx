import Header from "./components/sections/Header";
import Main from "./components/sections/Main";
import Footer from "./components/sections/Footer";

export default function Home() {
  
  return (
    <>
    <div className="flex flex-col h-full max-w-fit w-screen bg-gray-200">
      <Header />
      <Main />
      <Footer />
    </div>
    </>
  );
}
