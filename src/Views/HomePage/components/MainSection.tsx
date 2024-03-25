import Image from 'next/image';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { CiPizza } from 'react-icons/ci';

import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

import MainImage from '/public/main-image.jpg';

const Navbar = () => (
  <nav className="flex flex-row w-full justify-between items-center mb-10 ">
    <CiPizza className="text-3xl text-yellow-700" />
    <div className="flex flex-row space-x-5">
      <a href="/login">About</a>
      <a href="/signup">Contact Us</a>
    </div>
  </nav>
);
const MainSection = () => {
  return (
    <section className="min-h-screen p-5 flex flex-col items-center">
      <Navbar />
      <article
        className={`flex flex-1 flex-row justify-around items-center relative gap-10 w-full flex-wrap`}
      >
        <section className="flex flex-col justify-start items-start gap-5 flex-2 max-w-96 ">
          <h1 className="text-5xl font-bold text-balance">
            Deliver the Most Delicious Pizza to Your Home
          </h1>
          <p className="text-lg font-light">
            Lorem ipsum dor selamet consectetur adipiscing elit. Praesent a
          </p>
          <div className="flex flex-row gap-5">
            <Button>Order Now</Button>
            <Button variant="outline">Learn More</Button>
          </div>
          <div className="flex flex-row items-center gap-8">
            <div className="flex flex-row">
              {new Array(5).fill(null).map((_, index) => (
                <Avatar key={index} className={`${index !== 0 && '-ml-4'}`}>
                  <AvatarImage src={`https://i.pravatar.cc/300?img=${index}`} />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStar className="text-yellow-400 text-lg" />
                <FaStarHalf className="text-yellow-400 text-lg" />
              </div>
              <p className="text-sm text-slate-500">
                Rated 4.5 by 1000+ Customers
              </p>
            </div>
          </div>
        </section>
        <Image
          src={MainImage}
          alt="Main Image"
          className="object-cover w-96 flex-3 rounded-xl shadow-lg"
        />
      </article>
    </section>
  );
};

export default MainSection;
