import Image from "next/image";
import OurServiceSection from "./components/OurServiceSection";
import TagLineSection from "./components/TaglineSection";

import HostingService from "/public/hosting_service.svg";

const HomePage = () => {
  return (
    <main className="mb-5">
      <section className="min-h-screen p-5 flex flex-col items-center">
        <nav className="flex flex-row w-full justify-between items-center">
          <h1 className="text-2xl">Logo</h1>
          <div className="flex flex-row space-x-5">
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
          </div>
        </nav>
        <article className={`flex flex-1 flex-col justify-center relative`}>
          <section className="flex flex-col items-center p-4 border border-1 rounded-md shadow-md z-10 bg-white relative">
            <h2 className="text-4xl font-bold">Welcome to the app</h2>
            <p className="text-lg">This is a simple app to get you started.</p>
          </section>
          <Image
            src={HostingService}
            alt="Hosting Service"
            className="absolute bottom-20 left-0 right-0 ml-auto mr-auto w-24 h-24 rounded-md"
          />
        </article>
      </section>
      <TagLineSection />
      <h1 className="text-4xl font-bold text-center my-10">Our Clients</h1>
      <OurServiceSection />
    </main>
  );
};

export default HomePage;
