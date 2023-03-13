import Header from "./components/sections/Header";
import Main from "./components/sections/Main";
import Cards from "./components/Cards";

export default function Home() {
  
  return (
    <>
    <div className="flex flex-col mb-40 w-full max-w-fit bg-gray-200">
      <Header />
      <Main />
    </div>
    </>
  );
}
