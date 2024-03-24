'use client';
import React from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { LuChefHat } from 'react-icons/lu';

import { Food } from '@/types/menu';
import { Skeleton } from '@/components/ui/skeleton';

type Props = Food & {
  imageElIdx: number;
};

const images = [
  '',
  'https://www.recipetineats.com/wp-content/uploads/2023/05/Garlic-cheese-pizza_9.jpg',
  'https://baconmockup.com/300/200/',
];

const MenuItem = ({ name, price, isRecommended, imageElIdx }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  return (
    <article className="flex flex-col grow basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 xl:basis-1/5 2xl:basis-1/5 max-h-64 shadow-xl rounded-xl">
      <div className="h-40 relative overflow-hidden">
        {isLoading && <Skeleton className="h-full w-full" />}
        <Image
          src={images[imageElIdx]}
          className="rounded-t-xl"
          alt="Pizza"
          fill
          objectFit="cover"
          onLoad={() => setIsLoading(false)}
        />
      </div>
      <div className="p-5 flex flex-col gap-2 justify-start">
        <div className="flex flex-row gap-2 items-center">
          <p className="font-bold text-l">{name}</p>
          {isRecommended && <LuChefHat className="text-yellow-700" />}
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-2 items-center">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
          </div>
          <p className="text-sm">$ {price}</p>
        </div>
        <p className="font-medium text-xs text-slate-400">
          ipsum lorem dor selamet
        </p>
      </div>
    </article>
  );
};

export default MenuItem;
